let counter = 0;
export const personToHTML = (personObj) => {
    counter++
    let result = `
    <section class="famous-person-card" id="famousperson-${counter}">
        
        <header class="name-title">
        <h2>${personObj.name} Title: ${personObj.title}</h2>
        </header>
        
        <section class="bio">
        <p>${personObj.bio} and ${personObj.image} go here</p>
        </section>
        
        <footer class="lifespan">
        <p>${personObj.lifespan.birth} - ${personObj.lifespan.death}</p>
        </footer>

    </section>
    `
    
    if (counter % 2 === 0){
        const selector = document.querySelector(".famous-people")
        selector.innerHTML += `<div class="person-even">`+result+`</div>`
    } else {
        const selector = document.querySelector(".famous-people")
        selector.innerHTML += `<div class="person-odd">`+result+`</div>`
    }
}