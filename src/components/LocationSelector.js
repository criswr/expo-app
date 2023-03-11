import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as Location from 'expo-location'
import colors from '../constants/colors'
import googleMapsKey from '../constants/apiKeys'
import ReverseGeocoding from './ReverseGeocoding'


const LocationSelector = (props) => {
    const [pickedLocation, setPickedLocation] = useState()

    const verifyPermissions = async () => {
        const {status} = await Location.requestForegroundPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert('Location permissions needed', 'Location permissions are needed to use this feature', [{text: Ok}])
            return false
        }
        
        return true
    }

    const handleGetLocation = async () => {
        const isLocationGranted = await verifyPermissions()

        if (!isLocationGranted) return

        const location = await Location.getCurrentPositionAsync()

        const locationData = {
            lat: location.coords.latitude,
            lng: location.coords.longitude
        }

        setPickedLocation(locationData)
        props.onLocation(locationData)
    }

  return (
    <View>
      {
      pickedLocation 
      ? 
      <Pressable onPress={handleGetLocation} style={styles.directionRow}><Ionicons name='location-outline' size={20} color='deepskyblue' /><Text style={styles.locationText}>At <ReverseGeocoding locationData={pickedLocation}/></Text></Pressable>
      : 
      <Pressable onPress={handleGetLocation} style={styles.directionRow}><Ionicons name='location-outline' size={20} color='white' /><Text style={styles.locationText}>Location</Text></Pressable>
      }
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
    directionRow: {
        flexDirection: 'row',
        marginVertical: 10
    },
    locationText: {
        color: colors.deactivated,
        marginLeft: 5
    }
})