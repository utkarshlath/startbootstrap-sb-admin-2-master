// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
// Bar Chart Example
var ctx = document.getElementById("myhorizontalBarChart2");
var myhorizontalBarChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["zeetvtelugu", "SunTV Tamil", "Speed Records", "zeetv", "V6 News Telugu", "Study IQ Education", "Technical Guruji", "Mazhavil Manorama", "T-Series", "Tarang TV",
            "Vijay Television", "ETV Jabardasth", "mallemalatv", "SET India", "RadaanMedia",
           " SAB TV", "ETV Plus India", "Flowers Comedy", "etvteluguindia", "VikatanTV"],
        datasets: [{
            label: "Most popular creator",
            backgroundColor: [
            	'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(75, 192, 192)',
                'rgba(54, 162, 235)',
                'rgba(153, 102, 255)',
                'rgba(201, 203, 207)',
                'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(54, 162, 235)',
                'rgba(153, 102, 255)',
                'rgba(75, 192, 192)',
                'rgba(54, 162, 235)',
                'rgba(153, 102, 255)',
                'rgba(201, 203, 207)',
                'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(54, 162, 235)',
                ],
            data:  [193, 196, 197, 198, 212, 213, 215, 215, 221, 222, 230, 234, 234, 237,
                243, 244, 252, 270, 282, 284],
            borderWidth:1,
            fill:false,
        }],
    },
    options: {
    	indexAxis:'y',
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