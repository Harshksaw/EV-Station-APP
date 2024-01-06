import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Color from "../utils/Color";

import { useWarmUpBrowser } from "../../hooks/warmupbrowser.js";
import * as WebBrowser from "expo-web-browser";
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { useSignIn } from "@clerk/clerk-expo";
import { useOAuth } from "@clerk/clerk-expo";
export default function LoginScreen() {
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = async() =>{
      try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
  }





  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // backgroundColor: Color.GRAY,
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row-reverse",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "gray",
            marginRight: 10,
          }}
        >
          Station
        </Text>
        <Image
          style={styles.logoImage}
          source={require("../../assets/images/logo.jpeg")}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "gray",
            marginLeft: 10,
          }}
        >
          EV
        </Text>
      </View>
      <Image
        style={styles.bgImage}
        source={require("../../assets/images/herosec.jpeg")}
      />

      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "black",
            backgroundColor: "lightyellow",
            marginLeft: 10,
            marginTop: 20,
          }}
        >
          You Ultimate Ev Charging Station App{" "}
        </Text>

        <Text
          style={{
            fontSize: 14,
            fontWeight: "semibold",
            color: "black",
            padding: 15,
            marginLeft: 10,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Find EV Charging Station near you , plan trip and so much more in just one click{" "}
        </Text>

      </View>
      <TouchableOpacity
       style={styles.login}
       onPress={onPress}
      >
       
          <Text style={{
            color: 'white',
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 25,
            marginTop: 10,
            textShadowColor: 'rgba(0, 11, 11, 0.5)',
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10
          }}>
            Login with <Text style={{ color:"white" }}>GOOGLE</Text>
          </Text>



      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logoImage: {
    width: 100,
    height: 120,
    objectFit: "contain",
  },
  bgImage: {
    width: "100%",
    height: "60%",

    resizeMode: "cover",
    justifyContent: "center",
  },
  desc: {
    fontSize: 24,
    fontWeight: "bold",
    color: "gray",

    marginLeft: 10,
    marginTop: 20,
  },
  login: {


    width: 300,
    backgroundColor: Color.PRIMARY,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 99,
    padding: 10,


    marginTop: 20,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  loginText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 10,
    textShadowColor: "rgba(0, 11, 11, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

});
