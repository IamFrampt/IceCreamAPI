
// Defining async function
async function getapi() {
    let rng = Math.ceil()*21;
    const api_url = "http://localhost:3000/allicecreams/icecream/:rng";
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
}