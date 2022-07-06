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