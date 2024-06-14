export default function RandomWaifu() {
    const url = "https://waifu.it/api/v4/waifu?anime=assassination";
    var token = "OTI4OTIzOTI1NDI4MTc4OTg0.MTcxODI2MzYyNg--.d6f22c4e26ca";
    try {
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
        .then(responseJson => responseJson.json())
        .then(data => console.log(data.image.large))
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }}

