import expect from 'expect';
import * as constants from '../../config/constants';
import View from '../../view';
import PlantEater from './plantEater';
import GridState from '../../gridState';


describe('eLife', () => {
  it('act in plantEater calls reproduce when energy higher then 60', () => {
    const testPlantEater = new PlantEater();
    const testPlan = ['O '];
    const gridState = new GridState(testPlan, constants.ELEMENTS);
    const testGridCell = GridState.createGridCell(0, 0, 'O');

    testPlantEater.energy = 61;
    const act = testPlantEater.act(new View(gridState, testGridCell));

    expect(act.type).toBe('reproduce');
  });

  it('act in plantEater calls eat when see min. 2 plants', () => {
    const testPlantEater = new PlantEater();
    const testPlan = ['O*', '* '];
    const gridState = new GridState(testPlan, constants.ELEMENTS);
    const testGridCell = GridState.createGridCell(0, 0, 'O');
    const act = testPlantEater.act(new View(gridState, testGridCell));

    expect(act.type).toBe('eat');
  });

  it('act in plantEater calls move when no plant in view & find space', () => {
    const testPlantEater = new PlantEater();
    const testPlan = ['O '];
    const gridState = new GridState(testPlan, constants.ELEMENTS);
    const testGridCell = GridState.createGridCell(0, 0, 'O');
    testPlantEater.energy = 30;
    const act = testPlantEater.act(new View(gridState, testGridCell));

    expect(act.type).toBe('move');
  });
});
