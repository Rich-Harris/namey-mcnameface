import buble from 'rollup-plugin-buble';
import json from 'rollup-plugin-json';

export default {
	entry: 'src/index.js',
	plugins: [
		json(),
		buble()
	],
	moduleName: 'nameyMcNameface',
	targets: [
		{ dest: 'namey-mcnameface.js', format: 'umd' },
		{ dest: 'namey-mcnameface.es.js', format: 'es' }
	]
};
