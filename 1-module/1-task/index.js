/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  m = parseInt(m);
  n = parseInt(n);
  if (!isFinite(m) || !isFinite(n) || n < 1) {
    return null;
  }
  return Math.pow(m, n);
  
}