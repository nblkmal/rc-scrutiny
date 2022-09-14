const mix = require('laravel-mix');
const path = require("path");

// Rezolve Ziggy
mix.alias({
    ziggy: path.resolve("vendor/tightenco/ziggy/dist/vue"),
});

mix.styles([
    'node_modules/solar-ui/packages/core/lib/style.css',
    'node_modules/solar-ui/packages/server/lib/style.css',
    'node_modules/solar-ui/packages/webapp/lib/style.css',
    'node_modules/solar-ui/packages/settings/lib/style.css'
], 'public/assets/css/app.css')

/** Include img assets from `solar-ui/core` */
mix.copyDirectory('node_modules/solar-ui/packages/core/src/img', path.join(__dirname, 'public/assets/img')) 

// Build files
mix.js("resources/js/app.js", "public/js")
    .vue({ version: 3 })
    .webpackConfig({
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "resources/js"),
            },
        },
    })
    .extract()
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
    .version();