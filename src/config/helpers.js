export function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function charFromElement(element) {
  if (element === null) {
    return ' ';
  }

  return element.originChar;
}

export function elementFromChar(legend, ch) {
  if (ch === ' ') {
    return null;
  }
  const element = new legend[ch]();
  element.originChar = ch;
  return element;
}

export function getClassFromElement(element) {
  let htmlClass = '';

  if (element === null || element.value === null) {
    return htmlClass;
  }

  switch (element.value.originChar) {
    case '#' :
      htmlClass = 'wall';
      break;
    case '*' :
      htmlClass = 'plant';
      break;
    case 'O' :
      htmlClass = 'plantEater';
      break;
    case '@' :
      htmlClass = 'tiger';
      break;
    default :
      htmlClass = '';

  }
  return htmlClass;
}
