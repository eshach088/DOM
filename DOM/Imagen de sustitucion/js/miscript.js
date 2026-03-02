window.onload = function(){
    let bombilla = document.getElementById('bombilla');
    let encendida = false;

    bombilla.addEventListener('click', function(){
        if (encendida){
            bombilla.src = "img/pic_bulboff.gif";
            encendida = false;
        } else {
            bombilla.src = "img/pic_bulbon.gif"
            encendida = true;
        }
    });
}