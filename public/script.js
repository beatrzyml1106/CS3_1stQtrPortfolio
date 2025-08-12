let totalRequired;

let age = window.prompt("Age?", "13");
let maxAge =window.prompt("Max age?", "100")
let numPerDay = window.prompt("How many cups of coffe per day?");

if(confirm(`Is your input correct?`)) {
    totalRequired = (numPerDay * 365) * (maxAge - age);

document.write("You will need " + totalRequired + " cups of coffee to last you until the age of " + maxAge)
}
else{
console.log("Run the code again")
}
