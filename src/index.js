import animals from './data/animals.json';
import adjectives from './data/adjectives.json';

function pickRandom ( array ) {
	return array[ ~~( Math.random() * array.length ) ];
}

export default function nameyMcNameface (mcMode = false) {
	let animal = pickRandom(animals);
	if(mcMode) {
		animal = 'mc' + animal.substr(0,1).toUpperCase() + animal.substr(1);
	}

	return `${pickRandom(adjectives)}-${animal}`;
};
