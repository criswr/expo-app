import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import googleMapsKey from '../constants/apiKeys'
import colors from '../constants/colors'


const ReverseGeocoding = ({locationData}) => {
    const [reverseGeocoding, setReverseGeocoding] = useState()

    useEffect(() => {
      handleReverseGeocoding()
    }, [])
    

    const handleReverseGeocoding = async () => {
        const geocoding = await fetch (`https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationData.lat},${locationData.lng}&key=${googleMapsKey.googleMapsKey}`)
        const geoResData = await geocoding.json()

        setReverseGeocoding(geoResData.results[0].formatted_address)
    }

    return (<Text style={styles.locationText}>{reverseGeocoding}</Text>)
}

export default ReverseGeocoding

const styles = StyleSheet.create({
    locationText: {
        color: colors.deactivated,
    }
})