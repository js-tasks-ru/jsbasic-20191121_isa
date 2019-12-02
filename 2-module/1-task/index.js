/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  if (obj === null || obj === undefined) { 
    return null;
  }
  return JSON.parse(JSON.stringify(obj));
}