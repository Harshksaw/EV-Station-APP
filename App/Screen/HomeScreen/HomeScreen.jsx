import React, { useContext, useEffect, useState } from "react";
import { useNavigationState } from "@react-navigation/native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppMapView from "./AppMapView";
import { Header } from "../HeaderScreen/Header";
import SearchBar from "./SearchBar";
import { UserLocationContext } from "../../Context/UserLocationContext";
import GlobalAPI from "../../utils/GlobalAPI";
import PlaceListView from "./PlaceListView";


export default function HomeScreen() {
  const { location, setLocation } = useContext(UserLocationContext)

  const [placeList, setPlaceList] = useState({});
  // console.log("placeList ->" ,placeList)

  useEffect(() => {
    // location &&     GetNearByPlace();
    GetNearByPlace();

  }, [location])

  const GetNearByPlace = () => {
    const data = {
      "includedTypes": ["electric_vehicle_charging_station"],
      "maxResultCount": 10,
      "locationRestriction": {
        "circle": {
          "center": {
            latitude: 40.70,
            longitude: -73.92
          },
          // "latitude": location?.latitude,

          // "longitude": location?.longitude},
          "radius": 5000.0
        }
      }
    }
    GlobalAPI.NewNearByPlace(data)
      .then((resp) => {
        // console.log("getnearByPlace")
        const response = JSON.stringify(resp)

        setPlaceList(resp.places)
      })
  }



  return (
    <View>
      <View style={StyleSheet.headerContainer}>
        <Header />
        <SearchBar searchedLocation={(location) => console.log(location)} />
      </View>
       {/* //contion placelist ?&& */}

       {placeList && <AppMapView placeList={placeList} />
       }
      <View style={StyleSheet.placeListContainer}>

        <PlaceListView placeList={placeList} />
      </View>
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
  placeListContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    width: "100%",
    paddingHorizontal: 20
  }
})