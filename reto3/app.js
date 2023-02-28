let txtModal = document.getElementById('txtModal')
let addBtn = document.getElementById('agregarBtnModal')
let ulLista = document.getElementById('ulLista')

let vacio = document.getElementById('estadoVacio')
let check = document.getElementById('checkList')
let padreList = document.getElementById('listDiv')
let aclacracion = document.getElementById('aclaracionModal')

let lista = document.getElementById('estadoLista')

let botonAdd = document.getElementById('estadoVacioBotonAdd')
let botonCanc = document.getElementById('cancelarBtnModla')
let modal = document.getElementById('modalBody')
var overlay = document.getElementById('overlay');
let error = document.getElementById('error')

let listaStorage = []



botonAdd.addEventListener('click', function(){
    modal.classList.add('activeFlex')
    lista.classList.add('none')
    overlay.classList.add('show')
    botonAdd.classList.add('hidden')
})

botonCanc.addEventListener('click', function(){
    modal.classList.remove('activeFlex')
    overlay.classList.remove('show')
    error.classList.add('none')
    lista.classList.remove('none')
    botonAdd.classList.remove('hidden')
})


addBtn.addEventListener('click', function(e){
    e.preventDefault()
    console.log(e)
    let tarea = txtModal.value.trim()
    if (tarea === '') {
        error.classList.add('activeBlock')
        error.classList.remove('none')
        return;
    }
    let categoria = document.getElementById('categoryModal').value
    let checksito = document.querySelector('input[name=checksito]:checked').value
    let modelo = `<li class="list-group-item  ${checksito}List" >
                    <div class="listDiv ">
                    <img src='icons/${categoria}.png' width='32px' height='32px' class='imgList'>
                        <p class='listDivText'>${tarea}</p>
                        <input type="checkbox" onClick="checked(this)">
                        <span class="material-symbols-outlined deleteSpan">
                            delete
                        </span>
                    </div>
                </li>`
    vacio.classList.add( 'none' )
    botonAdd.classList.remove('hidden')
    ulLista.innerHTML += modelo
    txtModal.value = ""
    aclacracion.value = ""
    modal.classList.remove('activeFlex') 
    lista.classList.remove('none')
    overlay.classList.remove('show')
    error.classList.add('none')

    listaStorage.push(modelo)
    // el metodo setItem me permite almacenar datos en el locasStorage, toma dos argumentos
    // la nombre en donde se almacena los datos ('listaTareas') y el valor que se va a almacenar.
    // Ambos tienen que ser strings, por eso le paso el metodo JSON.stringify para hacer string el array listaStorage


    localStorage.setItem('listaTareas', JSON.stringify(listaStorage))
})

// Le agregue un listener al UlLista (que es el ul del HTML) para que escuche el click
// en su elemento pero que se ejecute solo si la classList del e.target contiene la clase
// "deleteSpan". La ejecucion consiste en marcar el contenedor del e.target (osea el div "listDiv") y el contenedor
// de ese (osea el li "list-item-group") y borrarlo una vez toque el tachito.
// tambien limpio todos los items del localStorage una vez no haya ninguna tarea pendiente.
ulLista.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteSpan')) {
            const div = event.target.parentElement;
            const li = div.parentElement;
            ulLista.removeChild(li);
            console.log(ulLista.childElementCount)
            if (ulLista.childElementCount === 0) {
                vacio.classList.remove('none')
                localStorage.clear()
                return
            }
        }
    })

//Para recuperar los datos de localStorage se usa el metodo getItem() que usa un argumento que es el nombre que le puse('listaTareas')
// En este caso, accedo con el getItem y eso lo guardo en una variable, parseo el string que me devolvio el getItem,
// osea, lo hago objeto y lo guardo en otra variable que se llama listaStorage. 


let desdeStorage = localStorage.getItem('listaTareas')
if (desdeStorage){
    vacio.classList.add( 'none' )
    lista.classList.remove('none')
    listaStorage = JSON.parse(desdeStorage)
    listaStorage.forEach(function(item) {
        ulLista.innerHTML += item;
    });
}

/*
function checked(elemento){
    if(elemento.checked){
        elemento.parentElement.parentElement.classList.add('checkBlur')    
    }else{
        elemento.parentElement.parentElement.classList.remove('checkBlur')    
    }
}*/
