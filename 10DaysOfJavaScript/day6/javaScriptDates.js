function getDayName(dateString) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let date = new Date(dateString);
  let day = days[date.getDay()];
  return day;
}

console.log(getDayName('10/11/2009'));
console.log(getDayName('11/10/2010'));
console.log(getDayName('02/18/2020'));

/* Output

Sunday
Wednesday
Tuesday

*/