import React, { Component } from 'react';
import { VictoryPie } from 'victory';
import Plant from '../Plant';
import Tiger from '../Tiger';
import PlantEater from '../PlantEater';

class LifeChart extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    let plantEnergy = 0,
      plantEaterEnergy = 0,
      tigerEnergy = 0;
    for (let i = 0; i < this.props.space.length; i++) {
      if (this.props.space[i].value instanceof Plant) {
        plantEnergy += this.props.space[i].value.energy;
      }
      if (this.props.space[i].value instanceof PlantEater) {
        plantEaterEnergy += this.props.space[i].value.energy;
      }
      if (this.props.space[i].value instanceof Tiger) {
        tigerEnergy += this.props.space[i].value.energy;
      }
    }

    return (
      <VictoryPie
        colorScale={'heatmap'}
        padding={30}
        height={180}
        style={{
          labels: { fontSize: 9 },
          parent: { border: '2px solid #fff' },
        }}
        data={[
            { element: 'Plant', value: plantEnergy },
            { element: 'Tiger', value: tigerEnergy },
            { element: 'Eater', value: plantEaterEnergy },
        ]}
        x="element"
        y={count => count.value}
      />
    );
  }
}

export default LifeChart;
