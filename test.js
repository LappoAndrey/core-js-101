function timeSpanToString(startDate, endDate) {
  const rez = new Date(endDate - startDate);
  console.log(startDate);
  console.log(endDate);
  console.log(rez);
  console.log(rez.getHours());
  return `${rez.getHours()}:${rez.getMinutes()}:${rez.getSeconds()}:${rez.getMilliseconds()}`;
}

timeSpanToString('2000, 1, 1, 10, 0, 0', '2000, 1, 1, 15, 20, 10, 453');
