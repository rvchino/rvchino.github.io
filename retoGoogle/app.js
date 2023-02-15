let busqueda = document.getElementById('valor')
let resultado = document.getElementById('resultados')
let form = document.getElementById('form')
let appearance = document.querySelector('.AAA')

function logSubmit(event){
    event.preventDefault()
    let tipo = busqueda.value;
    let nodo = document.createTextNode(tipo)
    let nodito = document.createElement('li')
    nodito.appendChild(nodo)
    resultado.appendChild(nodito)
    appear()
    this.reset()
}

function appear(){
    appearance.style.display="block"
}


form.addEventListener('submit', logSubmit, appear)


