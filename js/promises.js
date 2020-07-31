
//Create a function that accepts a GitHub username, and returns a promise that resolves returning
// just the date of the last commit that user made. Reference the github api documentation to achieve this.

const api_url = "https://api.github.com/users/bkandelbaral20/events"
async function getInformation (){
    const response = await fetch(api_url,{headers: {'Authorization': 'promiseKey'}});
    const data = await response.json();
    console.log(`The latest date of my github commit is: ${data[0].created_at}`);
}
getInformation();

//Write a function named wait that accepts a number as a parameter, and returns a promise that
// resolves after the passed number of milliseconds.

const wait = t => new Promise(resolve => setTimeout(resolve, t));
wait(1000).then(() => console.log(`You'll see this after 1 second`));
wait(3000).then(() => console.log(`You'll see this after 3 seconds`));