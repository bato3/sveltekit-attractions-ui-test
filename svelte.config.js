//import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';
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
                prependData: '@use "src/variables.scss" as *;',

            }
        })
    ],

    kit: {
        adapter: adapter({
            /*
            // default options are shown
            out: 'build',
            precompress: false,
            env: {
                host: 'HOST',
                port: 'PORT'
            }
            */
        }),

        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',

        vite: {
            resolve: {
                alias: {
                    //'@lib': path.resolve('./src/lib'),
                    //'@': path.resolve('./node_modules'),
                    '$bs': path.resolve('./node_modules/bootstrap'),
                }
            },
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: '@use "src/variables.scss" as *;'
                    },
                        includePaths: ['./node_modules']
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
