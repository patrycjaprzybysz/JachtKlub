export default function WeatherWidget() {
    const apiURL =
        'https://api.open-meteo.com/v1/forecast?latitude=54.4209&longitude=16.4107&hourly=temperature_2m,weathercode,windspeed_10m,winddirection_10m&windspeed_unit=kn&timezone=auto&forecast_days=1';
    let weatherData;
    let weatherTemperature;
    let weatherCode;
    let weatherIcon;
    let weatherDescription;
    let windSpeed;
    let windDirection;
    const time = new Date().getHours();

    async function GetWeatherData() {
        fetch(apiURL)
            .then(data => {
                return data.json();
            })
            .then(res => (weatherData = res.hourly))
            .then(PrepareWeatherData)
            .then(RenderWeatherData);
    }

    function PrepareWeatherData() {
        weatherTemperature = weatherData.temperature_2m[time];
        weatherCode = weatherData.weathercode[time];
        windSpeed = weatherData.windspeed_10m[time];
        windDirection = weatherData.winddirection_10m[time];
        SetWeatherDescription(weatherCode);
        console.log(
            `Temperature: ${weatherTemperature} ${weatherDescription} \n Wind direction: ${windDirection} \n Wind speed: ${windSpeed} \n Weathercode: ${weatherCode}`
        );
    }

    function SetWeatherDescription(code) {
        if (code == 0) {
            weatherIcon = 'wi-day-sunny';
            weatherDescription = 'Bezchmurne niebo';
        }
        if (code >= 1 && code <= 3) {
            weatherIcon = 'wi-day-cloudy';
            weatherDescription = 'Lekkie zachmurzenie';
        }
        if (code >= 45 && code <= 48) {
            weatherIcon = 'wi-day-fog';
            weatherDescription = 'Mgła';
        }
        if (code >= 51 && code <= 57) {
            weatherIcon = 'wi-sleet';
            weatherDescription = 'Mżawka';
        }
        if (code >= 61 && code <= 65) {
            weatherIcon = 'wi-showers';
            weatherDescription = 'Opady deszczu';
        }
        if (code >= 66 && code <= 67) {
            weatherIcon = 'wi-rain-mix';
            weatherDescription = 'Opady deszczu ze śniegiem';
        }
        if (code >= 71 && code <= 77) {
            weatherIcon = 'wi-snow';
            weatherDescription = 'Opady śniegu';
        }
        if (code >= 80 && code <= 82) {
            weatherIcon = 'wi-rain';
            weatherDescription = 'Ulewny deszcz';
        }
        if (code >= 85 && code <= 86) {
            weatherIcon = 'wi-rain';
            weatherDescription = 'Przelotne opady śniegu';
        }
        if (code >= 95 && code <= 99) {
            weatherIcon = 'wi-thunderstorm';
            weatherDescription = 'Burze';
        }
    }

    function SetWeatherIcons(time) {
        // Night time
        if (time <= 4 || time >= 19) {
        }
    }

    function RenderWeatherData() {
        const widgetData = `<p>${weatherTemperature} stopni</p> <i class="wi ${weatherIcon}></i>`;

        const widgetElement = document.querySelector('.weatherWidget');

        if (widgetElement.childElementCount === 0) widgetElement.insertAdjacentHTML('afterbegin', widgetData);
    }

    GetWeatherData();

    return <div className="weatherWidget"></div>;
}
