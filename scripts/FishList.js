/* 

Next, create a module, place the following code in it and update the code to make the correct import from the database module.

This module exports a function as well. This one returns a newly constructed string that is filled with HTML syntax. The HTML will be a visual representation of the fish object for a person to see in the web browser.

*/ 

// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

console.log(getFish()) //just to make getFish() is working 

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish-card">
        <div><img  class="fish__image image--card" src="${fish.image}" /></div>
        <div class="fish__species">${fish.species}</div>
        <div class="fish__name">${fish.name}</div>
        <div class="fish__food">${fish.food}</div>
        <div class="fish__length">${fish.length}</div>
        <div class="fish__harvestLocation">${fish.harvestLocation}</div>
    </section>
`
    }
    htmlString += `</article>`

    return htmlString
}