document.querySelector('.botao-trailer'); // buscar o botao do html

const botaoTrailer = document.querySelector('.botao-trailer'); //atribuindo o valor do button a uma variavel
const modal = document.querySelector('.modal');
const fecharModal = document.querySelector('.fechar-modal');
const tiraVideo = document.getElementById('video');
const linkVideo = video.src;

botaoTrailer.addEventListener('click', () => { //add evento passando dois parametro um dele sendo uma função
    modal.classList.add('aberto'); //adicionando a class "aberto" para "abrir" a modal
    video.setAttribute('src', linkVideo);
});

fecharModal.addEventListener('click', () => {
    modal.classList.remove('aberto'); // remove a class "aberto";
    tiraVideo.setAttribute('src', ''); //tira o src do video
});


