import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridRow from './gridRow';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const rows = [];
    for (let y = 0; y < this.props.height; y++) {
      rows.push(<GridRow
        width={this.props.width}
        space={this.props.space} key={y} x={this.props.width} y={y}
      />);
    }

    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

Grid.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  space: PropTypes.array.isRequired,
};

export default Grid;
