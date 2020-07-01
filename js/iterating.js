(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ['Binju', "Sanju", "Bijit", "Santosh"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("There number of element in the names array is " + names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log("The names on index is " + names[0]);
    console.log("The names on index is " + names[1]);
    console.log("The names on index is " + names[2]);
    console.log("The names on index is " + names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i=0; i<names.length;i++){
        console.log("The name at index" + i + " is " + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log("The name in the array is ");
    names.forEach(function (name, index,) {
        console.log("\t" + name);
    })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

        //1.
    let numbers =[1,2,3,4,5];
    function first (x){
        return (numbers [0]);
    }
    console.log(first (numbers));

    //2.
    function second (x){
        return (numbers [1]);
    }
    console.log(second (numbers));

    //3.
    function last (x){
        return (numbers [numbers.length -1]);
    }
    console.log(last (numbers));

})();
