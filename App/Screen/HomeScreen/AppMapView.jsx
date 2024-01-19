import React, { useContext } from 'react';
import MapView, {Marker} from 'react-native-maps';
import { Image, StyleSheet, Text, View } from 'react-native';
import MapViewStyle from '../../utils/MapViewStyle.json'
import { UserLocationContext } from '../../Context/UserLocationContext';
import Markers from './Markers';


function AppMapView({placeList}) {

    const {location , setLocation} = useContext(UserLocationContext);

    // console.log("placeList->>", placeList[1].location)
    // console.log("location", location)



    // return location?.latitude && (
    return (
      <View>

        <MapView style={styles.map} 
        customMapStyle={MapViewStyle}
        region={{
          latitude:location?.latitude,
          longitude:location?.longitude,
          latitudeDelta:0.0422,
          longitudeDelta:0.0421,
  
        }}
        


        >
          {location? <Marker
         coordinate={{
          latitude:location?.latitude,
          longitude:location?.longitude
         }}
        >
          <Image source={require('../../../assets/images/car.png')} style={{width:60 , height:60}} />

          </Marker> : null}

          { placeList.map((place, index)=>(



              <Markers place={place} index={index} key={index} />
            ))}


           
        </MapView>

        </View>

    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });

  export default AppMapView;    