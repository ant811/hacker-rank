function isValid(s) {
  const charFrequencies = {};
  s.split('').forEach(letter => {
    charFrequencies[letter] = charFrequencies[letter] + 1 || 1;
  });

  let frequencies = Array.from(new Set(Object.values(charFrequencies)));
  if(frequencies.length === 1) {
    return 'YES';
  }
  
  let min = Math.min(...frequencies);
  let max = Math.max(...frequencies);
  const freqOfFreq = {};
  Object.values(charFrequencies).forEach(value => {
    freqOfFreq[value] = freqOfFreq[value] + 1 || 1;
  });

  if(max - min === 1 && freqOfFreq[max] < 2) {
    return 'YES';
  } else if(frequencies.length === 2 && freqOfFreq[min] === 1){
    return 'YES';
  } else {
    return 'NO';
  }
}

module.exports = { isValid };
