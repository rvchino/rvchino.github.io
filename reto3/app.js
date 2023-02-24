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

botonAdd.addEventListener('click', function(){
    modal.classList.add('activeFlex')
    lista.classList.add('none')
    overlay.classList.add('show')
})

botonCanc.addEventListener('click', function(){
    modal.classList.remove('activeFlex')
    overlay.classList.remove('show')
})

addBtn.addEventListener('click', function(){
    let tarea = txtModal.value
    let categoria = document.getElementById('categoryModal').value
    //let azul = document.getElementById('azul')
    //let verde = document.getElementById('verde')
    //let amarillo = document.getElementById('amarillo')
    //let rojo = document.getElementById('rojo')
    let checksito = document.querySelector('input[name=checksito]:checked').value
    let modelo = `<li class="list-group-item  ${checksito}List" >
                    <div class="listDiv ">
                    <img src='icons/${categoria}.png' width='32px' height='32px' class='imgList'>
                        <p class='listDivText'>${tarea}</p>
                        <input type="checkbox" onClick="sacarHijo(this)">
                    </div>
                </li>`
    vacio.style.display = 'none'
    ulLista.innerHTML += modelo
    txtModal.value = ""
    aclacracion.value = ""
    modal.classList.remove('activeFlex') 
    lista.classList.remove('none')
    overlay.classList.remove('show')
    console.log(checksito)
})

function sacarHijo(elemento){
    if(elemento.checked){
        elemento.parentElement.parentElement.remove() 
    }
}



//check.addEventListener('ch', function(){
//   
//})


