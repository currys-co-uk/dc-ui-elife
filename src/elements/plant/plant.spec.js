import expect from 'expect';
import * as constants from '../../config/constants';
import Plant from './plant';
import View from '../../view';
import GridState from '../../gridState';


describe('eLife', () => {
  it('act in plant calls grow when energy less then 20', () => {
    const testPlant = new Plant();
    const testPlan = ['*'];
    const gridState = new GridState(testPlan, constants.ELEMENTS);
    const testGridCell = GridState.createGridCell(0, 0, '*');
    testPlant.energy = 19;
    const act = testPlant.act(new View(gridState, testGridCell));

    expect(act.type).toBe('grow');
  });

  it('act in plant calls reproduce when energy higher then 15 find space', () => {
    const testPlant = new Plant();
    const testPlan = ['* '];
    const gridState = new GridState(testPlan, constants.ELEMENTS);
    const testGridCell = GridState.createGridCell(0, 0, '*');
    testPlant.energy = 16;
    const act = testPlant.act(new View(gridState, testGridCell));

    expect(act.type).toBe('reproduce');
  });
});
