// Menu Interactivo =========================================================

let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});


// Redireccion Tipos ========================================================

function hada() {
	location.href = "paginas/fairy.html";
};

function acero() {
	location.href = "paginas/steel.html";
};

function siniestro() {
	location.href = "paginas/dark.html";
};

function dragon() {
	location.href = "paginas/dragon.html";
};

function fantasma() {
	location.href = "paginas/ghost.html";
};

function roca() {
	location.href = "paginas/rock.html";
};

function bicho() {
	location.href = "paginas/bug.html";
};

function psiquico() {
	location.href = "paginas/psychic.html";
};

function volador() {
	location.href = "paginas/fly.html";
};

function tierra() {
	location.href = "paginas/ground.html";
};

function veneno() {
	location.href = "paginas/poison.html";
};

function lucha() {
	location.href = "paginas/fight.html";
};

function hielo() {
	location.href = "paginas/ice.html";
};

function planta() {
	location.href = "paginas/grass.html";
};

function electrico() {
	location.href = "paginas/electric.html";
};

function agua() {
	location.href = "paginas/water.html";
};

function fuego() {
	location.href = "paginas/fire.html";
};

function normal() {
	location.href = "paginas/normal.html";
};

function kanto() {
	location.href = "pokedex-pages/kanto.html";
};

// Boton Random =========================================================

let pageList = [
	'paginas/fairy.html', 'paginas/steel.html', 'paginas/dark.html',
	'paginas/dragon.html', 'paginas/ghost.html', 'paginas/rock.html',
	'paginas/bug.html', 'paginas/psychic.html', 'paginas/fly.html',
	'paginas/ground.html', 'paginas/poison.html', 'paginas/fight.html',
	'paginas/ice.html', 'paginas/grass.html', 'paginas/electric.html',
	'paginas/water.html', 'paginas/fire.html', 'paginas/normal.html',
];
let random = Math.floor(Math.random()*pageList.length);
let rValue = pageList[random];

function randomType() {
	location.href = rValue
}
