document.getElementById('strengthtxt').addEventListener("click", showStr)
document.getElementById('endurancetxt').addEventListener("click", showEnd)
document.getElementById('flexibilitytxt').addEventListener("click", showFlx)
document.getElementById('circuittxt').addEventListener("click", showCir)

function showStr(){
    let image = document.getElementById("strengthimg")
    let hidden = image.getAttribute("hidden")

    if (hidden){
        image.removeAttribute('hidden')
    }
    else {
        image.setAttribute('hidden', 'hidden')
    }
}

function showEnd(){
    let image = document.getElementById("enduranceimg")
    let hidden = image.getAttribute("hidden")

    if (hidden){
        image.removeAttribute('hidden')
    }
    else {
        image.setAttribute('hidden', 'hidden')
    }
}

function showFlx(){
    let image = document.getElementById("flexibilityimg")
    let hidden = image.getAttribute("hidden")

    if (hidden){
        image.removeAttribute('hidden')
    }
    else {
        image.setAttribute('hidden', 'hidden')
    }
}

function showCir(){
    let image = document.getElementById("circuitimg")
    let hidden = image.getAttribute("hidden")

    if (hidden){
        image.removeAttribute('hidden')
    }
    else {
        image.setAttribute('hidden', 'hidden')
    }
}