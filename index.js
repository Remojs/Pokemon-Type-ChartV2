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

function hada() {
	location.href = "paginas/hada.html";
};

function acero() {
	location.href = "paginas/acero.html";
};

function siniestro() {
	location.href = "paginas/siniestro.html";
};

function dragon() {
	location.href = "paginas/dragon.html";
};

function fantasma() {
	location.href = "paginas/fantasma.html";
};

function roca() {
	location.href = "paginas/roca.html";
};

function bicho() {
	location.href = "paginas/bicho.html";
};

function psiquico() {
	location.href = "paginas/psiquico.html";
};

function volador() {
	location.href = "paginas/volador.html";
};

function tierra() {
	location.href = "paginas/tierra.html";
};

function veneno() {
	location.href = "paginas/veneno.html";
};

function lucha() {
	location.href = "paginas/lucha.html";
};

function hielo() {
	location.href = "paginas/hielo.html";
};

function planta() {
	location.href = "paginas/planta.html";
};

function electrico() {
	location.href = "paginas/electrico.html";
};

function agua() {
	location.href = "paginas/agua.html";
};

function fuego() {
	location.href = "paginas/fuego.html";
};

function normal() {
	location.href = "paginas/normal.html";
};
