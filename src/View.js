import * as constants from './config/constants';
import * as helpers from './config/helpers';
import GridState from './GridState';


class View {
  constructor(gridState, gridCell) {
    this.gridState = gridState;
    this.gridCell = gridCell;
  }

  plus(other) {
    return GridState.createGridCell(this.gridCell.x + other.x,
        this.gridCell.y + other.y);
  }

  look(dir) {
    const target = this.plus(constants.DIRECTIONS[dir]);
    if (this.gridState.isInside(target)) {
      const element = this.gridState.get(target);
      return helpers.charFromElement(element.value);
    }
    return 'x';
  }

  find(ch) {
    const found = this.findAll(ch);
    if (found.length == 0) return null;
    return helpers.randomElement(found);
  }

  findAll(ch) {
    const found = [];
    for (const dir in constants.DIRECTIONS) {
      if (this.look(dir) == ch) {
        found.push(dir);
      }
    }
    return found;
  }
}


export default View;
