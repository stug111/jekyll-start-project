const { buildSass, watchSass } = require('./sass');
const { buildJekyll, watchJekyll } = require('./jekyll');
const { buildJs, watchJs } = require('./js');

module.exports = {
    buildSass,
    watchSass,
    watchJekyll,
    buildJekyll,
    watchJs,
    buildJs
}