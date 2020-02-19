// HackerRank Level of Difficulty - Medium

function timeInWords(h, m) {
  const hour = [undefined, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  const minutes = [undefined, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', undefined, 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine'];
  let hourResult = hour[h];
  let minutesResult;  
  if (m === 0) {
    minutesResult = 'o\' clock';
    return `${hourResult} ${minutesResult}`;
  } else if (m === 30) {
    minutesResult = 'half past';
    return `${minutesResult} ${hourResult}`
  } else {
    if (m < 30) {
      if (m === 15) {
        minutesResult = 'quarter past';
      } else if (m === 1) {
        minutesResult = `${minutes[m]} minute past`;
      } else {
        minutesResult = `${minutes[m]} minutes past`;
      }
      return `${minutesResult} ${hourResult}`;
    } else {
      if (h === 12) {
        hourResult = hour[1];
      } else {
        hourResult = hour[h + 1];
      }
      if(m === 45) {
        minutesResult = 'quarter to';
      } else {
        minutesResult = `${minutes[60-m]} minutes to`
      }
      return `${minutesResult} ${hourResult}`
    }
  }
}

module.exports = { timeInWords };
