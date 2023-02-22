let txtModal = document.getElementById('txtModal')
let addBtn = document.getElementById('agregarBtnModal')
let ulLista = document.getElementById('ulLista')
let vacio = document.getElementById('estadoVacio')
let modal = document.getElementById('exampleModal')
let check = document.getElementById('checkList')
let padreList = document.getElementById('listDiv')

addBtn.addEventListener('click', function(){
    let tarea = txtModal.value
    let categoria = document.getElementById('categoryModal').value
    let descripcion = document.getElementById('aclaracionModal').value
    let modelo = `<li class="list-group-item" >
                    <div class="listDiv">
                    <img src='icons/${categoria}.png' width='32px' height='32px' class='imgList'>
                        <p class='listDivText'>${tarea}</p>
                        <input type="checkbox" onClick="sacarHijo(this)">
                    </div>
                </li>`
    vacio.style.display = 'none'
    ulLista.innerHTML += modelo
    txtModal.value = ""
})

function sacarHijo(elemento){
    if(elemento.checked){
        elemento.parentElement.parentElement.remove() 
    }
}


//check.addEventListener('ch', function(){
//   
//})


