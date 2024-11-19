import { database } from "./aquariumData.mjs"

export const locationToHTML = () => {
    const locationList = database.locations
    let locationHTML = ''
    for (const locationObj of locationList) {
        locationHTML += `
    <article class="locations">
        <section class="location">
            <h3 class="location-name">${locationObj.name}</h3>
            <p class="location-country">${locationObj.country}</p>
            <p class="location-description">${locationObj.description}</p>
        </section>
        
    </article>`
    }
    return locationHTML
}