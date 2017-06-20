import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as helpers from '../config/helpers';

class GridCell extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.x = props.x;
    this.y = props.y;
  }

  render() {
    return (<td
      className={helpers.getClassFromElement(this.props.space[this.x + this.y * this.props.width])}
      data-y={this.y} data-x={this.x}
    >&nbsp;</td>);
  }
}

GridCell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  space: PropTypes.array.isRequired,
};

export default GridCell;
