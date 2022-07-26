
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

// Random Pokedex =========================================================


//array with the IDs of the pokemon from the pokedex

let pokedexArray = [ //1th Gen
	'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie',
	'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate',
	'spearow', 'fearow', 'ekans', 'arbok', 'sandshrew', 'sandslash', 'pikachu', 'raichu', 'jigglypuff', 'wigglytuff',
	'nidoranF', 'nidorina', 'nidoqueen', 'nidoranM', 'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales',
	'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett',
	'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag',
	'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell',
	'victreebel', 'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro',
	'magnamite', 'magneton', 'farfetchd', 'doduo', 'dodrio', 'grimer', 'muk', 'seel', 'dewgong', 'shellder',
	'cloyster', 'gastly', 'haunter', 'gengar', 'drowzee', 'hypno', 'onix', 'krabby', 'kingler', 'voltorb',
	'electrode', 'exeggcute', 'exeggutor', 'cubone', 'marowak', 'hitmonlee', 'hitmonchan', 'lickytung', 'koffing', 'weezing',
	'rhyhorn', 'rhydon', 'chansey', 'tangela', 'kangaskhan', 'horsea', 'seadra', 'goldeen', 'seaking', 'staryu',
	'starmie', 'mrmime', 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir', 'tauros', 'magikarp', 'gyarados',
	'lapras', 'ditto', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'porygon', 'omanyte', 'omastar', 'kabuto',
	'kabutops', 'aerodactyl', 'snorlax', 'articuno', 'zapdos', 'moltres', 'dratini', 'dragonair', 'dragonite', 'mewtwo',
	'mew',
	//2nd Gen
	'chikorita', 'bayleef', 'meganium', 'cyndaquil', 'quilava', 'typhlosion', 'totodile', 'croconaw', 'feraligatr', 'sentret', 
	'furret', 'hoothoot', 'noctowl', 'ledyba', 'ledian', 'spinarak', 'ariados', 'crobat', 'chinchou', 'lanturn',
	'pichu', 'cleffa', 'igglybuff', 'togepi', 'togetic', 'natu', 'xatu', 'mareep', 'flaaffy', 'ampharos',
	'bellossom', 'marill', 'azumarill', 'sudowoodo', 'politoed', 'hoppip', 'skiploom', 'jumpluff', 'aipom', 'sunkern',
	'sunflora', 'yanma', 'wooper', 'quagsire', 'espeon', 'umbreon', 'murkrow', 'slowking', 'misdreavus', 'unown',
	'wobbuffet', 'girafarig', 'pineco', 'forretress', 'dunsparce', 'gligar', 'steelix', 'snubbull', 'granbull', 'qwilfish',
	'scizor', 'shuckle', 'heracross', 'sneasel', 'teddiursa', 'ursaring', 'slugma', 'magcargo', 'swinub', 'piloswine',
	'corsola', 'remoraid', 'octillery', 'delibird', 'mantine', 'skarmory', 'houndour', 'houndoom', 'kingdra', 'phanpy',
	'donphan', 'porygon2', 'stantler', 'smeargle', 'tyrogue', 'hitmontop', 'smoochum', 'elekid', 'magby', 'miltank',
	'blissey', 'raikou', 'entei', 'suicune', 'larvitar', 'pupitar', 'tyranitar', 'hooh', 'lugia', 'celebi',
	//3rd Gen
	'treecko', 'grovyle', 'sceptile', 'torchic', 'combusken', 'blaziken', 'mudkip', 'marshtomp', 'swampert', 'poochyena',
	'mightyena', 'zigzagoon', 'linoone', 'wurmple', 'silcoon', 'beautifly', 'cascoon', 'dustox', 'lotad', 'lombre',
	'ludicolo', 'seedot', 'nuzleaf', 'shiftry', 'taillow', 'swellow', 'wingull', 'pelipper', 'ralts', 'kirlia',
	'gardevoir', 'surskit', 'masquerain', 'shroomish', 'breloom', 'slakoth', 'vigoroth', 'slaking', 'nincada', 'ninjask',
	'shedinja', 'whismur', 'loudred', 'exploud', 'makuhita', 'hariyama', 'azurill', 'nosepass', 'skitty', 'delcatty',
	'sableye', 'mawile', 'aron', 'lairon', 'aggron', 'meditite', 'medicham', 'electrike', 'manectric', 'plusle',
	'minun', 'volbeat', 'illumise', 'roselia', 'gulpin', 'swalot', 'carvanha', 'sharpedo', 'wailmer', 'wailord',
	'numel', 'camerupt', 'torkoal', 'spinda', 'spoink', 'grumpig', 'trapinch', 'vibrava', 'flygon', 'cacnea',
	'cacturne', 'swablu', 'altaria', 'zangoose', 'seviper', 'lunatone', 'solrock', 'barboach', 'whiscash', 'corphish',
	'crawdaunt', 'baltoy', 'claydol', 'lileep', 'cradily', 'anorith', 'armaldo', 'feebas', 'milotic', 'castform',
	'kecleon', 'shuppet', 'banette', 'duskull', 'dusclops', 'tropius', 'chimecho', 'absol', 'wynaut', 'snorunt',
	'glalie', 'spheal', 'sealeo', 'walrein', 'clamperl', 'huntail', 'gorebyss', 'relicanth', 'luvdisc', 'bagon',
	'shelgon', 'salamence', 'beldum', 'metang', 'metagross', 'regirock', 'regice', 'registeel', 'latias', 'latios',
	'kyogre', 'groudon', 'rayquaza', 'jirachi', 'deoxys', 
	//4th Gen

	//5th Gen

	//6th Gen

	//7th Gen

	//8th Gen
];

// function created to not repeat the pokemon in the randomizer cycle

let removePokemon = ( array, item ) => {
	let i = array.indexOf( item );
    i !== -1 && array.splice( i, 1 );
};

// randomizer of 6 pokemons

let random1 = Math.floor(Math.random()*pokedexArray.length);
let rpoke1 = pokedexArray[random1];
removePokemon(pokedexArray, rpoke1);

let random2 = Math.floor(Math.random()*pokedexArray.length);
let rpoke2 = pokedexArray[random2];
removePokemon(pokedexArray, rpoke2);

let random3 = Math.floor(Math.random()*pokedexArray.length);
let rpoke3 = pokedexArray[random3];
removePokemon(pokedexArray, rpoke3);

let random4 = Math.floor(Math.random()*pokedexArray.length);
let rpoke4 = pokedexArray[random4];
removePokemon(pokedexArray, rpoke4);

let random5 = Math.floor(Math.random()*pokedexArray.length);
let rpoke5 = pokedexArray[random5];
removePokemon(pokedexArray, rpoke5);

let random6 = Math.floor(Math.random()*pokedexArray.length);
let rpoke6 = pokedexArray[random6];
removePokemon(pokedexArray, rpoke6);

// test console log

console.log(rpoke1 + ' ' + rpoke2 + ' ' + rpoke3 + ' ' + rpoke4 + ' ' + rpoke5 + ' ' + rpoke6)


// we give a class to the random pokemon so that they can be seen on the page

var poke1 = document.getElementById(rpoke1);
    poke1.className += "pokedex-view";

let poke2 = document.getElementById(rpoke2);
    poke2.className += "pokedex-view";

let poke3 = document.getElementById(rpoke3);
    poke3.className += "pokedex-view";

let poke4 = document.getElementById(rpoke4);
    poke4.className += "pokedex-view";

let poke5 = document.getElementById(rpoke5);
    poke5.className += "pokedex-view";

let poke6 = document.getElementById(rpoke6);
    poke6.className += "pokedex-view";