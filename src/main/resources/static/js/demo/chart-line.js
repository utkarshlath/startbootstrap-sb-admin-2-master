// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
// Bar Chart Example
var ctx = document.getElementById("myLineChart1");
var myLineChart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Autos & Vehicles","Comedy","Education","Entertainment","Film & Animation","Gaming","Howto & Style","Movies","Music","News & Politics","Nonprofits & Activism","People & Blogs","Pets & Animals","Science & Technology","Shows","Sports","Travel & Events"],
        datasets: [{
            label: "Average days to be trending video",
            backgroundColor: [
            	'rgba(255, 99, 132)'
                ],
            hoverBackgroundColor: "#2e59d9",
            borderColor: [
                'rgb(255, 99, 132)', 
              ],
            data:  [1.983607,2.273046,1.361391,2.067057,2.599873,2.393939,1.816377,3.000000,2.315215,1.989480,1.439024,2.101086,2.000000,1.767528,1.475490,1.875354,2.250000],
            tension:0.1,
            fill:false,
        }],
    },
    options: {
    	maintainAspectRatio: false,
        layout: {
            padding: {
                left: 5,
                right: 25,
                top: 25,
                bottom: 0
            }
        },
    }
});