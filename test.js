$(function(){
	getData();
});

function getData(){

	var ctx = document.getElementById("myChart");
	var data = [{Name:"Luis",Veces:2},{Name:"Javier",Veces:5},{Name:"Carmen",Veces:10}];
	var names = [];
	var veces = [];

	for (var i = 0; i < data.length; i++) {
		names.push(data[i].Name);
		veces.push(data[i].Veces);
	}

	var dataSet = {
        labels: names,
        datasets: [{
            label: '# of Votes',
            data: veces,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    }
	console.table(data);

	var stackedBar = new Chart(ctx, {
    type: 'pie',
    data: dataSet,
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
	});
}