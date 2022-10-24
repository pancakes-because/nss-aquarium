/* 

Next, you import the database.js function into the main module. Then you can invoke the function and store the fish collection in a variable that is scoped to the main module. Then just log each fish object to the developer console.

*/

// This is the import function that copies the fish array from database.js 
// You are also invoking the function to store the fish collection in a variable that is scoped to the main module. Then just log each fish object to the developer console.


import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}


/* 

Since we want the fish to be immediately rendered when the page loads, then that falls within the responsibility of the main.js module. Import the list component into main and invoke the component function.

*/ 

// Import the FishList function from the correct module
import { FishList } from './FishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */

const parentHTMLElement = document.querySelector(".section-fish-list-container") 

/* 

instructions say to use "fish-list" as a class, but my html is different and using "section-fish-container" as my div container for all of my fish information

*/ 

parentHTMLElement.innerHTML = FishList()