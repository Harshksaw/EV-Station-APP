import { Image, Text, View } from "react-native"
import { Marker } from "react-native-maps"

const Markers = ({place , index}) =>{
    console.log(place.location)
    return place&&(
      <Marker
           coordinate={{
            latitude:place.location?.latitude,
            longitude:place.location?.longitude
           }}
  
           onPress={()=>setSelectedMarker(index)}
          >

            <Image source={require('./../../../assets/images/marker.jpeg')} style={{width:60,height:60}}/>
          </Marker>
    )
  } 


export default Markers;