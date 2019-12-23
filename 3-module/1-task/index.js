/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let arrayFilter = data.filter(item => item.age <= age).map(item2 => item2.name + ', ' + item2.balance);
  if (arrayFilter.length == 0) {
    return arrayFilter;
  }
  return arrayFilter.join('\n');
}
