function mostrar() {
    document.getElementById('hideText').style.display = 'block';
    document.getElementById('hideText').style.display = 'block';
}

function esconder() {
    document.getElementById('hideText').style.display = 'none';
}

window.onscroll = function () {
    if (document.documentElement.scrollTop > 500) {
        document.querySelector('.section-boton-arriba').classList.add('show');
    } else {
        document.querySelector('.section-boton-arriba').classList.remove('show');
    }
}

document.querySelector('.section-boton-arriba').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});