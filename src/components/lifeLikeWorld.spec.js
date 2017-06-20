import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import * as constants from '../config/constants';
import GridState from '../gridState';
import Grid from './grid';

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
});
