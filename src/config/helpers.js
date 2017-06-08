import * as constants from './constants';

export function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function elementFromChar(legend, ch) {
  if (ch == ' ') {
    return null;
  }
  const element = new legend[ch]();
  element.originChar = ch;
  return element;
}

export function charFromElement(element) {
  if (element == null) {
    return ' ';
  }

  return element.originChar;
}

export function htmlFromElement(element) {
  if (element == null) {
    return '<span class="point"></span>';
  }
  let htmlElement = '<span class="point"></span>';
  switch (element.originChar) {
    case '#' :
      htmlElement = '<span class="point wall"></span>';
      break;
    case '*' :
      htmlElement = '<span class="point plant"></span>';
      break;
    case 'O' :
      htmlElement = '<span class="point critter"></span>';
      break;
    case '@' :
      htmlElement = '<span class="point tiger"></span>';
      break;
    default :
      htmlElement = '<span class="point"></span>';
  }
  return htmlElement;
}

export function dirPlus(dir, n) {
  const index = constants.DIRECTIONNAMES.indexOf(dir);
  return constants.DIRECTIONNAMES[(index + n + 8) % 8];
}

