(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName : "Binjita",
        lastName : "Kandel Baral"
    }
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello= function () {
    console.log("Hello from " + this.firstName + " " + this.lastName);
    };
    (person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     var shoppers = [
         {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];
//     shoppers.forEach(myFunction);
// function myFunction(item,index) {
//     console.log(shoppers.name[i] + " has the amount " + shoppers.amount[i] );
//     if(shoppers.amount > 200){
//         console.log("you will get a 12 % off on your purchase");
//
//     }
//     else {
//         console.log("sorry! there is no discount for you");
//     }
//
// }

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [ {
        title :"Wandering in Strange Lands",
        author: {
            firstName: "Morgan",
            lastName: "Jerkins"
        }
        },
        {
        title :"Sea wife",
        author: {
            firstName: "Amity",
            lastName: "gaige",
        }
        },
        {
        title :"Drifts",
        author: {
            firstName: "Kate",
            lastName: "Zambreno",
        }
        },
        {
        title :"Rodham",
        author: {
            firstName: "Curtis",
            lastName: "Sittenfeld",
        }
        },

        {
            title: "Glitter up the dark",
            author: {
                firstName: "Sasha",
                lastName: "Geffen",
            }
        },

]
    console.log("The title of the book is " + books[0].title);
    console.log("The first name of author is " + books[0].author.firstName)
    console.log("The last name of author is " + books[0].author.lastName)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    console.log("Here are the five different books with titles and authors full names : ")
    let booksLoop = function () {
        let count = 1;
        for (let i=0; i<books.length; i++) {
            if (i < books.length) {
                console.log("Book # " + count++);
                console.log("Title: " + books[i].title);
                console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
                console.log("---");
            }
        }
    }
   console.log(booksLoop());


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title,author) {
    console.log(createBook(books));
    }
    function showBookInfo(object, outputs){

    }

})();
