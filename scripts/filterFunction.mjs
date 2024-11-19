import { database } from './aquariumData.mjs'

const fishes = database.fish






export const mostHolyFish = () => {
    const holyFishArray = []
    for(const fish of fishes) {
        if(fish.length % 3 == 0) {
            holyFishArray.push(fish)
        }
    }
    
    return holyFishArray
    
}

export const soldierFish = () => {
    const soldierFishArray = []
    for (const fish of fishes) {
        if(fish.length % 5 ===0)
            soldierFishArray.push(fish)
    }
    return soldierFishArray
}

export const regularFish = () => {
    const regularFishArray = []
    for (const fish of fishes) {
        if(fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFishArray.push(fish)
        }
    }
    return regularFishArray
}

const holy = mostHolyFish()
const soldier = soldierFish()
const reg = regularFish()



export const addingArray = () => {
   const reorderedArray = [...holy, ...soldier, ...reg]
   return reorderedArray
}


export const newArray = addingArray()


