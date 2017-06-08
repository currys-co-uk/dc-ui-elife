import expect from 'expect';
import * as constants from './config/constants';

import LifelikeWorld from './liveElements/lifeLikeWorld';
import Wall from './worldElements/wall';

import Plant from './liveElements/plant';
import Tiger from './liveElements/tiger';
import PlantEater from './liveElements/plantEater';

describe('electronicLife', () => {
  it('is valid world plan', () => {
    expect(constants.PLAN.constructor === Array);
  });

  it('plants grows after time', () => {
    const testPlan =
      ['######',
        '#  * #',
        '#  * #',
        '#    #',
        '#    #',
        '######'];

    const life = new LifelikeWorld(testPlan, {
      '#': Wall,
      O: PlantEater,
      '@': Tiger,
      '*': Plant });

    for (let i = 0; i < 50; i++) {
      life.turn();
    }

    const plantCount = parseInt(life.toString().match(/\*/gi).length);
    expect(plantCount).toBeGreaterThan(2);
  });


  it('plants are eaten by critters', () => {
    const testPlan =
      ['######',
        '#O** #',
        '# O* #',
        '# OO #',
        '#    #',
        '######'];

    const life = new LifelikeWorld(testPlan, {
      '#': Wall,
      O: PlantEater,
      '@': Tiger,
      '*': Plant });

    for (let i = 0; i < 10; i++) {
      life.turn();
    }

    const plantCount = parseInt(life.toString().match(/\*/gi).length);
    expect(plantCount).toBeLessThan(2);
  });

  it('tiger eats critters', () => {
    const testPlan =
      ['######',
        '#  O #',
        '#  @ #',
        '#  O #',
        '#    #',
        '######'];

    const life = new LifelikeWorld(testPlan, {
      '#': Wall,
      O: PlantEater,
      '@': Tiger,
      '*': Plant });

    for (let i = 0; i < 10; i++) {
      life.turn();
    }

    const critterFound = life.toString().indexOf('O');
    expect(critterFound === -1);
  });
});
