import * as helpers from './config/helpers';
import * as constants from './config/constants';
import View from './view';

class GridState {
  constructor(plan, elements) {
    this.plan = plan;
    this.elements = elements;
    this.width = plan[0].length;
    this.height = plan.length;
    this.space = [];
    this.plan.forEach((line, y) => {
      for (let x = 0; x < line.length; x++) {
        const newGridCell = GridState.createGridCell(x, y,
            helpers.elementFromChar(this.elements, line[x]));
        this.space.push(newGridCell);
      }
    });
  }

  static createGridCell(x, y, value = ' ') {
    return { x, y, value };
  }

  doForEach(f, context) {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const value = this.space[x + y * this.width].value;
        if (value != null) {
          f.call(context, value, GridState.createGridCell(x, y, value));
        }
      }
    }
  }

  get(gridCell) {
    return this.space[gridCell.x + this.width * gridCell.y];
  }

  set(gridCell, value) {
    this.space[gridCell.x + this.width * gridCell.y].value = value;
  }


  isInside(gridCell) {
    return gridCell.x >= 0 && gridCell.x < this.width &&
            gridCell.y >= 0 && gridCell.y < this.height;
  }


  turn() {
    const acted = [];
    this.doForEach(function (liveElement, gridCell) {
      if (liveElement.act && acted.indexOf(liveElement) === -1) {
        acted.push(liveElement);
        this.letAct(gridCell);
      }
    }, this);
  }

  letAct(gridCell) {
    const newView = new View(this, gridCell);
    const action = gridCell.value.act(newView);
    if (typeof action !== 'undefined') {
      const type = action.type;
      const handled = this[type](gridCell, action, newView);
      if (!handled) {
        gridCell.value.energy -= 0.2;
        if (gridCell.value.energy <= 0) {
          this.set(gridCell, null);
        }
      }
    }
  }

  checkDestination(action, gridCell, view) {
    if (constants.DIRECTIONS.hasOwnProperty(action.direction)) {
      const dest = view.plus(constants.DIRECTIONS[action.direction]);
      if (this.isInside(dest)) {
        return dest;
      }
    }
  }

  move(gridCell, action, newView) {
    const dest = this.checkDestination(action, gridCell, newView);
    if (dest == null || gridCell.value.energy <= 1 || this.get(dest.value) != null) {
      return false;
    }
    gridCell.value.energy -= 1;

    this.set(gridCell, null);
    this.set(dest, gridCell.value);
    return true;
  }

  grow(gridCell) {
    gridCell.value.energy += 0.5;
    return true;
  }

  eat(gridCell, action, newView) {
    const dest = this.checkDestination(action, gridCell, newView);
    const atDest = dest != null && this.get(dest);
    if (!atDest || atDest.value.energy == null) { return false; }
    gridCell.value.energy += atDest.value.energy;
    this.set(gridCell, null);
    this.set(dest, gridCell.value);
    return true;
  }

  reproduce(gridCell, action, newView) {
    const baby = helpers.elementFromChar(this.elements, gridCell.value.originChar);
    const dest = this.checkDestination(action, gridCell, newView);

    if (dest == null || gridCell.value.energy <= 2 * baby.energy ||
        (this.get(dest)).value != null) {
      return false;
    }
    gridCell.value.energy -= 2 * baby.energy;

    this.set(dest, baby);
    return true;
  }
}

export default GridState;
