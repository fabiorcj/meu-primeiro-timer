function timer () {
function getTimeForSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR' , {
        hour12 : false,
        timeZone: 'UTC'
     });
}
const timer = document.querySelector('.timer');
let segundos = 0;
let contador;

document.addEventListener('click' , function (e) {
    const el = e.target;

    if ( el.classList.contains('iniciar')) {
        timer.classList.remove('pausado');
        clearInterval(contador);
        iniciaTimer();    
    }
    if ( el.classList.contains('zerar')) {
        timer.classList.remove('pausado');
        clearInterval(contador);
        timer.innerHTML = '00:00:00';
        segundos = 0; 
    }
    if ( el.classList.contains('pausar') , ( segundos > 0) ) {
        clearInterval(contador);
        timer.classList.add('pausado');     
    }
})

function iniciaTimer() { 
    contador = setInterval(() => { segundos++; timer.innerHTML = getTimeForSeconds(segundos);
}, 1000);
}

}

timer();
