import * as helpers from '../config/helpers';
import * as constants from '../config/constants';
import Vector from './vector';
import Grid from './grid';
import Tiger from '../liveElements/tiger';
import View from './view';

function World(map, legend) {
  const grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;

  map.forEach((line, y) => {
    for (let x = 0; x < line.length; x++) {
      grid.set(new Vector(x, y), helpers.elementFromChar(legend, line[x]));
    }
  });
}

/*
* updates the world to reflect critters actions
* criter = direction, origin char
* vector = vector dimensions
* */

World.prototype.turn = function () {
  const acted = [];
  this.grid.forEach(function (critter, vector) {
    if (critter.act && acted.indexOf(critter) == -1) {
      acted.push(critter);
      this.letAct(critter, vector);
    }
  }, this);
};

/*
* contains the actual logic that allows the critters to move
* action = type, direction
* criter = direction, origin char
* */

World.prototype.letAct = function (critter, vector) {
  const action = critter.act(new View(this, vector));

  if (action && action.type == 'move') {
    const dest = this.checkDestination(action, vector);
    if (dest && this.grid.get(dest) == null) {
      this.grid.set(vector, null);
      this.grid.set(dest, critter);
    }
  }
};

/*
* provides a valid destination
* dest = destination vector
* */

World.prototype.checkDestination = function (action, vector) {
  if (constants.DIRECTIONS.hasOwnProperty(action.direction)) {
    const dest = vector.plus(constants.DIRECTIONS[action.direction]);
    if (this.grid.isInside(dest)) { return dest; }
  }
};

World.prototype.renderHTML = function () {
  let output = '';
  for (let y = 0; y < this.grid.height; y++) {
    for (let x = 0; x < this.grid.width; x++) {
      const element = this.grid.get(new Vector(x, y));
      output += helpers.htmlFromElement(element);
    }
    output += '<br /><div style="clear:both"></div>';
  }
  return output;
};

World.prototype.toString = function () {
  let output = '';
  for (let y = 0; y < this.grid.height; y++) {
    for (let x = 0; x < this.grid.width; x++) {
      const element = this.grid.get(new Vector(x, y));
      output += helpers.charFromElement(element);
    }
    output += '\n';
  }
  return output;
};



export default World;
