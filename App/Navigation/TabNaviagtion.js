import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../Screen/HomeScreen/HomeScreen';
import { ProfileScreen } from '../Screen/ProfileScreen/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import Color from '../utils/Color';
import FavouriteScreen from '../Screen/FavouriteScreen/FavouriteScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: Color.BLACK,
                    marginTop: "211%",


                    borderTopWidth: 0,
                    elevation: 0,
                    height: 40
                }

            }}
        >
            <Tab.Screen name="search" component={HomeScreen} options={{
                tabBarLabel: 'Search',
                tabBarActiveTintColor: Color.primary,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-search" color={color} size={size} />



                )
            }} />

            <Tab.Screen name="home" component={HomeScreen}
                options={{
                    tabBarLabel: 'Favorite',
                    tabBarActiveTintColor: Color.primary,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-home" color={color} size={size} />

                    )

                }}

            />
            <Tab.Screen name="profile" component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarActiveTintColor: Color.primary,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user-circle" color={color} size={size} />

                    )

                }}

            />

        </Tab.Navigator>
    );
}
export default MyTabs;