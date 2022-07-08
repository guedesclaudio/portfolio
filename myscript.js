const elementsOn = document.querySelectorAll(".on")
const elementsOff = document.querySelectorAll(".off")


function descobreTexto(element) {
    element.querySelector("p").classList.add("escondido")
    element.querySelector("h4").classList.remove("escondido")
}

function encobreTexto(element) {
    element.querySelector("p").classList.remove("escondido")
    element.querySelector("h4").classList.add("escondido")
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
    projects.classList.toggle("escondido")
    setTimeout(() => projects.classList.add("projects-animation"), 10)
    setTimeout(() => projects.classList.remove("projects-desanimation"), 10)
    
    elementsOn[0].classList.toggle("escondido")
    elementsOn[1].classList.toggle("escondido")
    elementsOff[0].classList.toggle("escondido")
    elementsOff[1].classList.toggle("escondido")
}

function notViewProjects() {
    const projects = document.querySelector(".projects")
    setTimeout(() => projects.classList.toggle("escondido"), 200)
    projects.classList.remove("projects-animation")

    elementsOn[0].classList.toggle("escondido")
    elementsOn[1].classList.toggle("escondido")
    elementsOff[0].classList.toggle("escondido")
    elementsOff[1].classList.toggle("escondido")
}