var ctx = document.getElementById('areaChart');
var myChart = new Chart(ctx, {
    data: {
        datasets: [
            {fill: 'origin'},
            {fill: '+2'},
            {fill: 1},
            {fill: false},
            {fill: '-2'}
        ]
    }
})