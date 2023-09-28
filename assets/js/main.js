function timer () {
function getTimeForSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR' , {
        hour12 : false,
        timeZone: 'UTC'
     });
}
const timer = document.querySelector('.timer');
const pausar = document.querySelector('.pause');
const iniciar = document.querySelector('.iniciar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let contador;

function iniciaTimer() { 
    contador = setInterval(() => { segundos++; timer.innerHTML = getTimeForSeconds(segundos);
}, 1000);
}
iniciar.addEventListener('click' , function(event) { 
    timer.classList.remove('pausado');
    clearInterval(contador);
    iniciaTimer();

});
pausar.addEventListener('click' , function(event) {
    if ( segundos > 0) {
    clearInterval(contador);
    timer.classList.add('pausado');
    }
});
zerar.addEventListener('click' , function(event) {
    timer.classList.remove('pausado');
    clearInterval(contador);
    timer.innerHTML = '00:00:00';
    segundos = 0;
}
);

}

timer();
