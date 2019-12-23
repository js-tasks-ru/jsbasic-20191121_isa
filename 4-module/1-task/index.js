/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  for (let rec of friends) {
    let li = document.createElement('li');
    let textValue = document.createTextNode(rec.firstName + ', ' + rec.lastName);
    li.appendChild(textValue);
    ul.appendChild(li);
  }
  return ul;
}
