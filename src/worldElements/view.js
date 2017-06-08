import * as constants from '../config/constants';
import * as helpers from '../config/helpers';

function View(world, vector) {
  this.world = world;
  this.vector = vector;
}

/*
* figures out the coordinates that we are trying to look at and, if they are inside the grid,
* finds the character corresponding to the element that sits there.
* */

View.prototype.look = function (dir) {
  const target = this.vector.plus(constants.DIRECTIONS[dir]);
  if (this.world.grid.isInside(target)) {
    return helpers.charFromElement(this.world.grid.get(target));
  }
  return 'x';
};

/*
 * returns a direction in which the character can be found
 * next to the critter or returns null if no such direction exists
* */

View.prototype.find = function (ch) {
  const found = this.findAll(ch);
  if (found.length == 0) return null;
  return helpers.randomElement(found);
};

/*
* returns an array containing all directions with that character
* */

View.prototype.findAll = function (ch) {
  const found = [];
  for (const dir in constants.DIRECTIONS) {
    if (this.look(dir) == ch) { found.push(dir); }
  }
  return found;
};

export default View;
