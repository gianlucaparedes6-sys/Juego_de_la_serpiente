
    // 1. Capturamos el canvas y su contexto de dibujo
    const canvas = document.getElementById("canvasJuego");
    const ctx = canvas.getContext("2d");
    const TAMANIO_CELDA = 25; // Tamaño de cada celda en píxeles
    let serpienteX=0;
    let serpienteY=0;
    const serpiente=[];
    serpiente.push({x: 200, y: 125});
    serpiente.push({x: 200, y: 150});
    serpiente.push({x: 175, y: 150});
    

    // Primera pintura del juego al cargar la página
    dibujarTodo();
    
    // =========================
    // FUNCIONES DE DIBUJO
    // =========================

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
function pintarSerpiente(){

   for(let i = 0; i < serpiente.length; i++){

    let parte = serpiente[i];

    if(i == 0){
      ctx.fillStyle = "red";
    }else{
      ctx.fillStyle = "lime";
    }

    ctx.fillRect(
      parte.x,
      parte.y,
      TAMANIO_CELDA,
      TAMANIO_CELDA
    );
  }

}

    function dibujarTodo() {
      limpiarCanvas();
      dibujarTablero();
      pintarSerpiente();
    }
function cambiarDireccion(direccion){

  if(direccion == "derecha"){
    serpienteX += TAMANIO_CELDA;
  }

  if(direccion == "izquierda"){
    serpienteX -= TAMANIO_CELDA;
  }

  if(direccion == "arriba"){
    serpienteY -= TAMANIO_CELDA;
  }

  if(direccion == "abajo"){
    serpienteY += TAMANIO_CELDA;
  }

  dibujarTodo();
}

