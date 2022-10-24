/* 

In this module, create objects to represent the state of Martin's fish that you had previously hard-coded in the HTML. You are going to place all of the objects in an array - a collection of fish.

THIS IS ONLY FOR THE FISH AND NOTHING ELSE! 

*/ 

const database = {
    fish : [
        { 
          image: "https://www.americanoceans.org/wp-content/uploads/2021/10/clownfish.jpg", 
          species: "clown fish",
          name: "carrot", 
          food: "algae", 
          length: 4,  
          harvestLocation: "great barrier reef"
        }, 
        { 
          image: "https://cf.ltkcdn.net/kids/images/orig/305320-1600x1066-fascinating-seahorse-facts-kids.jpg", 
          species: "sea horse",
          name: "seabiscuit", 
          food: "plankton", 
          length: 12, 
          harvestLocation: "indian ocean"
        }, 
        {

          image: "https://reefbuilders.com/wp-content/blogs.dir/1/files/2020/06/skunk-cleaner-shrimp2.jpg", 
          species: "pacific cleaner shrimp", 
          name: "jumbo", 
          food: "dead tissue", 
          length: 12, 
          harvestLocation: "coral reef caves"
        }, 
        {

          image: "https://live.staticflickr.com/3770/12919899705_a482c7056f_b.jpg", 
          species: "angel fish", 
          name: "coconut", 
          food: "nematodes", 
          length: 6, 
          harvestLocation: "northwestern hawaian islands"
        }
    ]
}

/* 

In this application, the database.js module holds the state of each fish. Other modules in the application can request that state, and then use it for whatever they are responsible for.

SO THIS MEANS THAT OTHER MODULES WILL IMPORT THE DATABASE INFORMATION 
SO THE DATABASE HAS TO EXPORT INFORMATION

*/ 

// The function below returns a copy of the fish array.
// The function is exported so other modules can import it and use it.

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}