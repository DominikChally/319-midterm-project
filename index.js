


function updateTemp() {
	temp = document.getElementById('temp');
	timeH1 = document.getElementById('time');
	
	
	fetch('data.json')
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			temp.innerHTML = data.temp + "<sup>o</sup>";
			timeH1.innerHTML = data.time;
			console.log(data);
		})
		.catch(function (err) {
			console.log(err);
		});
	setTimeout(updateTemp, 30000);
}

function updateHumidity() {
	
	humidity = document.getElementById('humidity');
	timeH1 = document.getElementById('time');

	fetch('data.json')
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			humidity.innerHTML = data.humidity + "%";
			timeH1.innerHTML = data.time;

			console.log(data);
		})
		.catch(function (err) {
			console.log(err);
		});

	setTimeout(updateHumidity, 30000);
	
}

