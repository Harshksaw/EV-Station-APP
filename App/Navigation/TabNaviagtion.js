import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import { View } from 'react-native';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle:{
  position: "absolute",
  bottom: 0,
  right: 0,
  left: 0,
  elevation: 0,
  height: 60,
  background: "#fff"
  }
  }

function MyTabs() {
    return (

            <NavigationContainer>
              <Tab.Navigator screenOptions={screenOptions}>
             
                <Tab.Screen name='Home' 
                component={HomeScreen}
                options={
                  {tabBarIcon : ({focused})=>{
                    return(
                      <View style={{alignItems:'center' , justifyContent:'center'}}>
                     <FontAwesome5 name="portrait" size={24} color={focused?'red':'green'} />
                      <Text style={{fontSize:12 , color:"black"}}>Portfolio</Text>
                      </View>
                    )
                    
                  }}
                 }
                />
                {/* <Tab.Screen name='Prices' 
                component={HomeScreen}
                options={
                  {tabBarIcon : ({focused})=>{
                    return(
                      <View style={{alignItems:'center' , justifyContent:'center'}}>
                     <Entypo name="price-tag" size={24} color={focused?'red':'green'} />
                      <Text style={{fontSize:12 , color:"black"}}>Prices</Text>
                      </View>
                    )
                    
                  }}
                 }
                /> */}

              </Tab.Navigator>
            </NavigationContainer>
    );
  }
  
  
export default MyTabs;


   <Tab.Screen
                 name='Home' 
                 component={HomeScreen}
                 options={
                  {tabBarIcon : ({focused})=>{
                    return(
                      <View style={{alignItems:'center' , justifyContent:'center'}}>
                      <Entypo name="home" size={24} color={focused?'red':'green'} />
                      <Text style={{fontSize:12 , color:"black"}}>Home</Text>
                      </View>
                    )
                    
                  }}
                 }
                 />