
    const canvas = document.getElementById("canvasJuego");
    const ctx = canvas.getContext("2d");
    const TAMANIO_CELDA = 25; // Tamaño de cada celda en píxeles
    let serpienteX=0;
    let serpienteY=0;
    const serpiente=[];
    let intervaloSerpiente;  
    let direccionActual = "derecha";
    let comidaX = 0;
    let comidaY = 0;
    let puntaje = 0;

    serpiente.push({x: 200, y: 125});
    serpiente.push({x: 200, y: 150});
    serpiente.push({x: 175, y: 150});
    

    // Primera pintura del juego al cargar la página
    generarComida();
    dibujarTodo();

    function limpiarCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    function dibujarTablero(){

    ctx.strokeStyle = "white";

    ctx.beginPath();

    for(let x = TAMANIO_CELDA; x < canvas.width; x += TAMANIO_CELDA){

    ctx.moveTo(x,0);

    ctx.lineTo(x,canvas.height);
    }
    for(let y = TAMANIO_CELDA; y < canvas.height; y += TAMANIO_CELDA){

    ctx.moveTo(0,y);

    ctx.lineTo(canvas.width,y);
    }

  ctx.stroke();
}
  function pintarParte(x,y,color){

  ctx.fillStyle = color;

  ctx.fillRect(
    x,
    y,
    TAMANIO_CELDA,
    TAMANIO_CELDA
  );

  }
function pintarSerpiente(){

   for(let i = 0; i < serpiente.length; i++){

    let parte = serpiente[i];

    if(i == 0){
      ctx.fillStyle = "red";
    }else{
      ctx.fillStyle = "lime";
    }

    pintarParte(
    parte.x,
    parte.y,
    ctx.fillStyle
    );
  }

}
function pintarComida(){

  pintarParte(comidaX, comidaY, "yellow");

}
function generarComida(){

  // Cantidad de columnas
  let columnas = canvas.width / TAMANIO_CELDA;

  // Cantidad de filas
  let filas = canvas.height / TAMANIO_CELDA;

  // Posición aleatoria X
  comidaX = Math.floor(Math.random() * columnas);

  // Posición aleatoria Y
  comidaY = Math.floor(Math.random() * filas);

  // Convertir a coordenadas reales
  comidaX = comidaX * TAMANIO_CELDA;
  comidaY = comidaY * TAMANIO_CELDA;

  // Dibujar comida
  pintarParte(comidaX, comidaY, "yellow");

}
  function moverDerecha(){

  // 1. Obtener cabeza actual
  let cabeza = serpiente[0];

  // 2. Crear nueva cabeza
  let nuevaCabeza = {
    x: cabeza.x + TAMANIO_CELDA,
    y: cabeza.y
  };

  // 3. Agregar nueva cabeza al inicio
  serpiente.unshift(nuevaCabeza);

  // 4. Eliminar última parte de la serpiente
  serpiente.pop();

}
function moverIzquierda(){

  let cabeza = serpiente[0];

  let nuevaCabeza = {
    x: cabeza.x - TAMANIO_CELDA,
    y: cabeza.y
  };

  serpiente.unshift(nuevaCabeza);

  serpiente.pop();
}

function moverArriba(){

  let cabeza = serpiente[0];

  let nuevaCabeza = {
    x: cabeza.x,
    y: cabeza.y - TAMANIO_CELDA
  };

  serpiente.unshift(nuevaCabeza);

  serpiente.pop();
}

function moverAbajo(){

  let cabeza = serpiente[0];

  let nuevaCabeza = {
    x: cabeza.x,
    y: cabeza.y + TAMANIO_CELDA
  };

  serpiente.unshift(nuevaCabeza);

  serpiente.pop();
}
function atrapaComida(){

  let cabeza = serpiente[0];

  if(cabeza.x == comidaX && cabeza.y == comidaY){

    return true;

  }

  return false;

}
function crecerSerpiente(){

  let cola = serpiente[serpiente.length - 1];

  let nuevaParte = {
    x: cola.x,
    y: cola.y
  };

  if(direccionActual == "derecha"){
    nuevaParte.x -= TAMANIO_CELDA;
  }

  if(direccionActual == "izquierda"){
    nuevaParte.x += TAMANIO_CELDA;
  }

  if(direccionActual == "arriba"){
    nuevaParte.y += TAMANIO_CELDA;
  }

  if(direccionActual == "abajo"){
    nuevaParte.y -= TAMANIO_CELDA;
  }

  serpiente.push(nuevaParte);

}
function moverSerpiente(){

  if(direccionActual == "derecha"){
    moverDerecha();
  }

  if(direccionActual == "izquierda"){
    moverIzquierda();
  }

  if(direccionActual == "arriba"){
    moverArriba();
  }

  if(direccionActual == "abajo"){
    moverAbajo();
  }

  if(atrapaComida() == true){

    puntaje++;

    document.getElementById("puntaje").innerHTML = puntaje;

    crecerSerpiente();

    generarComida();
    

  }

  dibujarTodo();

}

    function dibujarTodo() {
      limpiarCanvas();
      dibujarTablero();
      pintarSerpiente();
      pintarComida();
    }
    function iniciarJuego(){

    clearInterval(intervaloSerpiente);

    intervaloSerpiente = setInterval(moverSerpiente,1000);

    }
    function pausarJuego(){
      clearInterval(intervaloSerpiente);
    }
    function cambiarDireccion(direccion){

  direccionActual = direccion;

}
function reiniciarJuego(){

  
  generarComida();
  dibujarTodo();
}