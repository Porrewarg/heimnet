// Select title
const title = document.getElementById("title");
// If query from index.html exists then add it to the title
if (sessionStorage.getItem("query")) {
    title.innerText = "Boliger til salgs - " + sessionStorage.getItem("query");
}
// If properties in sessionStorage
if (sessionStorage.getItem("properties")) {
    // Get properties
    const properties = JSON.parse(sessionStorage.getItem("properties"));
    // Select outer container/div
    const container = document.getElementById("search-result-map-container");
    // Display properties on page
    properties.forEach(property => {
        // Create container
        const propertyContainer = document.createElement("div");
        // Create image
        const image = document.createElement("img");
        image.src = property.pictures[0];
        // Create title
        const name = document.createElement("h2");
        name.innerText = property.name;
        // Create details
        const details = document.createElement("p");
        details.innerText =
            `${property.address}
            ${property.city}
            ${property.price} kr
            ${property.size} m²
            ${property.rooms} rum
            ${parseInt(property.price / property.size)} kr/m²`
        // Put everything together
        propertyContainer.appendChild(image);
        propertyContainer.appendChild(name);
        propertyContainer.appendChild(details);
        container.appendChild(propertyContainer);
    });
}

(g => {
    var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => {
        await (a = m.createElement("script"));
        e.set("libraries", [...r] + "");
        for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
        e.set("callback", c + ".maps." + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || "";
        m.head.append(a)
    }));
    d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n))
})({
    key: "YOUR_API_KEY",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
})

let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

initMap();