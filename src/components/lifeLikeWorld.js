import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from './grid';
import GridState from '../gridState';
import LifeChart from './lifeChart.js';

class LifeLakeWorld extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.gridState = new GridState(this.props.plan, this.props.elements);
    this.state = { gridStateSpace: this.gridState.space };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.turn.bind(this), 400);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  turn() {
    this.gridState.turn();
    this.setState({
      gridStateSpace: this.gridState.space,
    });
  }

  render() {
    return (
      <div>
        <Grid
          width={this.props.plan[0].length} height={this.props.plan.length}
          space={this.state.gridStateSpace} elements={this.props.elements}
        />
        <h2>Energy chart</h2>
        <LifeChart space={this.state.gridStateSpace} />
      </div>
    );
  }
}

LifeLakeWorld.propTypes = {
  plan: PropTypes.array.isRequired,
  elements: PropTypes.object.isRequired,
};

export default LifeLakeWorld;
