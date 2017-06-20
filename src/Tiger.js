class Tiger {
  constructor() {
    this.energy = 60;
  }

  act(view) {
    const space = view.find(' ');
    if (this.energy > 120 && space) {
      return {
        type: 'reproduce',
        direction: space,
      };
    }
    const plantEater = view.find('O');

    if (plantEater) {
      return {
        type: 'eat',
        direction: plantEater,
      };
    }

    if (space) {
      return {
        type: 'move',
        direction: space,
      };
    }
  }
}

export default Tiger;
