var animals = require( './data/animals.json' );
var adjectives = require( './data/adjectives.json' );

function pickRandom ( array ) {
	return array[ ~~( Math.random() * array.length ) ];
}

module.exports = function () {
	return `${pickRandom(adjectives)}-${pickRandom(animals)}`;
};
