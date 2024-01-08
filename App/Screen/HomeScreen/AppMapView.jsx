import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import MapViewStyle from '../../utils/MapViewStyle.json'


function AppMapView() {
    console.log("Appmapview")
    return (

        <MapView style={styles.map} 
        customMapStyle={MapViewStyle}

        />

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