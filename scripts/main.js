import {personToHTML} from "./toHTMLfunctions.js"
import {famousPeopleArray} from "./famousPeopleData.js"



const HTMLbuilder = () => {
    document.querySelector(".famous-people").innerHTML = ""
    famousPeopleArray.forEach(select => {
        personToHTML(select)
    })
}

HTMLbuilder()

const handlePersonClicked = (event) => {
    // finds ID of clicked section and assigns it to a var
    let clickId = event.currentTarget.id.split("-")
    clickId = parseInt(clickId[1])

    event.currentTarget.classList.toggle("add-border");
    document.getElementById("text-input").focus()
    document
    .querySelector("#text-input")
    .addEventListener("keyup", input => {
        if (input.code != 'Enter') {
            let currentText = document.getElementById("text-input").value;
            document.getElementById(`bio-${clickId}`).innerHTML = currentText;
          }
          if (input.code === 'Enter') {
            document.getElementById(`bio-${clickId}`).value = ""
            input.preventDefault()
          }
    })
}
//all instances of .famous-person-card
//querySelectorAll gets all instances of an element, whereas querySelector will only return the first instance it finds
const cards = document.querySelectorAll('.famous-person-card');

cards.forEach((card) => {
    card.addEventListener("click", handlePersonClicked);
})