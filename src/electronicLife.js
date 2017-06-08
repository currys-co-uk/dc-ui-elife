import * as constants from './config/constants';
import LifelikeWorld from './liveElements/lifeLikeWorld';
import Wall from './worldElements/wall';

import Plant from './liveElements/plant';
import Tiger from './liveElements/tiger';
import PlantEater from './liveElements/plantEater';

export default function electronicLife(DOMObject) {
  const life = new LifelikeWorld(constants.PLAN, {
    '#': Wall,
    O: PlantEater,
    '@': Tiger,
    '*': Plant });
  setInterval(() => {
    life.turn();
    DOMObject.innerHTML = life.renderHTML();
  }, 200);
  return true;
}
