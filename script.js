var championslist = {};
var champions;
var champslen = 0;
var taken = [];
function addChampImage(champ, side) {
    const img = document.createElement('img');

    // Set the image source, width, and height
    img.src = `https://cdn.communitydragon.org/14.22.0/champion/${champ}/square`;
    img.width = 60;
    img.height = 60;

    // Get the target div by its ID
    const imageDiv = document.getElementById(side);

    // Append the image to the div
    imageDiv.appendChild(img);
}

function clearchampicons(){
    const blue = document.getElementById('blueside');
    const red = document.getElementById('redside');

    blue.innerHTML = "";
    red.innerHTML = "";

}
document.addEventListener("DOMContentLoaded", () => {


    // Example: Utility function
    function generateChampion(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const button = document.getElementById("genbutton");
    button.addEventListener("click", genchamps);
    var chosen;
    function genchamps() {
        champions = championslist;
        clearchampicons();
        var champstogen = document.getElementById('userInput').value
        for (let i = 0; i < champstogen; i++) {
            chosen = generateChampion(0, champions.length)
            addChampImage(champions[chosen], 'blueside');
            champions.splice(chosen,1);
        }
        for (let i = 0; i < champstogen; i++) {
            chosen = generateChampion(0, champions.length)
            addChampImage(champions[chosen], 'redside');
            champions.splice(chosen,1);
        }
    }

    fetch("champs.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse JSON data
        })
        .then((data) => {
            championslist = Object.keys(data.data);
            console.log(champions)
        })
        .catch((error) => {
            console.error("Error loading JSON:", error);
        });

    // Log a random number between 1 and 10
    console.log("Random Number:", generateChampion(1, 10));
});


