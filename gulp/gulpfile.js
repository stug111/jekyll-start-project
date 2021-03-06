const { task, series, parallel } = require('gulp');
const server = require('browser-sync');
const { buildSass, watchSass, buildJekyll, watchJekyll, watchJs, buildJs } = require('./tasks');
const config = require('./paths');

const main = series(
    parallel(buildJekyll, buildSass, buildJs)
)

const serve = done => {
    server.init({
        server: config.global.base,
        port: 3000,
        open: true,
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
    watchSass(reload);
    watchJs(reload);
    watchJekyll(reload);
};

task('start', series(main, serve, watch));

task('build', series(main));