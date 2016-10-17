export default function generateRandomWord(length = 6) {
  let consonants = 'bcdfghjklmnprstvwz', // consonants except hard to speak ones
      vowels = 'aeiou', // vowels
      all = consonants + vowels, // all
      text = '',
      chr;

  for (let i = 0; i < length; i++) {
    if (i === 0) {
      chr = pickRandomChar(all);
    } else if (consonants.indexOf(chr) === -1) {
      chr = pickRandomChar(consonants);
    } else {
      chr = pickRandomChar(vowels);
    }
    text += chr;
  }

  return text;
}

function pickRandomChar(pool) {
  let charIndex = Math.floor(Math.random() * pool.length);
  return pool[charIndex];
}