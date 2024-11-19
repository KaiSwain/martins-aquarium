import { database } from "./aquariumData.mjs"

export const convertingTipsToHTML = () => {
    const tipsList = database.tips
    let tipsHTML = 
        `<ul class="tips">`
    for (const tip of tipsList) {
        tipsHTML +=`
            <li class="tip">
                <strong>${tip.topic}:</strong>
                        ${tip.text}
            </li>
        `
    }
    tipsHTML += 
    `</ul>`
    return tipsHTML
}