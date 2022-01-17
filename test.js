function toNumber(value, def) {
  if (typeof Number(value) === 'number' || value instanceof Number) {
    return Number(value);
  }
  return def;
}
console.log(toNumber('test', 0));
