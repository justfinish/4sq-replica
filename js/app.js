$(function () {

    
    getVenueDetailsById()


    async function getVenueDetailsById () {
        const clientId = 'KLEIICKXHJOHSJJG45JHXTOU3CTHQBMGJLGCDXJAKLINT1RB'
        const clientSecret = 'ELJYANS0ZES4BCNDMPNPOUWCSMPO55DCWURATNNC312T423N'
        const url = 'https://api.foursquare.com/v2/venues/41f19780f964a520101f1fe3'
        let response
        try {
            response = await axios.get(url, {
            params: {
                client_id: clientId,
                client_secret: clientSecret,
                v: "20191008"
            }})
        } catch (error) {
            console.log("Something went wrong. Error: ${error}")
        }
        console.log(response.data.response.venue)
    }
})
