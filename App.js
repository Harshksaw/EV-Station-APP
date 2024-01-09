import { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginScreen from './App/Screen/LoginScreen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";

import * as Location from 'expo-location';


import { NavigationContainer } from '@react-navigation/native';
import MyTabs from "./App/Navigation/TabNavigation";
import { UserLocationContext } from './App/Context/UserLocationContext';



const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {

    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      console.log("loc", location)
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/RethinkSans-VariableFont_wght.ttf'),
    'Inter-Italic': require('./assets/fonts/RethinkSans-Italic-VariableFont_wght.ttf'),

  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={'pk_test_bW9kZXJuLWNvbGxpZS05LmNsZXJrLmFjY291bnRzLmRldiQ'}>

      <UserLocationContext.Provider value={{location}}  >
        <View style={styles.container} onLayout={onLayoutRootView}>

          <SignedIn>


            <MyTabs />


          </SignedIn>

          <SignedOut>

            <LoginScreen />
          </SignedOut>


          <StatusBar style="auto" />
        </View>
      </UserLocationContext.Provider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,

  },
});