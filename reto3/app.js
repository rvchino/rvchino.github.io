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

let form = document.getElementById('formModal')



botonAdd.addEventListener('click', function(){
    modal.classList.add('activeFlex')
    lista.classList.add('none')
    overlay.classList.add('show')
})

botonCanc.addEventListener('click', function(){
    modal.classList.remove('activeFlex')
    overlay.classList.remove('show')
    error.classList.add('none')
})


addBtn.addEventListener('click', function(e){
    e.preventDefault()
    console.log(e)
    let tarea = txtModal.value.trim()
    if (tarea === '') {
        error.classList.add('active')
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
    ulLista.innerHTML += modelo
    txtModal.value = ""
    aclacracion.value = ""
    modal.classList.remove('activeFlex') 
    lista.classList.remove('none')
    overlay.classList.remove('show')
    error.classList.add('none')
})


/*
function checked(elemento){
    if(elemento.checked){
        elemento.parentElement.parentElement.classList.add('checkBlur')    
    }else{
        elemento.parentElement.parentElement.classList.remove('checkBlur')    
    }
}*/



// Le agregue un listener al UlLista (que es el ul del HTML) para que escuche el click
// en su elemento pero que se ejecute solo si la classList del e.target contiene la clase
// "deleteSpan". La ejecucion consiste en marcar el contenedor del e.target (osea el div "listDiv") y el contenedor
// de ese (osea el li "list-item-group") y borrarlo una vez toque el tachito
ulLista.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteSpan')) {
            const div = event.target.parentElement;
            const li = div.parentElement;
            ulLista.removeChild(li);
            console.log(ulLista.childElementCount)
            if (ulLista.childElementCount === 0) {
                vacio.classList.remove('none')
            }
        }
    })
    