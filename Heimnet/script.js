// // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1v8Q19i9WV2UZLlQPLWHxOrWGfKF8tB4",
    authDomain: "heimnet-95306.firebaseapp.com",
    databaseURL: "https://heimnet-95306-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "heimnet-95306",
    storageBucket: "heimnet-95306.appspot.com",
    messagingSenderId: "919356303287",
    appId: "1:919356303287:web:83e57a5adebbed90852a32",
    measurementId: "G-8YWJ0BE4WB"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Create a reference to the properties collection
const propertiesRef = collection(db, "properties");

// Get all properties from firebase and log them to the console
const querySnapshot = await getDocs(propertiesRef);
querySnapshot.forEach((doc) => {
    console.log(doc.data());
});


// Add event listener to search button
document.getElementById("search-button").addEventListener("click", searchProperties);

// Query filtered properties from the firestore database
function searchProperties(event) {
    // Prevent default behaviour
    event.preventDefault();

    // Collect all data from the form
    const searchBar = document.getElementById("autocomplete-input");
    // Checkboxes
    const allCategories = document.getElementById("checkbox-item_types-all");
    const detachedHouse = document.getElementById("checkbox-item_types-eneboliger");
    const semiDetachedHouse = document.getElementById("checkbox-item_types-tomannsboliger");
    const apartment = document.getElementById("checkbox-item_types-leiligheter");
    const leisureHome = document.getElementById("checkbox-item_types-fritidsboliger");
    const empty = document.getElementById("checkbox-item_types-tomt");
    const farm = document.getElementById("checkbox-item_types-gard");
    const other = document.getElementById("checkbox-item_types-annet");
    // Dropdowns
    const rooms = document.getElementById("select-rooms_min");
    const size = document.getElementById("select-living_area_min");
    const price = document.getElementById("select-price_max");

    //TODO
}

/*
// Replace 'YOUR_API_KEY' with your Google Maps API Key
const apiKey = 'YOUR_API_KEY';

// Function to initialize the map
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 }, // Default center
        zoom: 4, // Default zoom level
    });

    // Function to perform the search
    function performSearch() {
        const searchInput = document.getElementById('search-input').value;
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: searchInput }, (results, status) => {
            if (status === 'OK') {
                map.setCenter(results[0].geometry.location);
                const marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    // Add click event to the search button
    document.getElementById('search-button').addEventListener('click', performSearch);
}

// Load the Google Maps API
function loadGoogleMapsScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
}

// Load Google Maps when the page loads
window.onload = loadGoogleMapsScript;

*/
