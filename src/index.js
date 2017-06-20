import React from 'react';
import ReactDOM from 'react-dom';
import * as constants from './config/constants';
import LifeLakeWorld from './components/lifeLikeWorld';


ReactDOM.render(
  <div>
    <LifeLakeWorld elements={constants.ELEMENTS} plan={constants.PLAN} />
  </div>,
    document.getElementById('app'),

);
