import {personToHTML} from "./toHTMLfunctions.js"
import {famousPeopleArray} from "./famousPeopleData.js"

famousPeopleArray.forEach(select => {
    personToHTML(select)
})

const handlePersonClicked = (event) => {
    console.log(event.target.id);
    document.querySelector("section").classList.toggle("add-border");
}
document.querySelector("#famous-people").addEventListener("click", handlePersonClicked);  
    










// if (event.target.id.startsWith("famousperson")){
//     const splitId = event.target.id.split("--");
//     console.log("what is splitId", splitId);
//     console.log("I want to learn more about id:", splitId[1]
// }
// });