window.onload = function(){
    const destino = document.getElementById('destino');

    const botonRojo = this.document.getElementById('rojo');
    const botonAzul = this.document.getElementById('azul');

    botonRojo.addEventListener('click', function() {
        destino.style.backgroundColor = 'red';
    })

    botonAzul.addEventListener('click', function() {
        destino.style.backgroundColor = 'blue';
    })
}