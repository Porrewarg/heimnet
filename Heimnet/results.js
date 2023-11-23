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