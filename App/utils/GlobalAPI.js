import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby";
const API_KEY = "AIzaSyB9ctiAb-J9CZil_ZlpAg3ZOXpxwudHlNw";

const config = {
    headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': [
            'places.displayName',
            'places.formattedAddress',
            'places.location',
            'places.evChargeOptions',
            'places.photos'
        ]
    }
};

const NewNearByPlace = async (data) => {
    try {
        const response = await axios.post(BASE_URL, data, config);
        console.log("places ->", response.data); // Assuming the response contains the data you're interested in
        return response.data; // Return the data if needed
    } catch (error) {
        console.error("Error in NewNearByPlace:", error);
        // Handle the error as needed
        throw error; // Rethrow the error or handle it according to your requirements
    }
};

export default {
    NewNearByPlace

};
