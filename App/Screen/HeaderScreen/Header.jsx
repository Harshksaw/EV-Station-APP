import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useUser } from '@clerk/clerk-expo'
import { FontAwesome } from '@expo/vector-icons';
export const Header = () => {
  const { user } = useUser()
  return (
    <View style ={{padding:5}}>

    <View style={styles.container}>


      <Image
        source={{ uri: user?.imageUrl }}
        style={{ width: 40, height: 40, borderRadius: 20 }}
        />
      <Image
        source={require('../../../assets/images/logo.jpeg')}
        style={{ width: 50, height: 40, objectFit: 'contain' }}
        />

          <FontAwesome name="filter" size={24} color="black" />
    </View>

        </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundCOlor:"#ffffff87",
  }

})