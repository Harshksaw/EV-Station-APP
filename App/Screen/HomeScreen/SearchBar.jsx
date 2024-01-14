import React from 'react'
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { Ionicons } from '@expo/vector-icons';


const SearchBar = ({ searchedLocation }) => {


  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: 5,
        backgroundColor: 'white',
        borderRadius: 6,
      }}
    >
      <Ionicons name="location-sharp" size={24} color="gray" style={{ paddingTop: 10 }} />
      <GooglePlacesAutocomplete
        placeholder='Search Ev Charging Stations'
        fetchDetails={true}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {


          searchedLocation(details?.geometry?.location)
        }}
        query={{
          key: 'AIzaSyB9ctiAb-J9CZil_ZlpAg3ZOXpxwudHlNw',
          language: 'en',
        }}
      />

    </View>
  )
}

export default SearchBar
