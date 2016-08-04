import animals from './data/animals.json';
import adjectives from './data/adjectives.json';

function pickRandom ( array ) {
	return array[ ~~( Math.random() * array.length ) ];
}

export default function nameyMcNameface () {
	return `${pickRandom(adjectives)}-${pickRandom(animals)}`;
};
