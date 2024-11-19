import { database } from './aquariumData.mjs';
import { newArray } from './filterFunction.mjs';
const fishes = database.fish



export const fishList = (array) => {
    
    let fishListHTML = ''
    for (const fish of array) {
        fishListHTML += `
        <article class="fish">
        <img src="${fish.image}" alt="${fish.name}" class="fish_class">
        <div class ="fish_details">
            <h3 class="fish_species">${fish.species}</h3>
            <p class="fishLengthAndLocation"> <em>${fish.name}</em> is ${fish.length} inches long found in <em>${fish.location}</em></p>
        
        
        </div>
        </article>
        `
    }
    return fishListHTML
};


