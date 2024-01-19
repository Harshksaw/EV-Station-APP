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
import { SelectMarkerContext } from "../../Context/SelectMarkerContext";

export default function HomeScreen() {
  const { location, setLocation } = useContext(UserLocationContext);

  const [placeList, setPlaceList] = useState([]);

  const [SelectedMarker, setSelectedMarker] = useState([]);
  useEffect(() => {
    // location &&     GetNearByPlace();
    GetNearByPlace();
  }, [location]);

  const GetNearByPlace = () => {
    const data = {
      includedTypes: ["electric_vehicle_charging_station"],
      maxResultCount: 10,
      locationRestriction: {
        circle: {
          center: {
           
               latitude:location?.latitude,
               longitude:location?.longitude


          },
          radius: 5000.0
        }
      }
    };
    GlobalAPI.NewNearByPlace(data)
      .then((resp) => {
        const response = JSON.stringify(resp);
        setPlaceList(resp.places);
      });
  };

  return (
    <SelectMarkerContext.Provider value={{ SelectedMarker, setSelectedMarker }}>
      <View>
        <View style={styles.headerContainer}>
          <Header />
          <SearchBar searchedLocation={(location) => setLocation({
            latitude: location.lat,
            longitude: location.lng,
          })} />
        </View>

        {placeList && <AppMapView placeList={placeList} />}

        <View style={styles.placeListContainer}>
          {placeList && <PlaceListView placeList={placeList} />}
        </View>
      </View>
    </SelectMarkerContext.Provider>
  );
}

const styles = {
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
    paddingHorizontal: 20,
  },
};
