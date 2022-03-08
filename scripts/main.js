import {personToHTML} from "./toHTMLfunctions.js"
import {famousPeopleArray} from "./famousPeopleData.js"

famousPeopleArray.forEach(select => {
    personToHTML(select)
})

const handlePersonClicked = (event) => {
    event.currentTarget.classList.toggle("add-border");
}

//all instances of .famous-person-card
//querySelectorAll gets all instances of an element, whereas querySelector will only return the first instance it finds
const cards = document.querySelectorAll('.famous-person-card');

cards.forEach((card) => {
    card.addEventListener("click", handlePersonClicked);
})

// if (event.target.id.startsWith("famousperson")){
//     const splitId = event.target.id.split("--");
//     console.log("what is splitId", splitId);
//     console.log("I want to learn more about id:", splitId[1]
// }
// });