import { Image, View } from "react-native"
import { Marker } from "react-native-maps"

const Markers = ({place , index}) =>{
    // console.log(place.location)
    return(
        <Marker
        coordinate={{

            longitude:place.location?.longitude,
          latitude:place.location?.latitude,
        //   latitude:40.70,
        //   longitude: -73.92,
        }}
          onPress={()=>console.log("marker index", index)}
        >

          <Image source={require('../../../assets/images/marker.jpeg')} style={{width:60 , height:60}} />

        </Marker>
       
    )
}

export default Markers