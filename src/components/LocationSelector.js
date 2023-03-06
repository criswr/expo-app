import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as Location from 'expo-location'
import colors from '../constants/colors'
import googleMapsKey from '../constants/apiKeys'

const LocationSelector = (props) => {
    const [pickedLocation, setPickedLocation] = useState()

    const verifyPermissions = async () => {
        const {status} = await Location.requestForegroundPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert('Location permissions needed', 'Location permissions are needed to us this feature', [{text: OK}])
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

        /* const geocoding = await fetch (`https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationData.lat},${locationData.lng}&key=${googleMapsKey}`) */


        setPickedLocation(locationData)
        props.onLocation(locationData)
    }

  return (
    <View>
      {
      pickedLocation 
      ? 
      <View style={styles.directionRow}><Ionicons name='location-outline' size={20} color='deepskyblue' /><Text style={styles.locationText}>At {pickedLocation.lat}, {pickedLocation.lng}</Text></View>
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
        color: colors.primary,
        marginLeft: 5
    }
})