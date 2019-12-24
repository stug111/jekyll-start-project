const { task, series, parallel } = require('gulp');
const server = require('browser-sync');
const { buildSass, watchSass } = require('./tasks');
const config = require('./paths');

const main = series(
    buildSass
)

const serve = done => {
    server.init({
        server: config.global.dest,
        port: 4000,
        open: false,
        cors: true,
        ui: false
    });
    done();
};

const reload = done => {
    server.reload();
    done();
};

const watch = () => {
    watchSass(reload)
};

task('start', series(serve, watch));

task('build', series(main));