import * as helpers from '../config/helpers';

function WallFollower() {
  this.dir = 's';
}

WallFollower.prototype.act = function (view) {
  let start = this.dir;
  if (view.look(helpers.dirPlus(this.dir, -3)) != ' ') { start = this.dir = helpers.dirPlus(this.dir, -2); }
  while (view.look(this.dir) != ' ') {
    this.dir = helpers.dirPlus(this.dir, 1);
    if (this.dir == start) break;
  }
  return {
    type: 'move',
    direction: this.dir,
  };
};

export default WallFollower;
