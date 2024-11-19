import { fishList } from './fishList.mjs'
import { convertingTipsToHTML } from './tipsList.mjs'
import { locationToHTML } from './locationList.mjs'
import { newArray } from './filterFunction.mjs';
const fishListHTML = document.getElementById("fishList")
const fishTipsHTML = document.getElementById("tipList")
const fishLocationsHTML = document.getElementById("locationList")
console.log(newArray)
// Generate the fish list
const fishHTML = fishList(newArray)

// Generate the care tips
const tipHTML = convertingTipsToHTML()

// Generate the location list
const locationHTML = locationToHTML()

// Render each HTML string to the correct DOM element

fishListHTML.innerHTML += fishHTML
fishTipsHTML.innerHTML += tipHTML
fishLocationsHTML.innerHTML += locationHTML