import {famousPeopleArray} from "./famousPeopleData.js"

const personToHTML = (personObj) => {
  return `<person>
        <header class="name-title">${personObj.name} and ${personObj.title} go here</header>
        <section class="bio">${personObj.bio} and ${personObj.image} go here</section>
        <footer class="lifespan">${personObj.lifespan.birth} ${personObj.lifespan.death}info goes here</footer>
    </person>`
}

export const insertIntoDom = () => {
    const selector = document.querySelector(".famous-people")
    famousPeopleArray.forEach(select => {
        selector.innerHTML += personToHTML(select)
    })
}