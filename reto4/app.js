let jugador1 = document.getElementById('jugador1')
let jugador2 = document.getElementById('jugador2')

let btnJugar = document.getElementById('jugar')
let btnTirarAgain = document.getElementById('tirarAgain')
let btnVerResultados = document.getElementById('irAResultados')
let btnGuardarPartida = document.getElementById('guardarPartida')
let btnSalir = document.getElementById('btnSalir')
let btnSiguiente1 = document.getElementById('siguiente1')
let btnSiguiente2 = document.getElementById('siguiente2')

let listaJA = document.getElementById('listaJuegosAnteriores')
let carrouselInner = document.getElementById('carrouselInner')

let pantalla0 = document.getElementById('pantalla0')
let pantalla1 = document.getElementById('pantalla1')
let pantalla2 = document.getElementById('pantalla2')
let loading = document.getElementById('loading')
let form = document.getElementById('form')
let juegosAnteriores = document.getElementById('juegosAnteriores')

let tarjetas = document.getElementById('tarjetas')

let pantallaResultados = document.getElementById('resultados')
let resultadosContent = document.getElementById('resultadosContent')

let match = document.getElementById('match')

let cartas = [{"id":0, "description": "Solo te importan los seguidores, el gym, la noche y hacer quilombo, bro. Claramente tenes biogte y usas camisas floreadas. Armaste el grupito más nefasto de la casa, te haciste el picante pero te eliminaron de un saque.", "name": "Tomás Holder", "img":"./img/tomas.jpeg","puntuacion":-20},
{"id":1, "description": "Dijiste algo en la presentación para hacerte la polémica, formaste parte de los monitos, hiciste una jugada que te salió MUY mal y bueno, saliste segunda de la casa. La próxima será", "name": "Martina Stewart Usher", "img":"./img/martina.jpeg", "puntuacion": 1}, 
{"id":2, "description": "Una de las primeras lleva-y-trae de la casa, no todos se bancan tu tono de voz pero jugaste bien, lástima que saliste tercera", "name":"Mora Jabornisky", "img":"./img/moragh.jpeg", "puntuacion":-2},
{"id":3, "description": "Juan, el tachero, la primera víctima de Alfa, fuiste parte de los monitos, te acordaste tarde de jugar y se la picanteaste a Marcos que te la mandó a guardar. Te fuiste con uno de los porcentajes más altos de votos de la casa.", "name":"Juan Reverdito", "img":"./img/juangh.jpeg", "puntuacion":-5},
{"id":4, "description": "El verdadero ni pincha ni corta. Literalmente nadie se acuerda de tu paso por la casa pero aún así te fuiste séptima, bastante bien.", "name":"María Laura Álvarez", "img":"./img/maria.jpeg", "puntuacion":0},
{"id":5, "description": "¿Todo bien gordi? La más lleva y trae de la casa, discutiste heavy con la Tora. Te fuiste, volviste y te expulsaron por hablar de más. Un desastre", "name":"Juliana Díaz","img":"./img/juliana.jpeg", "puntuacion":3},
{"id":6, "description": "Coti, la correntina cuchillera. La mejor jugadora de la casa, fan del queso rachado y novia del Cone. Te sacaron antes de tiempo pero te merecías ganar.", "name":"Constanza Romero", "img":"./img/coti.jpeg", "puntuacion": 20},
{"id":7, "description": "Alexis a.k.a 'El Cone', novio de Coti, el cordobés más copado. Gran inventor del apodo 'Cabeza de cebolla' para Alfa, jugaste muy bien con Coti pero cuando estuviste solo te traicionó Thiago. Mal ahí", "name":"Alexis Quiroga","img":"./img/cone.jpeg", "puntuacion": 12},
{"id":8, "description": "Te bancaste como tres meses sin que te voten, te ganaste a la gente por tu historia de vida. Te pusiste de novio con Daniela pero no la trataste bien y bueno, lo pagaste cuando volvió. Buen pibe igual.", "name":"Thiago Medina","img":"./img/thiago.jpeg", "puntuacion": 7},
{"id":9, "description": "Maxi, el otro cordobés. Novio de Juliana, te olvidaste de jugar cuando te pusiste de novio y bueno, se vió. Eso sí, te ganaste un auto.", "name":"Maximiliano Giudici","img":"./img/maxi.jpeg", "puntuacion":10},
{"id":10, "description":"El \"estratega\" de la casa, supuestamente hiciste historia pero nadie lo cree, eso sí, te la bancaste solo una banda de tiempo y la gente te quería hasta que bueno, dijiste lo del Drive. Fuiste el mejor amigo de Marcos." , "name":"Agustín Guardis","img":"./img/agus.jpeg", "puntuacion": 4},
{"id":11, "description": "Hola amiiiigos. Big Ari, el asador incomprendido de la casa, Alfa fue tu archi-enemigo y te hizo la vida imposible pero la llevaste bastante bien. Siempre con una sonrisa y la mejor. Aplausos.", "name":"Ariel Ansaldo","img":"./img/ariel.png", "puntuacion":9},
{"id":12, "description": "Alfa, uf. Personaje complicado de la casa. Siempre queres tener razón, conoces a todo el mundo (supuestamente) y tuviste actitudes muy feas con todos. Nunca se festejó tanto una salida.", "name":"Walter Santiago","img":"./img/alfa.png", "puntuacion": -5},  
{"id":13, "description": "Venganiela, mejor amiga de Juli. Estuviste en algo con Thiago aunque supuestamente no era tu tipo. Cuando te enteraste de lo que dijo él, le hiciste la cruz y lo sacaste de la casa.", "name":"Daniela Celis","img":"./img/daniela.jpeg", "puntuacion": 12},
{"id":14, "description": "La Tora, novia de Nacho, te fuiste la primera vez y entraste porque la expulsaron a Juliana. Siempre picante y cero careta. Quedaste quinta, bien ahí.", "name":"Lucila Villar","img":"./img/lucia.jpeg", "puntuacion": 8},
{"id":15, "description": "Cami, intensa como ninguna, entraste con Big Ari y al principio no te llevaste bien con la Tora, pero pudieron resolver todo. Llegaste lejos igual", "name":"Camila Lattanzio","img":"./img/cami.jpeg", "puntuacion":10},
{"id":16, "description": "Romina, la cocinera y jefa de la casa, ", "name":"Romina Uhrig","img":"./img/romi.jpeg", "puntuacion": 10},
{"id":17, "description": "El Primo, la mejor persona de la casa. Para algunos es un potus, para otros el ganador. Dueño de Morita. Nadie entiende cómo hace, pero no se enoja nunca.", "name":"Marcos Ginocchio","img":"./img/marcos.jpeg", "puntuacion": 100},  
{"id":18, "description": "La milipili por excelencia. Es capaz de llorar por una pollera manchada, pero se la quiere. Digna finalista (pero queda tercera)", "name":"Julieta Poggio","img":"./img/julieta.jpeg", "puntuacion": 10},
{"id":19, "description": "Nachito, seguramente el ganador de este Gran Hermano, al principio fue parte de los monitos pero se reinventó y llegó lejos. Uno de los mejores sin duda.", "name":"Juan Ignacio Castañares Puente","img":"./img/nachogh.jpeg", "puntuacion": 50}]

