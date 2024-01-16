import React from 'react'
import { FlatList, Text, View } from 'react-native'
import PlaceItem from './PlaceItem'


const PlaceListView = ({placeList}) => {

  const debug = ()=>{

    console.log("placelist" ,placeList)
    {placeList.map((item, idx)=>{
      console.log("item" ,item)
    })
  }
  debug();
}

  return (
    <View>

        <FlatList
        data={placeList} 
        horizontal={true}

        renderItem={({place, index})=>(
                
            <View key={index}> 
                {/* <PlaceItem place={place} /> */}
                <View>
                  <Text>place</Text>
            </View>
            </View>
        )}
        />
    </View>
  )
}

export default PlaceListView
