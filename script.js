const cat = document.querySelector('.cat');
const tree = document.querySelector('.tree');

const jump = () => {
    cat.classList.add('jump');

    setTimeout(() => {

        cat.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const treePosition = tree.offsetLeft;
    const catPosition = +window.getComputedStyle(cat).bottom.replace('px', '');

    if (treePosition <= 120 && treePosition  > 0 && catPosition < 130) {

        tree.style.animation = 'none';
        tree.style.left = `${treePosition}px`;

        cat.style.animation = 'none';
        cat.style.bottom = `${catPosition}px`;

        cat.src = 'https://github.com/luffyamao/teste/blob/main/Anime-Cat-Transparent-Background.png?raw=true';
        cat.style.width = '200px';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);