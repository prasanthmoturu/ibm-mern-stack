function showweatherDetails(event) {
    event.preventDefault();

    navigator.geolocation.getCurrentPosition(function(position) {

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const apiKey = '846ada3caa0df22c0c8a58784a32bdaf';

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {

                console.log(data);

                const weatherInfo = document.getElementById('weatherInfo');

                weatherInfo.innerHTML = `
                    <h2>Current Weather</h2>
                    <p>Temperature: ${data.main.temp} &#8451;</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
            })
            .catch(error => {
                console.log("Error:", error);

                document.getElementById('weatherInfo').innerHTML = `
                    <p>Unable to get weather information.</p>
                `;
            });

    }, function(error) {

        console.log("Location error:", error);

        document.getElementById('weatherInfo').innerHTML = `
            <p>Please allow location access.</p>
        `;
    });
}

document.getElementById('weatherForm')
    .addEventListener('submit', showweatherDetails);