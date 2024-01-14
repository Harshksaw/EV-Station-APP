import React, { useContext } from 'react';
import MapView, {Marker} from 'react-native-maps';
import { Image, StyleSheet, View } from 'react-native';
import MapViewStyle from '../../utils/MapViewStyle.json'
import { UserLocationContext } from '../../Context/UserLocationContext';


function AppMapView() {

    const {location , setLocation} = useContext(UserLocationContext);

    // console.log("loc", location)



    return location?.latitude && (
      <View>

        <MapView style={styles.map} 
        customMapStyle={MapViewStyle}
        region={{
          // latitude:location?.latitude,
          latitude:40.70,
          longitude: -73.92,
          latitudeDelta:0.0422,
          longitudeDelta:0.0421,
        }}
        


        >
        <Marker
        coordinate={{

          // latitude:location?.latitude,
          // longitude:location?.longitude,
          latitude:40.70,
          longitude: -73.92,
        }}

        >
          <Image source={require('../../../assets/images/car.png')} style={{width:60 , height:60}} />
        </Marker>
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