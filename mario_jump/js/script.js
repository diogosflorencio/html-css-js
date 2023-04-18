const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

function jump_mario() {
    mario.classList.remove('bottom');
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
        mario.classList.add('bottom');
    }, 500);
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 90 && marioPosition < 55 && pipePosition > 0){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/mario_over.png'
        mario.style.width = '60px'
        mario.style.marginLeft = '30px'

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown',jump_mario);