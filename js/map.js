// Initialize Leaflet Map
document.addEventListener('DOMContentLoaded', function () {
    var mapContainer = document.getElementById('map-container');
    var map = null; // Make map globally accessible within this scope
    var sampleOverlayLayer = null; // For demonstrating overlay toggle

    if (mapContainer) {
        mapContainer.innerHTML = '';
        map = L.map(mapContainer).setView([41.311158, 69.279737], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([41.311158, 69.279737]).addTo(map)
            .bindPopup('Тошкент шаҳри.')
            .openPopup();
        console.log("Leaflet map initialized.");

        // --- Filter and Overlay Logic ---
        var applyFiltersBtn = document.getElementById('apply-filters-btn');
        var dateStartInput = document.getElementById('date-filter-start');
        var dateEndInput = document.getElementById('date-filter-end');
        var satelliteSelect = document.getElementById('satellite-filter');
        var cloudCoverInput = document.getElementById('cloud-cover-filter');

        var adminOverlayCheckbox = document.getElementById('overlay-admin');
        var ndviOverlayCheckbox = document.getElementById('overlay-vegetation');
        var waterOverlayCheckbox = document.getElementById('overlay-water');

        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', function() {
                console.log("Applying filters:");
                console.log("Date Start:", dateStartInput.value);
                console.log("Date End:", dateEndInput.value);
                console.log("Satellite:", satelliteSelect.value);
                console.log("Cloud Cover:", cloudCoverInput.value);
                
                // Placeholder: Actual filter application on map data would go here
                alert("Фильтрлар консолга чиқарилди. Амалдаги харита маълумотларини янгилаш керак.");
            });
        }

        // Example of toggling an overlay (Administrative Boundaries)
        if (adminOverlayCheckbox && map) {
            adminOverlayCheckbox.addEventListener('change', function() {
                if (this.checked) {
                    // Create a sample GeoJSON layer (replace with actual data)
                    var sampleAdminData = {
                        "type": "FeatureCollection",
                        "features": [
                            {
                                "type": "Feature",
                                "properties": {"name": "Намунавий туман"},
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [[[
                                        [69.20, 41.25],
                                        [69.35, 41.25],
                                        [69.35, 41.35],
                                        [69.20, 41.35],
                                        [69.20, 41.25]
                                    ]]]
                                }
                            }
                        ]
                    };
                    sampleOverlayLayer = L.geoJson(sampleAdminData, {
                        style: function (feature) {
                            return {color: "#ff7800", weight: 2, opacity: 0.65};
                        }
                    }).bindPopup(function (layer) {
                        return layer.feature.properties.name;
                    }).addTo(map);
                    console.log("Admin overlay added.");
                } else {
                    if (sampleOverlayLayer) {
                        map.removeLayer(sampleOverlayLayer);
                        sampleOverlayLayer = null;
                        console.log("Admin overlay removed.");
                    }
                }
            });
        }
        // Add similar event listeners for ndviOverlayCheckbox and waterOverlayCheckbox
        // to toggle their respective layers when they are ready.

    } else {
        console.log("Map container not found for Leaflet initialization.");
    }
}); 