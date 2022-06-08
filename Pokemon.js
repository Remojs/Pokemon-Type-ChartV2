const Had = "Hada";
const Ace = "Acero";
const Sin = "Siniestro";
const Dra = "Dragon";
const Fan = "Fantasma";
const Roc = "Roca";
const Bic = "Bicho";
const Psi = "Psiquico";
const Vol = "Volador";
const Tie = "Tierra";
const Ven = "Veneno";
const Luc = "Lucha";
const Hie = "Hielo";
const Pla = "Planta";
const Ele = "Electrico";
const Agu = "Agua";
const Fue = "Fuego";
const Nor = "Normal";

/* let tipo = prompt ("Primer tipo del pokemon?");

 if (tipo == "hada") {

	document.write( "<b> El tipo HADA es efectivo contra: </b>" + "<br>" + Luc + "<br>"+ Dra + "<br>" + Sin + "<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>"+ Ven + "<br>"+ Ace + "<br>" + "<br>"+ "<b> Inmune a:</b>" + "<br>" + Dra)
}

 else if (tipo == "acero") {

	document.write( "<b> El tipo ACERO es efectivo contra: </b>" + "<br>" + Hie + "<br>"+ Roc + "<br>" + Had + "<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>"+ Fue + "<br>" + Luc + "<br>" + Tie + "<br>" + "<br>"+ "<b> Inmune a:</b>" + "<br>" + Ven)
} 

 else if (tipo == "siniestro") {

	document.write( "<b> El tipo SINIESTRO es efectivo contra: </b>" + "<br>" + Psi + "<br>"+ Fan + "<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>"+ Luc + "<br>" + Bic + "<br>" + Had + "<br>" + "<br>"+ "<b> Inmune a:</b>" + "<br>" + Psi)
} 

 else if (tipo == "dragon") {

	document.write( "<b> El tipo DRAGON es efectivo contra: </b>" + "<br>" + Dra + "<br>"+ "<br>" + "<b> Debil contra: </b>" + "<br>"+ Hie + "<br>" + Dra + "<br>" + Had)
} 

 else if (tipo == "fantasma") {

	document.write("<b> El tipo FANTASMA es efectivo contra: </b>" + "<br>" + Psi + "<br>"+ Fan + "<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>"+ Fan + "<br>" + Sin + "<br>" + "<br>" + "<b>Inmune contra: </b>" +"<br>" + Nor + Luc)
} 

 else if (tipo == "roca") {

	document.write("<b> El tipo ROCA es efectivo contra: </b>" + "<br>" + Fue + "<br>"+ Hie + "<br>" + Vol + "<br>"+ Bic + "<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>"+ Agu + "<br>" + Pla + "<br>"+ Luc + "<br>" + Tie + "<br>" + Ace)
} 

 else if (tipo == "bicho") {

	document.write( "<b> El tipo BICHO es efectivo contra: </b>" + "<br>" + Pla + "<br>"+ Psi + "<br>" + Sin + "<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>"+ Fue + "<br>" + Vol + "<br>" + Roc)
} 

 else if (tipo == "psiquico") {

	document.write( "<b> El tipo PSIQUICO es efectivo contra: </b>" + "<br>" + Luc + "<br>"+ Ven + "<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>"+ Bic + "<br>" + Fan + "<br>" + Sin)
} 

 else if (tipo == "volador") {

	document.write( "<b> El tipo VOLADOR es efectivo contra: </b>" + "<br>" + Pla + "<br>"+ Luc + "<br>" + Bic + "<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>"+ Ele + "<br>" + Hie + "<br>" + Roc + "<br>" + "<br>"+ "<b> Inmune a:</b>" + "<br>" + Tie)
} 

else if (tipo == "tierra") {

	document.write( "<b> El tipo TIERRA es efectivo contra: </b>" + "<br>" + Fue + "<br>"+ Ele + "<br>" + Ven + "<br>" + Roc + "<br>" + Ace + "<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>"+ Agu + "<br>" + Pla + "<br>" + Hie + "<br>" + "<br>"+ "<b> Inmune a:</b>" + "<br>" + Ele)
} 

 else if (tipo == "veneno") {

	document.write("<b> El tipo VENENO es efectivo contra: </b>" + "<br>" + Pla + "<br>"+ Had + "<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>"+ Tie + "<br>" + Had)
} 

else if (tipo == "lucha") {

	document.write( "<b> El tipo LUCHA es efectivo contra: </b>" + "<br>" + Nor + "<br>"+ Hie + "<br>" + Roc + "<br>" + Sin + "<br>" + Ace + "<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>"+ Vol + "<br>" + Psi + "<br>" + Had)
} 

 else if (tipo == "hielo") {

	document.write("<b> El tipo HIELO es efectivo contra: </b>" + "<br>" + Pla + "<br>"+ Tie + "<br>" + Vol + "<br>"+ Dra + "<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>" + Fue + "<br>"+ Luc + "<br>" + Roc + "<br>" + Ace)
} 

 else if (tipo == "planta") {

	document.write("<b> El tipo PLANTA es efectivo contra: </b>" + "<br>" + Agu + "<br>"+ Roc + "<br>" + Tie + "<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>"+ Fue + "<br>" + Hie + "<br>"+ Ven + "<br>" + Vol + "<br>" + Bic)
} 

 else if (tipo == "electrico") {

	document.write("<b> El tipo ELECTRICO es efectivo contra: </b>" + "<br>" + Agu + "<br>"+ Vol + "<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>"+ Tie)
} 

 else if (tipo == "agua") {

	document.write("<b> El tipo AGUA es efectivo contra: </b>" + "<br>" + Fue + "<br>"+ Tie + "<br>" + Roc +"<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>"+ Ele + "<br>" + Pla)
} 

 else if (tipo == "fuego") {

	document.write( "<b> El tipo FUEGO es efectivo contra: </b>" + "<br>" + Pla + "<br>"+ Hie + "<br>" + Bic + "<br>" +  Ace + "<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>"+ Agu + "<br>" + Tie + "<br>" + Roc)
} 

 else if (tipo == "normal") {

	document.write("<b> El tipo NORMAL es efectivo contra: </b>" + "<br>" + "Ningun Tipo" + "<br>" + "<br>" + "<b> Debil contra: </b>" + "<br>"+ Luc + "<br>" + "<br>"+ "<b> Inmune a:</b>" + "<br>" + Fan)
} 


 else {
	document.write("Primer tipo no especificado")
} */

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

