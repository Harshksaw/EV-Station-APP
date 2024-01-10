import React from "react";
import { useNavigationState } from "@react-navigation/native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppMapView from "./AppMapView";
import { Header } from "../HeaderScreen/Header";
import SearchBar from "./SearchBar";





export default function HomeScreen() {
    return (
        <View>
                <View style={StyleSheet.headerContainer}>
                <Header/>
                <SearchBar searchedLocation={(location)=> console.log(location)}/>
                </View>
            <AppMapView />
        </View>
    );
};


const StyleSheet = ({
    headerContainer: {
        position: "absolute",
        zIndex:10,
        padding: 20,
        width: "100%",
        paddingHorizontal: 20,



    },
})