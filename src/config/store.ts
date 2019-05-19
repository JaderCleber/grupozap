
// export default () => {
//   if (process.env.NODE_ENV === 'production') {
//     module.exports = require('./store.prod');
//   } else {
//   module.exports = require('./store.dev');
//   }
// }

// @ts-ignore
if(process.env.NODE_ENV === 'production') {
  module.exports = require('./store.prod');
} else {
  module.exports = require('./store.dev');
}