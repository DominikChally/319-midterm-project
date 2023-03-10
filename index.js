


function updateTemp() {
	console.log("YO TESING ONLOAD");
	temp = document.getElementById('temp');
	
	
	fetch('data.json')
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			temp.innerHTML = data.temp;
		})
		.catch(function (err) {
			console.log(err);
		});
	setTimeout(updateTemp, 5000);
}

function updateHumidity() {
	console.log("test")
	humidity = document.getElementById('humidity');

	fetch('data.json')
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			humidity.innerHTML = data.humidity;
		})
		.catch(function (err) {
			console.log(err);
		});
	setTimeout(updateHumidity, 5000);
}

