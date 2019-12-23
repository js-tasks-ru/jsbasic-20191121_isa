/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arrayStr = str.split(',');
  str = arrayStr.join(' ');
  arrayStr = str.split(' ');
  let arraySort = arrayStr.filter(x => !isNaN(parseFloat(x)))
                          .sort((x, y) => y - x);
  return { min: parseFloat(arraySort[arraySort.length - 1]), max: parseFloat(arraySort[0]) };
}