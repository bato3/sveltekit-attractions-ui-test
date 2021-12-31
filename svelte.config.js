import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import path from 'path';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			resolve: {
                alias: {
                    //'@lib': path.resolve('./src/lib'),
					//'@': path.resolve('./node_modules'),
					'$bs': path.resolve('./node_modules/bootstrap/scss'),
                }
            },
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				},
				postcss: {
					plugins: [
						autoprefixer()
					]
				}
			}
		}
	}
};

export default config;
