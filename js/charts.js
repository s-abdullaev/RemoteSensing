document.addEventListener('DOMContentLoaded', function () {
    // Analysis Page Chart
    var analysisChartCanvas = document.getElementById('analysisChart');
    if (analysisChartCanvas) {
        var chartContainer = document.getElementById('chart-container');
        if(chartContainer.querySelector('p')) {
             chartContainer.querySelector('p').style.display = 'none'; // Hide placeholder text
        }
        var ctxAnalysis = analysisChartCanvas.getContext('2d');
        new Chart(ctxAnalysis, {
            type: 'bar', // Example: bar chart
            data: {
                labels: ['Январ', 'Феврал', 'Март', 'Апрел', 'Май', 'Июн'],
                datasets: [{
                    label: 'Ўртача NDVI қиймати',
                    data: [0.2, 0.3, 0.5, 0.6, 0.7, 0.65],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Танланган Минтақа учун NDVI Динамикаси (Мисол)'
                    }
                }
            }
        });
        console.log("Analysis chart initialized.");
    }

    // Visualization Page Chart (Example - can be different)
    var visualizationChartCanvas = document.getElementById('visualizationChart');
    if (visualizationChartCanvas) {
        var vizChartContainer = document.getElementById('visualization-chart-container');
        if(vizChartContainer.querySelector('p')){
            vizChartContainer.querySelector('p').style.display = 'none'; // Hide placeholder text
        }
        var ctxViz = visualizationChartCanvas.getContext('2d');
        new Chart(ctxViz, {
            type: 'line', // Example: line chart
            data: {
                labels: ['2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Сув Сатҳи Ўзгариши (м)',
                    data: [120, 122, 118, 125, 123],
                    fill: false,
                    borderColor: 'rgb(54, 162, 235)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Кўл Сатҳининг Йиллик Ўзгариши (Мисол)'
                    }
                }
            }
        });
        console.log("Visualization chart initialized.");
    }
}); 