let cartasParaDisplay = []

function sacarCartas(){
while (cartasParaDisplay.length < 6){
    const cartaRandom = Math.floor(Math.random() * cartas.length)
    const cartita = cartas[cartaRandom]
    if (!cartasParaDisplay.includes(cartita)){
        cartasParaDisplay.push(cartita)
        }
    }
}

//codigo de arriba explicado: Despues de armar el array con todas las cartas, armo otro array vacio que lo voy a usar para mandar las cartas que salieron del .random
// Para hacer eso, y asegurarme de que no se repitan hago lo siguiente: 
// Primero saco al azar el indice de una carta del array grande haciendo un math.random multiplicado por la cantidad de elementos del array.(Para que no me de un numero mayor a la cantidad de elementos que existen)
// Después le asigno ese indice al array para ver qué carta saqué. Si la carta que saqué del array grande no está en el array nuevo, la incluyo en el array haciendo un .push 
// Esto lo repito 6 veces con el while( <6)
//
//

function agregarNone(section){
    section.classList.add('none')
}
function sacarNone(section){
    section.classList.remove('none')
}

function agregarFlex(section){
    section.classList.add('activeFlex')
}

function sacarFlex(section){
    section.classList.remove('activeFlex')
}

function dataDeCartas1(){
    for(i=0; i<3; i++){
        let activeClass = (i === 0) ? "active" : ""; // chequeamos si estamos en la posicio 0 del loop, si es asi -> le agregamos la clase "active" al elemento
        let modelo = `<div class="carousel-item ${activeClass}" id="${i}">
        <h3 class="tituloCardPlayer">Carta ${i+1}/3 de ${jugador1.value}</h3>
        <img src='${cartasParaDisplay[i].img}' class="imagenCarta"/>
        <h5 class="nombreCarta">${cartasParaDisplay[i].name}</h5>
        <p class="descripcionCarta">${cartasParaDisplay[i].description}</p>
    </div>`
    carrouselInner.innerHTML += modelo
    }
    
}

