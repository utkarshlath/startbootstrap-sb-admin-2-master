// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
// Bar Chart Example
var ctx = document.getElementById("myhorizontalBarChart1");
var myhorizontalBarChart1 = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["News & Politics",
        "Entertainment", "Music", "Comedy", "People & Blogs", 
        "Film & Animation", "Education", "Howto & Style", "Sports", "Science & Technology", "Shows", "Gaming"],
        datasets: [{
            label: "Most popular category",
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
                ],
            data: [16061, 4753, 3845, 3428, 2394, 1577, 1093, 806, 706, 542, 204, 66],
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
        scales: {
            xAxes: [{
                time: {
                    unit: 'Popularity'
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    maxTicksLimit: 12
                },
                maxBarThickness: 25,
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 15000,
                    maxTicksLimit: 12,
                    padding: 10,
                },
                gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }],
        }
    }
});
