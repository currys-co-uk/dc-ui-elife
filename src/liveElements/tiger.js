function Tiger() {
  this.energy = 120;
}

Tiger.prototype.act = function (view) {
  const space = view.find(' ');
  if (this.energy > 240 && space) {
    return {
      type: 'reproduce',
      direction: space,
    };
  }
  const critter = view.find('O');

  if (critter) {
    return {
      type: 'eat',
      direction: critter,
    };
  }

  if (space) {
    return {
      type: 'move',
      direction: space,
    };
  }
};

export default Tiger;
