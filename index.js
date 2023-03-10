


function updateTemp() {
	console.log("YO TESING ONLOAD");
	temp = document.getElementById('temp');
	
	
	fetch('data.json')
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			temp.innerHTML = data.temp + "<sup>o</sup>";
			console.log(data);
		})
		.catch(function (err) {
			console.log(err);
		});
	setTimeout(updateTemp, 2000);
}

function updateHumidity() {
	setInterval(() => {
	humidity = document.getElementById('humidity');

	fetch('data.json')
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			humidity.innerHTML = data.humidity + "%";
			console.log(data);
		})
		.catch(function (err) {
			console.log(err);
		});
		
		},2000);

	
}

