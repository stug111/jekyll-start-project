const src = '../src/'
const base = '../_site/'
// const dest = "../src/assets/";
const dest = '../_site/'

module.exports = {
  global: {
    src,
    base,
  },
  html: {
    src: `${src}`,
    dest: `${dest}`,
  },
  sass: {
    src: `${src}sass/`,
    dest: `${dest}css/`,
  },
  js: {
    src: `${src}js/`,
    dest: `${dest}js/`,
  },
  img: {
    src: `${src}img/`,
    dest: `${dest}img/`,
  },
  fonts: {
    src: `${src}fonts/`,
    dest: `${dest}fonts/`,
  },
}
