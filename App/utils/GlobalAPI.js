import axios from "axios";


const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby"
const API_KEY = 'AIzaSyDVLJFRArQ8mG3r2daEZTtVOgsitJqRxhA';




const config = {
    headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": [
            "places.displayName",
            "places.formattedAddress",
            "places.location",
            "places.evChargeOptions",
            "places.photos",
        ],
    },
};


const NewNearByPlace = (data) => {
    console.log("InNewNearBYPlace")
    const place = axios?.post(BASE_URL, data, config);
    console.log("places->" ,place)
}
export default {
    NewNearByPlace,
  };