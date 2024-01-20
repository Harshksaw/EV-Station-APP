import { View, Text, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useRef, useContext, useState } from 'react'
import PlaceItem from './PlaceItem'
import { SelectMarkerContext } from '../../Context/SelectMarkerContext';
import { getFirestore } from 'firebase/firestore';
import app from '../../utils/FirebaseConfig';
import { useUser } from '@clerk/clerk-expo';

export default function PlaceListView({ placeList }) {

  const flatListRef = useRef(null);
  const [favList , setFavList] = useState([]);

  const {user} = useUser(); 

  const { selectedMarker, setSelectedMarker } = useContext(SelectMarkerContext);
  useEffect(() => {
    selectedMarker && scrollToIndex()
  }, [selectedMarker])

  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({ animated: true, index })
  }
  const getItemLayout = (_, index) => ({
    length: Dimensions.get('window').width,
    offset: Dimensions.get('window').width * index,
    index
  });

  const db = getFirestore(app);
  // useEffect(() => {
  //   user && getFav()
  // }, [user])

  const getFav = async() => {

    const q = query(collection(db, "evfavplace"), where("email", "==",  user?.primaryEmailAddress?.emailAddress));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data())
      setFavList(favList => [...favList, doc.data()]);

    })


  }

  const isFav = (place) => {
    const result = favList.find(fav => fav.placeId === place.id);

    return result ? true : false;
  }

  return (
    <View>
      <FlatList
        data={placeList}
        horizontal={true}
        pagingEnabled
        ref={flatListRef}
        getItemLayout={getItemLayout}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View key={index}>
            <PlaceItem place={item} isFav={isFav(item)}  markedFav={()=> getFav()} />
          </View>
        )}
      />
    </View>
  )
}