import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import * as constants from './config/constants';
import Plant from './Plant';
import View from './View';
import Tiger from './Tiger';
import PlantEater from './PlantEater';
import GridState from './GridState';
import Grid from './components/Grid';


describe('eLife', () => {
  it('table was created', () => {
    const wrapperGridState = new GridState(constants.PLAN, constants.ELEMENTS);
    const GridWrapper = mount(
      <Grid
        width={wrapperGridState.width} space={wrapperGridState.space}
        height={wrapperGridState.height} elements={constants.ELEMENTS}
      />,
      );
    expect(GridWrapper.find('table').length).toBe(1);
  });

  it('is valid world plan', () => {
    expect(constants.PLAN.constructor === Array);
  });

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
