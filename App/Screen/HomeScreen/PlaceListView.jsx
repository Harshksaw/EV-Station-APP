import React from 'react'
import { FlatList, View } from 'react-native'
import PlaceItem from './PlaceItem'


const PlaceListView = ({placeList}) => {

  return (
    <View>
        <FlatList
        data={placeList} 
        horizontal={true}

        renderItem={({item, index})=>(
            <View key={index}> 
                <PlaceItem place={item} />
            </View>
        )}
        />
    </View>
  )
}

export default PlaceListView
