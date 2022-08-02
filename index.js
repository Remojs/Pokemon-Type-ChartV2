
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
	'turtwig', 'grotle', 'torterra', 'chimchar', 'monferno', 'infernape', 'piplup', 'prinplup', 'empoleon', 'starly',
	'staraptor', 'staravia', 'bidoof', 'bibarel', 'kricketot', 'kricketune', 'shinx', 'luxio', 'luxray', 'budew',
	'roserade', 'cranidos', 'rampardos', 'shelgon', 'bastiodon', 'burmy', 'wormadam', 'mothim', 'combee', 'vespiqueen',
	'pachirisu', 'buizel', 'floatzel', 'cherubi', 'cherrim', 'shellos', 'gastrodon', 'ambipom', 'drifloon', 'drifblim',
	'buneary', 'lopunny', 'mismagius', 'honchkrow', 'glameow', 'purugly', 'chingling', 'stunky', 'skuntank', 'bronzor',
	'bronzong', 'bonsly', 'mimejr', 'happiny', 'chatot', 'spiritomb', 'gible', 'gabite', 'garchomp', 'munchlax',
	'riolu', 'lucario', 'hippopotas', 'hippowdon', 'skorupi', 'drapion', 'croagunk', 'toxicroak', 'carnivine', 'finneon',
	'lumineon', 'mantine', 'snover', 'abomasnow', 'weavile', 'magnezone', 'lickilicky', 'rhyperior', 'tangrowth', 'electrivire',
	'magmortar', 'togekiss', 'yanmega', 'leafeon', 'glaceon', 'gliscor', 'mamoswine', 'porygonz', 'gallade', 'probopass',
	'dusknoir', 'froslass', 'rotom', 'uxie', 'mesprit', 'azelf', 'dialga', 'palkia', 'heatran', 'regigigas',
	'giratina', 'cresselia', 'phione', 'manaphy', 'darkrai', 'shaymin', 'arceus', 'victini',  
	//5th Gen
	'snivy', 'servine', 'serperior', 'tepig', 'pignite', 'emboar', 'oshawott', 'dewott', 'samurott', 'patrat',
	'watchog', 'lillipup', 'herdier', 'stoutland', 'purrloin', 'liepard', 'pansage', 'simisage', 'pansear', 'simisear',
	'panpour', 'simipour', 'munna', 'musharna', 'pidove', 'tranquill', 'unfezant', 'blitzle', 'zebstrika', 'roggenrola',
	'boldore', 'gigalith', 'woobat', 'swoobat', 'drilbur', 'excadrill', 'audino', 'timburr', 'gurdurr', 'conkeldurr',
	'tympole', 'palpitoad', 'seismitoad', 'throh', 'sawk', 'sewaddle', 'swadlon', 'leavanny', 'venipede', 'whirlipede',
	'scolipede', 'cottonee', 'whimsicott', 'petilil', 'lilligant', 'basculin', 'sandile', 'krokorok', 'krookodile', 'darumaka',
	'darmanitan', 'maractus', 'dwebble', 'crustle', 'scraggy', 'scrafty', 'sigilyph', 'yamask', 'cofagrigus', 'tirtouga',
	'carracosta', 'archen', 'archeops', 'trubbish', 'garbodor', 'zorua', 'zoroark', 'minccino', 'cinccino', 'gothita',
	'gothorita', 'gothitelle', 'solosis', 'duosion', 'reuniclus', 'ducklett', 'swanna', 'vanillite', 'vanillish', 'vanilluxe',
	'deerling', 'sawsbuck', 'emolga', 'karrablast', 'escavalier', 'foongus', 'amoonguss', 'frillish', 'jellicent', 'alomomola',
	'joltik', 'galvantula', 'ferroseed', 'ferrothorn', 'klink', 'klang', 'klinklang', 'tynamo', 'eelektrik', 'eelektross',
	'elgyem', 'beheeyem', 'litwick', 'lampent', 'chandelure', 'axew', 'fraxure', 'haxorus', 'cubchoo', 'beartic',
	'cryogonal', 'shelmet', 'accelgor', 'stunfisk', 'mienfoo', 'mienshao', 'druddigon', 'golett', 'golurk', 'pawniard',
	'bisharp', 'bouffalant', 'rufflet', 'braviary', 'vullaby', 'mandibuzz', 'heatmor', 'larvesta', 'volcarona', 'deino',
	'zweilous', 'hydreigon', 'durant', 'cobalion', 'terrakion', 'virizion', 'tornadus', 'thundurus', 'reshiram', 'zekrom',
	'landorus', 'kyurem', 'keldeo', 'meloetta', 'genesect',
	//6th Gen
	'chespin', 'quilladin', 'chesnaught', 'fennekin', 'braixen', 'delphox', 'froakie', 'frogadier', 'greninja', 'bunnelby',
	'diggersby', 'fletchling', 'fletchinder', 'talonflame', 'scatterbug', 'spewpa', 'vivillon', 'litleo', 'pyroar', 'flabebe',
	'floette', 'florges', 'skiddo', 'gogoat', 'pancham', 'pangoro', 'furfrou', 'espurr', 'meowstic', 'honedge',
	'doublade', 'aegislash', 'spritzee', 'aromatisse', 'swirlix', 'slurpuff', 'inkay', 'malamar', 'binacle', 'barbaracle',
	'skrelp', 'dragalge', 'clauncher', 'clawitzer', 'helilisk', 'helioptile', 'tyrunt', 'tyrantrum', 'amaura', 'aurorus',
	'sylveon', 'hawlucha', 'dedenne', 'carbink', 'goomy', 'sliggoo', 'goodra', 'klefki', 'phantump', 'trevenant',
	'pumkaboo', 'gourgeist', 'bergmite', 'avalugg', 'noibat', 'noivern', 'xerneas', 'yveltal', 'zygarde', 'diancie',
	'hoopa', 'volcanion',
	//7th Gen
	'rowlet', 'dartrix', 'decidueye', 'litten', 'torracat', 'incineroar', 'popplio', 'brionne', 'primarina', 'pikipek',
	'trumbeak', 'toucannon', 'yungoos', 'gumshoos', 'grubbin', 'charjabug', 'vikabolt', 'crabrawler', 'crabominable', 'oricorio',
	'cutiefly', 'ribombee', 'rockruff', 'lycanrock', 'wishiwashi', 'mareanie', 'toxapek', 'mudbray', 'mudsdale', 'dewpider',
	'araquanid', 'fomantis', 'lurantis', 'morelull', 'shiinotic', 'salandit', 'salazzle', 'stufful', 'bewear', 'bounsweet',
	'steenee', 'tsareena', 'comfey', 'oranguru', 'passimian', 'wimpod', 'golisopod', 'sandygast', 'palossand', 'pyukumuku',
	'codigocero', 'silvally', 'minior', 'komala', 'turtonator', 'togedemaru', 'mimikyu', 'bruxish', 'drampa', 'dhelmise',
	'jangmoo', 'hakamoo', 'kommoo', 'tapukoko', 'tapulele', 'tapubulu', 'tapufini', 'cosmog', 'cosmoem', 'solgaleo',
	'lunala', 'nihilego', 'buzzwole', 'pheromosa', 'xurkitree', 'celesteela', 'kartana', 'guzzlord', 'necrozma', 'magearna',
	'marshadow', 'poipole', 'naganadel', 'stakataka', 'blacephalon', 'zeraora', 'meltan', 'melmetal',
	//8th Gen
	'grookey', 'thwackey', 'rillaboom', 'scorbunny', 'raboot', 'cinderace', 'sobble', 'drizzile', 'inteleon', 'skwovet',
	'greedent', 'rookidee', 'corvisquire', 'corviknight', 'blipbug', 'dottler', 'orbeetle', 'nickit', 'thievul', 'gossifleur',
	'eldegoss', 'wooloo', 'dubwool', 'chewtle', 'drednaw', 'yamper', 'boltund', 'rolycoly', 'carkol', 'coalossal',
	'applin', 'flapple', 'appletun', 'silicobra', 'sandaconda', 'cramorant', 'arrokuda', 'barraskewda', 'toxel', 'toxtricity',
	'sizzlipede', 'centiskorch', 'clobbopus', 'gapploct', 'sinistea', 'polteageist', 'hatenna', 'hattrem', 'hatterene', 'impidimp',
	'morgrem', 'grimmsnarl', 'obstagoon', 'perrserker', 'cursola', 'sirfetchd', 'mrrime', 'runerigus', 'milcery', 'alcremie',
	'falinks', 'pincurchin', 'snom', 'frossmoth', 'stonjourner', 'eiscue', 'indeedee', 'morpeko', 'cufant', 'copperajah',
	'dracozolt', 'arctozolt', 'dracovish', 'arctovish', 'duraludon', 'dreepy', 'drakloak', 'dragapult', 'zacian', 'zamazenta',
	'eternatus', 'kubfu', 'urshifu', 'zarude', 'regieleki', 'regidrago', 'glastrier', 'spectrier', 'calyrex', 'wyrdeer',
	'kleavor', 'ursaluna', 'basculegion', 'sneasler', 'overqwil', 'enamorus'
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

let poke1 = document.getElementById(rpoke1);
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

// Reload Random Pokedex

let refresh = document.getElementById('recargar');
refresh.addEventListener('click', _ => {
            location.reload();
})

