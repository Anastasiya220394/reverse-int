module.exports = function reverse (n) {
  let a = Math.abs(n);
  return Number(a.toString().split('').reverse().join(''));
}
