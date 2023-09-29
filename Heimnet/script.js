
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



