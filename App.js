import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut  } from "@clerk/clerk-expo";
export default function App() {
  return (
    <SafeAreaView>
      <ClerkProvider publishableKey={'pk_test_aW5ub2NlbnQta3JpbGwtMTguY2xlcmsuYWNjb3VudHMuZGV2JA'}>


        <View>
          <SignedIn>
            <Text>You are Signed in</Text>
          </SignedIn>
          <SignedOut>
            
            <LoginScreen />
          </SignedOut>



        </View>
      </ClerkProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
