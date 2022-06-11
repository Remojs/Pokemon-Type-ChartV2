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

// Boton Random =========================================================

let pageList = [
	'paginas/hada.html', 'paginas/acero.html', 'paginas/siniestro.html',
	'paginas/dragon.html', 'paginas/fantasma.html', 'paginas/roca.html',
	'paginas/bicho.html', 'paginas/psiquico.html', 'paginas/volador.html',
	'paginas/tierra.html', 'paginas/veneno.html', 'paginas/lucha.html',
	'paginas/hielo.html', 'paginas/planta.html', 'paginas/electrico.html',
	'paginas/agua.html', 'paginas/fuego.html', 'paginas/normal.html',
];
let random = Math.floor(Math.random()*pageList.length);
let rValue = pageList[random];

function randomType() {
	location.href = rValue
}

// ==============================================================