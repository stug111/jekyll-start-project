const { buildSass, watchSass } = require('./sass');
const { buildJekyll, watchJekyll } = require('./jekyll');

module.exports = {
    buildSass,
    watchSass,
    watchJekyll,
    buildJekyll
}