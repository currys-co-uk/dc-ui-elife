import expect from 'expect';
import * as constants from '../../config/constants';
import View from '../../view';
import Tiger from '../tiger/tiger';
import GridState from '../../gridState';

describe('eLife', () => {
  it('act in tiger calls eat when see a plantEater', () => {
    const tiger = new Tiger();
    const testPlan = ['@O', '  '];
    const gridState = new GridState(testPlan, constants.ELEMENTS);
    const testGridCell = GridState.createGridCell(0, 0, '@');
    const act = tiger.act(new View(gridState, testGridCell));

    expect(act.type).toBe('eat');
  });

  it('act in tiger calls move when no plantEater in view & find space', () => {
    const tiger = new Tiger();
    const testPlan = ['@ '];
    const gridState = new GridState(testPlan, constants.ELEMENTS);
    const testGridCell = GridState.createGridCell(0, 0, '@');
    const act = tiger.act(new View(gridState, testGridCell));

    expect(act.type).toBe('move');
  });

  it('act in tiger calls reproduce when energy higher then 120 & find space', () => {
    const tiger = new Tiger();
    const testPlan = ['@ '];
    const gridState = new GridState(testPlan, constants.ELEMENTS);
    const testGridCell = GridState.createGridCell(0, 0, '@');
    tiger.energy = 161;
    const act = tiger.act(new View(gridState, testGridCell));

    expect(act.type).toBe('reproduce');
  });
});
