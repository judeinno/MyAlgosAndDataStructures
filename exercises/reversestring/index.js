// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const myword = str.split("");
  myword.reverse();
  return myword.join('');

  // Or we can do this
  // return str.split("").reverse()..join('');
}

module.exports = reverse;
