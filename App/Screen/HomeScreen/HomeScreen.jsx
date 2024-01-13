import React, { useContext, useEffect } from "react";
import { useNavigationState } from "@react-navigation/native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppMapView from "./AppMapView";
import { Header } from "../HeaderScreen/Header";
import SearchBar from "./SearchBar";
import { UserLocationContext } from "../../Context/UserLocationContext";
import GlobalAPI from "../../utils/GlobalAPI";






export default function HomeScreen() {
    const { location, setLocation } = useContext(UserLocationContext)
    const data = {
        includedTypes: ["electric_vehicle_charging_station"],
        maxResultCount: 10,
        locationRestriction: {
          circle: {
            center: {
              latitude: location?.latitude,
              longitude: location?.longitude,
            },
            radius: 500000.0,
          },
        },
      };
      GlobalAPI.NewNearByPlace(data)
    //   .then((resp) => {
    //     console.log(JSON.stringify(resp.data));
    //   });

  

    return (
        <View>
            <View style={StyleSheet.headerContainer}>
                <Header />
                <SearchBar searchedLocation={(location) => console.log(location)} />
            </View>
            <AppMapView />
        </View>
    );
};


const StyleSheet = ({
    headerContainer: {
        position: "absolute",
        zIndex: 10,
        padding: 20,
        width: "100%",
        paddingHorizontal: 20,



    },
})