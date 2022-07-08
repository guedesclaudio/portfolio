const elementsOn = document.querySelectorAll(".on")
const elementsOff = document.querySelectorAll(".off")


function descobreTexto(element) {
    element.querySelector("p").classList.add("hidden")
    element.querySelector("h4").classList.remove("hidden")
}

function encobreTexto(element) {
    element.querySelector("p").classList.remove("hidden")
    element.querySelector("h4").classList.add("hidden")
}

setInterval(() => document.querySelector(".img-profile img").classList.toggle("move"), 300)

function stackOn(element) {
    const stackName = element.alt
    document.querySelector(".stack h2").innerHTML = stackName
}

function stackOff(element) {
    document.querySelector(".stack h2").innerHTML = ""
}

function viewProjects() {
    const projects = document.querySelector(".projects")
    projects.classList.toggle("hidden")
    setTimeout(() => projects.classList.add("projects-animation"), 10)
    setTimeout(() => projects.classList.remove("projects-desanimation"), 10)
    
    elementsOn[0].classList.toggle("hidden")
    elementsOn[1].classList.toggle("hidden")
    elementsOff[0].classList.toggle("hidden")
    elementsOff[1].classList.toggle("hidden")
}

function notViewProjects() {
    const projects = document.querySelector(".projects")
    setTimeout(() => projects.classList.toggle("hidden"), 200)
    projects.classList.remove("projects-animation")

    elementsOn[0].classList.toggle("hidden")
    elementsOn[1].classList.toggle("hidden")
    elementsOff[0].classList.toggle("hidden")
    elementsOff[1].classList.toggle("hidden")
}