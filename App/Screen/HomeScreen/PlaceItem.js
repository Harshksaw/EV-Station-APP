import React from 'react'
import { Dimensions, Image, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const PlaceItem =({place}) => {
  console.log('PlaceItem')
  return (
    <View
    style={{
        margin:7,
        width:Dimensions.get('screen').width*0.9
    }}
    >
            {/* <Image source={require('./../../../assets/images/logo.jpeg')}
                style={{width:'100%', borderRadius:10 ,  height:130}}
            />
            <View style={{padding:15}}>

              <Text
              style={{fontSize: 23,
                color:"gray",
                fontFamily:'outfit'
              }}
              >{place.displayName?.text}</Text>

              <Text
              style={{
                color:"gray",
                fontFamily:'outfit'
              }}
              >{place?.shortFormattedAddress}</Text>

            </View> */}
            <Text>
              harsh
            </Text>
        </View>
  )
}

export default PlaceItem
