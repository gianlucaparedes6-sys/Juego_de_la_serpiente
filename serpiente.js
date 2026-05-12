
    // 1. Capturamos el canvas y su contexto de dibujo
    const canvas = document.getElementById("canvasJuego");
    const ctx = canvas.getContext("2d");
    const TAMANIO_CELDA = 25; // Tamaño de cada celda en píxeles

    

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

    function dibujarTodo() {
      limpiarCanvas();
      dibujarTablero();
    }



