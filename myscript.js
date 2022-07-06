function descobreTexto(element) {
    element.querySelector("p").classList.add("escondido")
    element.querySelector("h4").classList.remove("escondido")
}

function encobreTexto(element) {
    element.querySelector("p").classList.remove("escondido")
    element.querySelector("h4").classList.add("escondido")
}

function scrollView () {
    //const textClass = element.querySelector("a").innerHTML
    //console.log(textClass)
    /*const elementView = document.querySelector('.profile')
    console.log(elementView)
    elementView.scrollIntoView()*/
    const elementoQueQueroQueApareca = document.querySelector('.profile')
    //const aparece = elementoQueQueroQueApareca.querySelector('.profile')
    elementoQueQueroQueApareca.scrollIntoView(true);
    console.log(elementoQueQueroQueApareca)
}

setInterval(() => document.querySelector(".img-profile img").classList.toggle("move"), 300)