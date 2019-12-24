const { task, series, parallel } = require('gulp');
const server = require('browser-sync');
const config = require('./paths');

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

task('start', series(serve));

task('build');