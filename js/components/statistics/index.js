import React, {Component} from 'react';

import ComparisonTable from '../comparison_table';
import Chart from '../chart';
import {repositories} from '../../mocks';

import statistics_style from './statistics.scss';

export default class Statistics extends Component {
  render () {
    return (
      <div>
        <Chart />
        <ComparisonTable repos={repositories}/>
      </div>
    );
  }
}

