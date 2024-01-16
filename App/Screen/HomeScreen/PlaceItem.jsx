import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import Color from "../../utils/Color";
import GlobalApi from '../../utils/GlobalAPI';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

export default function PlaceItem({ place }) {
    const PLACE_PHOTO_BASE_URL = "https://places.googleapis.com/v1/";
    return (
        <View style={{
            backgroundColor: Color.WHITE,
            margin: 5,
            borderRadius: 10,
            width: Dimensions.get('screen').width * 0.9
        }}>
            <LinearGradient
        colors={['transparent','#ffffff','#ffffff']}
        >
            {/* Debugging console.log */}
            {/* {console.log(
                'Generated URL:',
                place?.photos
                    ? `${PLACE_PHOTO_BASE_URL}${place?.photos[0]?.name}/media?key=${GlobalApi.API_KEY}&maxHeightPx=800&maxWidthPx=1200`
                    : 'Default Image URL'
            )} */}

            <Image source={
                place?.photos ? 
                    {
                        uri: PLACE_PHOTO_BASE_URL + place?.photos[0]?.name +
                            "/media?key=" + GlobalApi.API_KEY + "&maxHeightPx=800&maxWidthPx=1200"
                    } :
                    require("../../../assets/images/herosec.jpeg")} style={{ width: '100%', borderRadius: 10, height: 150, zIndex: -1 }} />

            <View style={{ padding: 15 }}>
                <Text style={{
                    fontSize: 23,
                    // fontFamily:'outfit-Light'
                }}>{place.displayName?.text}</Text>

                <Text style={{
                    color: Color.GRAY,
                    // fontFamily:'outfit'
                }}>{place?.formattedAddress}</Text>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center' }}>
                <Text style={{
                    fontSize: 14,
                    // fontFamily:'outfit',
                    color: Color.GRAY
                }}>Connectors:</Text>
                <Text style={{
                    // fontFamily:'outfit-Light',
                    fontSize: 20,
                    marginTop: 2,
                }}>{place?.evChargeOptions?.connectorCount} Points</Text>

                <View style={{ padding: 12, backgroundColor: Color.PRIMARY, borderRadius: 6, paddingHorizontal: 14 }}>

                    <FontAwesome name="location-arrow" size={25} color="white" />

                </View>

            </View>

            </LinearGradient> 
        </View>
    )
}