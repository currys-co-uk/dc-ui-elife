import Wall from '../Wall';
import Plant from '../Plant';
import Tiger from '../Tiger';
import PlantEater from '../PlantEater';
import GridState from '../GridState';

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
    '#   *                     #               O    ##',
    '#   *    ##      O O                ****       *#',
    '#       ##*                     ###    ###     *#',
    '# O    ##***  *         ****                  **#',
    '#* **  #  *  ***      ###   ###            O  **#',
    '#* **  #     *              #   *             **#',
    '#     ##            #   O   #  ***         ######',
    '#*   O       @      #       #   *       O  #    #',
    '#*                   #  ######               ** #',
    '###         ****          ***      @         ** #',
    '#       O           O                   O       #',
    '#   *     ##  ##      ##      O O   ###      *  #',
    '#   **         #          O *       #####  O    #',
    '##  **        #  #   *** ***        ###      ** #',
    '#*                   #  ######               ** #',
    '###         ****          ***      @         ** #',
    '#       O                               O       #',
    '#   *     ##      ##  ##      O O   #        *  #',
    '#   **         #          O *       #   #  O    #',
    '##  **        #  #   *** ***        # #      ** #',
    '###               #   *****           O     ****#',
    '#################################################'];