function dataDeCartas2(){
    for(i=0; i<3; i++){
        let modelo = `<div class="carousel-item" id="${i+3}">
        <h3 class="tituloCardPlayer">Carta ${i+1}/3 de ${jugador2.value}</h3>
        <img src='${cartasParaDisplay[i+3].img}' class="imagenCarta"/>
        <h5 class="nombreCarta">${cartasParaDisplay[i+3].name}</h5>
        <p class="descripcionCarta">${cartasParaDisplay[i+3].description}</p>
    </div>`
    carrouselInner.innerHTML += modelo
    
    }  
}

function mostrarResultados(){
    let modeloResultados = `
    <div class="resultadoCard">
        <h4 class="tituloResultado">Grupo de ${jugador1.value}</h4>
        <div class="cartasResultados">
            <img src='${cartasParaDisplay[i-3].img}' class="imgCartaResultados"/>
            <img src='${cartasParaDisplay[i-2].img}' class="imgCartaResultados"/>
            <img src='${cartasParaDisplay[i-1].img}' class="imgCartaResultados"/>
        </div>
    </div>
    <div class="resultadoCard">
        <h4 class="tituloResultado">Grupo de ${jugador2.value}</h4>
        <div class="cartasResultados">
            <img src='${cartasParaDisplay[i].img}' class="imgCartaResultados"/>
            <img src='${cartasParaDisplay[i+1].img}' class="imgCartaResultados"/>
            <img src='${cartasParaDisplay[i+2].img}' class="imgCartaResultados"/>
        </div>
    </div>`
    resultadosContent.innerHTML += modeloResultados    
}



function hayMatch(){
    let bien = 'Hay muy buena onda entre todos y se ve que se quieren, la convivencia se hace fácil y los problemas son cada vez menos. Hay match entre los grupos'
    let mal = 'Desde el primer día se hicieron la vida imposible, muchos chismes inventados, muchas discusiones y puteadas. La convivencia es dura y ya hay algunos que se quieren ir. No hay match entre los grupos'
    let cuenta = cartasParaDisplay[0].puntuacion + cartasParaDisplay[1].puntuacion + cartasParaDisplay[2].puntuacion + cartasParaDisplay[3].puntuacion + cartasParaDisplay[4].puntuacion + cartasParaDisplay[5].puntuacion
    if(cuenta > 50){
        match.innerHTML += `<h6 class='matchTitulo'>${bien}</h6>`
    }else{
        match.innerHTML += `<h6 class='matchTitulo'>${mal}</h6>`
    }
    localStorage.setItem('resultadoPartida', cuenta)
}

