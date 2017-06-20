class PlantEater {
  constructor() {
    this.energy = 25;
  }

  act(view) {
    const space = view.find(' ');

    if (this.energy > 60 && space) {
      return {
        type: 'reproduce',
        direction: space,
      };
    }
    const plant = view.find('*');
    const plantAll = view.findAll('*');

    if (plant && (plantAll.length > 1)) {
      return {
        type: 'eat',
        direction: plant,
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

export default PlantEater;
