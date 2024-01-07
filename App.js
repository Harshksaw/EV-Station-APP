import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { ClerkProvider, SignedIn, SignedOut  } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './App/Navigation/TabNaviagtion';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import Mytabs from './App/Navigation/TabNaviagtion';
import LoginScreen from './App/Screen/LoginScreen/LoginScreen';
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


export default function App() {

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
    <View onLayout={onLayoutRootView}>
      
      <SignedIn>
        <NavigationContainer>
          <MyTabs/>
        </NavigationContainer>
      </SignedIn>

      <SignedOut>
      <LoginScreen/>
      </SignedOut>


      <StatusBar style="auto" />
    </View>
  </ClerkProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



        