function listaResultados(){
let desdeStorage = localStorage.getItem('resultadoPartida')
if (desdeStorage > 90){
    listaJA.innerHTML +=`<li class='liJuegos'><div>
                            </div>
                            <p>Los grupos se van a llevaron bien</p>
                            <div>
                            </div>
                        </li>`
}else{
    listaJA.innerHTML +=`<li class='liJuegos'><div>
    </div>
    <p>Los grupos se van a llevaron mal</p>
    <div>
    </div>
</li>`
}
}

btnSiguiente1.addEventListener('click', function(){
    agregarNone(pantalla0)
    sacarNone(pantalla1)
    agregarFlex(pantalla1)
})

btnSiguiente2.addEventListener('click', function(){
    agregarNone(pantalla1)
    sacarFlex(pantalla1)
    sacarNone(pantalla2)
    agregarFlex(pantalla2)
})

btnJugar.addEventListener('click',function(){
    agregarNone(pantalla2)
    sacarFlex(pantalla2)
    sacarNone(loading)
    setTimeout(()=>{
        agregarNone(loading)
        sacarNone(tarjetas)
    }, 3000)
    sacarCartas()
    dataDeCartas1()
    dataDeCartas2()
    mostrarResultados()
    console.log(cartasParaDisplay)
    localStorage.setItem('listaPartidas', JSON.stringify(cartasParaDisplay))
    
})

btnVerResultados.addEventListener('click', ()=>{
    sacarNone(pantallaResultados)
    agregarNone(tarjetas)
    hayMatch()
})

// para eliminar todos los divs que muestran la carta de cada jugador, selecciono todos los elementos que tengan como clase ("carousel-item")
// y los guardo en una variable (car). Luego a esta variable (que tiene una nodeList con todos los elementos guardados), le hago un forEach pasandole como parametro
// una funcion donde borra cada elemento que contiene (".carousel-item")

btnTirarAgain.addEventListener('click', (e)=>{
    const car = document.querySelectorAll('.carousel-item')
    car.forEach(item => carrouselInner.removeChild(item))    
    cartasParaDisplay = []
    agregarNone(tarjetas)
    sacarNone(loading)
    setTimeout(()=>{
        agregarNone(loading)
        sacarNone(tarjetas)
    }, 1000)
    sacarCartas()
    dataDeCartas1()
    dataDeCartas2()
    localStorage.setItem('listaPartidas', JSON.stringify(cartasParaDisplay))
})

btnGuardarPartida.addEventListener('click', ()=>{
    form.reset()
    sacarNone(pantalla0)
    agregarNone(pantallaResultados)
    sacarNone(juegosAnteriores)
    const car = document.querySelectorAll('.carousel-item')
    car.forEach(item => carrouselInner.removeChild(item))
    const car2 = document.querySelectorAll('.resultadoCard')
    car2.forEach(item => resultadosContent.removeChild(item))
    let tarjetaTitulo = document.querySelector('.matchTitulo')
    match.removeChild(tarjetaTitulo)
    listaResultados()
    cartasParaDisplay = []
})

btnSalir.addEventListener('click', ()=>{
    sacarNone(pantalla0)
    form.reset()
    const car = document.querySelectorAll('.carousel-item')
    car.forEach(item => carrouselInner.removeChild(item))
    const car2 = document.querySelectorAll('.resultadoCard')
    car2.forEach(item => resultadosContent.removeChild(item))
    cartasParaDisplay = []
    agregarNone(pantallaResultados)
    let tarjetaTitulo = document.querySelector('.matchTitulo')
    match.removeChild(tarjetaTitulo)
})


