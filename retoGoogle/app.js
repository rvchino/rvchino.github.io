let busqueda = document.getElementById('valor')
let resultado = document.getElementById('resultados')
let form = document.getElementById('form')
let appearance = document.querySelector('.AAA')
let algo = document.querySelectorAll('.resultados')
let btn = document.querySelectorAll("btn")
let botonera = document.getElementById('botonera')
let grilla = document.querySelector('.grillaNav')
let whole = document.querySelector('.wrapper')

function logSubmit(event){
    event.preventDefault()
    let tipo = busqueda.value;
    let nodo = document.createTextNode(tipo)
    let nodito = document.createElement('li')
    nodito.classList.add("resultados")
    nodito.appendChild(nodo)
    resultado.appendChild(nodito)
    appear()
    this.reset()
}



function appear(){
    appearance.style.display="block"
}

function disappear(){
    appearance.style.display = "none"
}

document.addEventListener('click', function(event) {
    // Elimina todos los elementos <li> dentro de la lista
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
        }
    });


window.addEventListener('click', disappear)

form.addEventListener('submit', logSubmit, appear)




