import * as constants from '../config/constants';
import * as helpers from '../config/helpers';

function BouncingCritter() {
  this.direction = helpers.randomElement(constants.DIRECTIONNAMES);
}

/*
* view = world, vector
* */
BouncingCritter.prototype.act = function (view) {
  if (view.look(this.direction) != ' ') {
    this.direction = view.find(' ') || 's';
  }
  return {
    type: 'move',
    direction: this.direction,
  };
};

export default BouncingCritter;
