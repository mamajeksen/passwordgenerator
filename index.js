const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateEl = document.getElementById("generate-el")
let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two") 

generateEl.addEventListener("click", function() {
    
const n = 15; // number of elements we want to get
const shuffledArray = characters.sort(() => 0.5 - Math.random()); // shuffles array
const result = shuffledArray.slice(0, n);

const b = 15;
const shuffledArrays = characters.sort(() => 0.5 - Math.random());
const results = shuffledArrays.slice(0, b);

passOne.textContent = result.join("")
passTwo.textContent = results.join("")
   
})




