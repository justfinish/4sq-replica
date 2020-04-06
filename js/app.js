$(async function () {

    let venueDetails = await getVenueDetailsByID()
    let venuePhotos = await getVenuePhotosByID()
    updateUI(venueDetails, venuePhotos)

    async function getVenueDetailsByID () {
        const clientId = 'TWYC5UIIJIFCMIPIZEF242R0PS3VRDNGQX5F5GU5SOPC0WCG'
        const clientSecret = 'AJLER4QM2WVL5EKF2LFL4WFYJLIFS5QCEFFAMFAR0LUCNMLT'
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
        return response.data.response.venue
    }

    async function getVenuePhotosByID () {
        const clientId = 'TWYC5UIIJIFCMIPIZEF242R0PS3VRDNGQX5F5GU5SOPC0WCG'
        const clientSecret = 'AJLER4QM2WVL5EKF2LFL4WFYJLIFS5QCEFFAMFAR0LUCNMLT'
        const url = 'https://api.foursquare.com/v2/venues/41f19780f964a520101f1fe3/photos'
        let response
        try {
            response = await axios.get(url, {
            params: {
                client_id: clientId,
                client_secret: clientSecret,
                v: "20191008",
                limit: 10,
                offset: 0
            }})
        } catch (error) {
            console.log("Something went wrong. Error: ${error}")
        }
        console.log(response.data.response.photos.items)
        return response.data.response.photos.items
    }

    function updateUI(venueObject, venuePhotos) {
        $("#restaurant-name").text(venueObject.name)
        $("#restaurant-type").text(venueObject.categories[0].name)
        $("#dollar-sign").text(venueObject.attributes.groups[0].summary)
        $("#location").text(venueObject.location.neighborhood + ", " + venueObject.location.city)
        $("#tab-count-tips").text(venueObject.tips.count)
        $("#tab-count-photos").text(venueObject.photos.count)
        $("#rating-score").text(venueObject.rating)
        $("#rating-count").text(venueObject.ratingSignals)

        venuePhotos.forEach((element, index) => {
            // let html = '<div class="photo-thumbnail" id="photo-'+index+'"></div>'

            // $("#block-photos").prepend(html)

            let imgURL = element.prefix + "200x200" + element.suffix

            $("#photo-"+index).css("background-image", `url(${imgURL})`)            
        })

        console.log("UI updated.")
    }
})

// Venue Properties --------------------------------
// venue.name
// venue.categories[0].name
// venue.attributes[0].summary //$$$$
// venue.location.neighborhood + venue.location.city
// venue.tips.count
// venue.photos.count
// venue.rating

// Image URL Assembly ------------------------------
// https://fastly.4sqi.net/img/general/300x300/3086_toHfoRyEhRuvXHtc6K1caISYXv1EuA7jvebZJZ5iSaE.jpg
// https://foursquare.com/img/categories/food/french_88.png