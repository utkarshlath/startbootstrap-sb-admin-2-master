// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
// Bar Chart Example
var ctx = document.getElementById("myhorizontalBarChart1");
var myhorizontalBarChart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Gaming", "Shows", "Science & Technology", "Sports", "Howto & Style", "Education", 
            "Film & Animation", "People & Blogs", "Comedy", "Music", "News & Politics",
            "Entertainment"],
        datasets: [{
            label: "Most popular category",
            backgroundColor: [
            	'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                ],
            hoverBackgroundColor: "#2e59d9",
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
              ],
            data: [66, 204, 542, 706, 806, 1093, 1577, 2394, 3428, 3845, 4753, 16061],
            borderWidth:1,
            fill:false,
        }],
    },
    options: {
    	indexAxis:'Y',
    	maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
            }
        },
    }
});
