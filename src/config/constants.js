import Wall from '../elements/wall/wall';
import Plant from '../elements/plant/plant';
import Tiger from '../elements/tiger/tiger';
import PlantEater from '../elements/plantEater/plantEater';
import GridState from '../gridState';

export const DIRECTIONS = {
  n: GridState.createGridCell(0, -1),
  ne: GridState.createGridCell(1, -1),
  e: GridState.createGridCell(1, 0),
  se: GridState.createGridCell(1, 1),
  s: GridState.createGridCell(0, 1),
  sw: GridState.createGridCell(-1, 1),
  w: GridState.createGridCell(-1, 0),
  nw: GridState.createGridCell(-1, -1),
};

export const ELEMENTS = {
  '#': Wall,
  O: PlantEater,
  '@': Tiger,
  '*': Plant,
};


export const PLAN =
  ['#################################################',
    '#      O        ####        ****              ###',
    '#   *                                     O    ##',
    '#   *    ##      O O                ****       *#',
    '#       ##*                     ###    ###     *#',
    '# O    ##***  *         ****                  **#',
    '#* **  #  *  ***      ###   ###            O  **#',
    '#* **  #     *              #   *             **#',
    '#     ##            #   O   #  ***         ######',
    '#*   O       @      #       #   *       O  #    #',
    '#*                  #   ######               ** #',
    '###         ****          ***      @         ** #',
    '#       O           O                   O       #',
    '#   *     ######      ##      O O   ###      *  #',
    '#   **                    O *       #####  O    #',
    '##  **        ####   *** ***        ###      ** #',
    '#*                      ######               ** #',
    '###         ****          ***      @         ** #',
    '#       O                               O       #',
    '#   *     ##      ##  ##      O O   #        *  #',
    '#   **                    O *       #      O    #',
    '##  **        ####   *** ***        #        ** #',
    '###                   *****           O     ****#',
    '#################################################'];
