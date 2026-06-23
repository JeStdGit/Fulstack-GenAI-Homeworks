const cityInput = document.getElementById('city-input')
const weatherButton = document.getElementById('weather-btn')
const weatherResult = document.getElementById('weather-result')

weatherButton.onclick = async (e) => {
    e.preventDefault()

    try {
        const city = { city: cityInput.value }
        console.log("city", city);

        const resMid = await fetch('http://localhost:3000/weather', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(city)
        })

        const res = await resMid.json()
        weatherResult.innerText = `city: ${res.city}\ntemperature: ${res.temperature}`
    } catch (error) {
        console.log(error.message);
    }
}