const cat = document.querySelector('.cat');
const tree = document.querySelector('.tree');
const button = document.querySelector('.buttonstyle');
const nuvem = document.querySelector('.nuvens');
const fimdejogo = document.querySelector('.fimdejogo');
const score = document.querySelector('.score');

let count = 0;

const jump = () => {
    cat.classList.add('jump');

    setTimeout(() => {

        cat.classList.remove('jump');

    }, 500);
}




const loop = setInterval(() => {

    const treePosition = tree.offsetLeft;
    const catPosition = +window.getComputedStyle(cat).bottom.replace('px', '');
    //const nuvemPosition = window.getComputedStyle(nuvem)


    if (treePosition <= 120 && treePosition  > 0 && catPosition < 130) {

        tree.style.animation = 'none';
        tree.style.left = `${treePosition}px`;

        cat.style.animation = 'none';
        cat.style.bottom = `${catPosition}px`;

        cat.src = 'https://github.com/luffyamao/teste/blob/main/Anime-Cat-Transparent-Background.png?raw=true';
        cat.style.width = '200px';

        //nuvem.style.animation = 'none';

        fimdejogo.style.visibility = 'visible';

        clearInterval(loop);
    }
    count++;
    score.innerHTML = `SCORE: ${count}`;
}, 10);

document.addEventListener('keydown', (e) => {
    if ((e.code === 'ArrowUp') | (e.code === 'Space')){
        jump();
    }


});