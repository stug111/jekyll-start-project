const { series, watch, src } = require('gulp')
const cp = require('child_process')
const paths = require('../paths')
const path = require('path')

const buildJekyll = () => {
  return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {
    stdio: 'inherit',
    cwd: path.resolve(__dirname + '../../../'),
  })
}

const watchJekyll = reload => {
  watch([`${paths.html.src}**/*.html`], series(buildJekyll, reload))
}

module.exports = {
  watchJekyll,
  buildJekyll,
}
