const { series, watch, src } = require('gulp');
const cp = require('child_process');
const paths = require('../paths');

const buildJekyll = () => {
    return cp.spawn("bundle", ["exec", "jekyll", "build"],
        {
            stdio: 'inherit',
            cwd: "/Users/vadimmishozev/Desktop/jekyll"
        }
    )
};

const watchJekyll = (reload) => {
    watch([`${paths.html.src}**/*.html`], series(buildJekyll, reload))
};

module.exports = {
    watchJekyll,
    buildJekyll
};