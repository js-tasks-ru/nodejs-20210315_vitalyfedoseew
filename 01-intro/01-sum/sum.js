function sum(a, b) {
  try {
    if (isNaN(a) || isNaN(b)) {
      throw TypeError()
    }
    return a + b
  } catch (e) {
    return e
  }
}

module.exports = sum;
