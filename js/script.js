const personagens = [
    {img: '1.jpg', bodyimg: 'b1.png'},
    {img: '2.jpg', bodyimg: 'b2.png'},
    {img: '3.jpg', bodyimg: 'b3.png'},
    {img: '4.jpg', bodyimg: 'b4.png'},
    {img: '5.jpg', bodyimg: 'b5.png'},
    {img: '6.jpg', bodyimg: 'b6.png'},
    {img: '7.jpg', bodyimg: 'b7.png'},
    {img: '8.jpg', bodyimg: 'b8.png'},
    {img: '9.jpg', bodyimg: 'b9.png'},
    {img: '10.jpg', bodyimg: 'b10.png'},
    {img: '11.jpg', bodyimg: 'b11.png'},
    {img: '12.jpg', bodyimg: 'b12.png'},
];

const roupas = [
    'r1.png',
    'r2.png',
    'r3.png',
    'r4.png',
    'r5.png',
    'r6.png',
    'r7.png',
    'r8.png',
    'r9.png',
    'r10.png',
    'r11.png',
    'r12.png',
    'r13.png',
    'r14.png',
    'r15.png',
];

let grid = document.querySelector('.avatar-grid');
let container = document.querySelector('.container');
let containerRoupas = document.querySelector('.container-roupas');
let carousel = document.querySelector('.carousel-inner');
let avatar;
let containerFinal = document.querySelector('.container-final');
let som = new Audio();
som.src = "https://www.soundjay.com/buttons/sounds/button-7.mp3";

personagens.forEach(personagem => {
    const avatar = document.createElement('div');
    avatar.classList.add('avatar');
    avatar.innerHTML = `<img src='images/${personagem.img}'>`;
    avatar.dataset.bodyimg = personagem.bodyimg;
    grid.appendChild(avatar);
    avatar.addEventListener('click', continuar);
});

function continuar() {
    som.play();
    container.innerHTML = '';
    const body = document.createElement('div');
    body.classList.add('body');
    body.innerHTML = `<img src = 'images/provador.png'><img src='images/${this.dataset.bodyimg}'>`;
    avatar = this.dataset.bodyimg;
    containerRoupas.classList.add('active');
    containerRoupas.appendChild(body);
    container.classList.remove('container');
    roupas.forEach(r => {
        const roupa = document.createElement('div');
        roupa.classList.add('carousel-item');
        roupa.innerHTML = `<img src="images/${r}" class="d-block w-100">`;
        roupa.dataset.img = r;
        carousel.appendChild(roupa);
    }); 
}

function finalizar() {
    som.play();
    const roupa = document.querySelector('.carousel-item.active');
    containerRoupas.classList.remove('active');
    containerFinal.classList.add('active');
    let avatarFoto = document.createElement('div');
    avatarFoto.classList.add('foto');
    avatarFoto.innerHTML = `<img src='images/${avatar}'><img src ='images/${roupa.dataset.img}'>`;
    containerFinal.appendChild(avatarFoto);
}

function tirarFoto() {
    let som = new Audio();
    som.src = "https://www.soundjay.com/mechanical/sounds/camera-shutter-click-01.mp3";
    som.play();
    setTimeout(() => {
        window.print();
    }, '1000');
}