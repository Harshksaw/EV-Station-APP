import React from "react";
import { useNavigationState } from "@react-navigation/native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppMapView from "./AppMapView";

export default function HomeScreen() {
    return (
        <View>
            <Text>Map</Text>
            <AppMapView />
        </View>
    );
};


