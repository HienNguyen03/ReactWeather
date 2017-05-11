// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   calback('City not found');
// }
//
// getTempCallback('London', function (err, temp) {
//   if (err){
//     console.log('error', err);
//   } else {
//     console.log('Success', temp);
//   }
// });

// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Vaasa').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//     console.log('promise error', err);
// });
//
// function addPromise (a, b) {
//   return new Promise(function (resolve, reject) {
//     if (typeof a === 'number' && typeof b === 'number') {
//       resolve(a+b);
//     } else {
//       reject('A & B must be numbers');
//     }
//   });
// }
//
// addPromise('Hien', 3).then(function (sum) {
//   console.log('success', sum);
// }, function (err) {
//   console.log('error', err);
// });
