document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generate-visualization-btn');
    const vizTypeSelect = document.getElementById('viz-type');
    const dataSelect = document.getElementById('viz-data-select');

    const mapContainer = document.getElementById('visualization-map-container');
    const chartContainer = document.getElementById('visualization-chart-container');
    const tableContainer = document.getElementById('visualization-table-container');
    const placeholderMessage = document.getElementById('viz-placeholder-message');

    let vizMap = null; // To store Leaflet map instance

    // Function to initialize or update the map
    function initOrUpdateVizMap() {
        if (mapContainer.style.display === 'none') return; // Only init if visible

        const mapElement = mapContainer.querySelector('p') ? mapContainer : document.createElement('div');
        if (!mapContainer.querySelector('p')) { // if map already initialized don't re-create div
             mapElement.style.height = '400px'; // ensure height
        }
       
        if (mapContainer.querySelector('p')){
             mapContainer.innerHTML = ''; // Clear placeholder
             mapContainer.appendChild(mapElement);
        }

        if (!vizMap) {
            vizMap = L.map(mapElement).setView([41.311158, 69.279737], 7); // General view
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(vizMap);
            console.log("Visualization map initialized.");
        } else {
            vizMap.invalidateSize(); // Refresh map size if it was hidden
        }
        // Add specific layers based on dataSelect.value here for a real application
        L.marker([40.7128, -74.0060]).addTo(vizMap).bindPopup(dataSelect.options[dataSelect.selectedIndex].text);
    }

    // Function to show/hide containers based on selection
    function displayVizOutput(type) {
        placeholderMessage.style.display = 'none';
        mapContainer.style.display = 'none';
        chartContainer.style.display = 'none';
        tableContainer.style.display = 'none';

        if (type === 'map') {
            mapContainer.style.display = 'block';
            initOrUpdateVizMap();
        } else if (type === 'chart') {
            chartContainer.style.display = 'block';
            // Chart is already initialized by js/charts.js if canvas is visible
            // You might need to update chart data here based on dataSelect.value
            // Forcing re-render if chart instance exists for 'visualizationChart'
            var chartInstance = Chart.getChart('visualizationChart');
            if (chartInstance) {
                chartInstance.update();
            } else {
                 // If it wasn't initialized because it was display:none, initialize now
                 // This duplicates logic from charts.js, ideally refactor for a single point of truth
                var visualizationChartCanvas = document.getElementById('visualizationChart');
                if (visualizationChartCanvas) {
                    var vizChartContainerP = chartContainer.querySelector('p');
                    if(vizChartContainerP) vizChartContainerP.style.display = 'none';

                    var ctxViz = visualizationChartCanvas.getContext('2d');
                    new Chart(ctxViz, {
                        type: 'line',
                        data: {
                            labels: ['2020', '2021', '2022', '2023', '2024'],
                            datasets: [{
                                label: dataSelect.options[dataSelect.selectedIndex].text,
                                data: [Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100 ], // Random data for demo
                                fill: false,
                                borderColor: 'rgb(54, 162, 235)',
                                tension: 0.1
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false
                        }
                    });
                }
            }
            console.log("Displaying chart for: " + dataSelect.value);
        } else if (type === 'table') {
            tableContainer.style.display = 'block';
            // Populate table data here based on dataSelect.value
            const tbody = tableContainer.querySelector('tbody');
            tbody.innerHTML = `<tr><td>${dataSelect.options[dataSelect.selectedIndex].text}</td><td>Намунавий қиймат</td></tr>
                               <tr><td>Қўшимча маълумот</td><td>${Math.random().toFixed(3)}</td></tr>`; // Example data
            console.log("Displaying table for: " + dataSelect.value);
        }
    }

    if (generateBtn) {
        generateBtn.addEventListener('click', function () {
            const selectedVizType = vizTypeSelect.value;
            const selectedData = dataSelect.value;
            console.log(`Generating visualization: Type - ${selectedVizType}, Data - ${selectedData}`);
            displayVizOutput(selectedVizType);
        });
    }

    // Initial state: hide all specific output containers
    mapContainer.style.display = 'none';
    chartContainer.style.display = 'none';
    tableContainer.style.display = 'none';
    if(placeholderMessage) placeholderMessage.style.display = 'block';

}); 