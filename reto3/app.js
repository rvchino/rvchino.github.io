let txtModal = document.getElementById('txtModal')
let form = document.querySelector('form')
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

let tarea = txtModal.value
let ulListaCount = ulLista.childElementCount
let listaStorage = []
let categoria = document.getElementById('categoryModal')


function agregarTarea(e){
    if (txtModal.value.trim() === '') {
        e.preventDefault()
        error.classList.remove('none')
        return
    }
    let checksito = document.querySelector('input[name=checksito]:checked').value
    e.preventDefault()  
    //creo un objeto donde voy a guardar todos los datos que necesito para imprimirlos despues en otras pantallas
    //
    //
    const item = {
        tarea: e.target.txtModal.value,
        categoria: categoria.value,
        descripcion: aclacracion.value,
        prioridad: checksito,
        tick: false
    } 
    vacio.classList.add( 'none' )
    botonAdd.classList.remove('hidden')
    txtModal.value = ""
    aclacracion.value = ""
    modal.classList.remove('activeFlex') 
    lista.classList.remove('none')
    overlay.classList.remove('show')
    error.classList.add('none')
    listaStorage.push(item) //guardo en el array listaStorage, cada item con su data adentro
    agrandar(listaStorage, ulLista)
    // el metodo setItem me permite almacenar datos en el locasStorage, toma dos argumentos
    // la nombre en donde se almacena los datos ('listaTareas') y el valor que se va a almacenar.
    // Ambos tienen que ser strings, por eso le paso el metodo JSON.stringify para hacer string el array listaStorage
    localStorage.setItem('listaTareas', JSON.stringify(listaStorage))
}

// Hago esto para en un futuro poder reutilizar esta funcion si quiero, pasandole otro
// array y otro argumento.
// La funcion va a tomar dos parametros -> Un array vacio y un lugar donde imprimir el codigo
function agrandar(tareas = [], listaTarea){
    listaTarea.innerHTML = tareas.map((tarea, i)=>{
        return `<li class="list-group-item  ${tarea.prioridad}List" >
        <div class="listDiv ">
        <img src='icons/${tarea.categoria}.png' width='32px' height='32px' class='imgList'>
            <p class='listDivText'>${tarea.tarea}</p>
            <input id='${i} 'type="checkbox" name='checked' data-index='${i}' ${tarea.tick ? 'checked' : ''} />
            <span class="material-symbols-outlined deleteSpan">
                delete
            </span>
        </div>
    </li>`
    }).join('')
}

function clikeado(e){
    if(!e.target.matches('input')) return; // se salta esto a menos que sea un input
    const element = e.target  //primero buscamos el index (por eso le pusimos data-index) -> que va a ser la posicion para identificarlo en el array listaStorage
    const index = element.dataset.index
    listaStorage[index].tick = !listaStorage[index].tick // Buscamos la propiedad tick dentro de la posicion "index" de lista Storage y le asignamos el valor contrario -> Estamos "prendiendo o apagando" el true o false
    localStorage.setItem('listaTareas', JSON.stringify(listaStorage)) // guardamos los nuevos valores a localStorage
    agrandar(listaStorage, ulLista) // llamamos a la funcion para actualizar la parte "visible" de la pagina
}


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
            localStorage.setItem('listaTareas', JSON.stringify(listaStorage)) // guardamos los nuevos valores a localStorage
            agrandar(listaStorage, ulLista)
        }
    })

ulLista.addEventListener('click',clikeado)
form.addEventListener('submit', agregarTarea)

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
    txtModal.value = ""
    aclacracion.value = ""
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
agrandar(listaStorage, ulLista)