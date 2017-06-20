import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridCell from './gridCell';

class GridRow extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const cells = [];
    for (let x = 0; x < this.props.x; x++) {
      cells.push(<GridCell
        width={this.props.width}
        space={this.props.space} key={x} x={x} y={this.props.y}
      />);
    }

    return (
      <tr>
        {cells}
      </tr>
    );
  }
}

GridRow.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  space: PropTypes.array.isRequired,
};

export default GridRow;
