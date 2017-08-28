import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';

const config = {
  chart: {
      type: 'bar'
  },
  title: {
      text: 'Stacked bar chart'
  },
  xAxis: {
      categories: ['stargazers_count', 'watchers', 'forks', 'open_issues']
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Total'
      }
  },
  legend: {
      reversed: true
  },
  plotOptions: {
      series: {
          stacking: 'normal'
      }
  },
  series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
  }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1]
  }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5]
  }]
}

export default class Chart extends Component {
  render () {
    return <ReactHighcharts config = {config}></ReactHighcharts>;
  }
}
