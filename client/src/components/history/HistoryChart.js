import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHistory, addHistory } from '../../actions/historyActions';
import SingleTest from '../test/SingleTest';
import MultiTest from '../test/MultiTest';
import Chart from 'react-apexcharts';
import './HistoryChart.css'

class HistoryChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.getHistory();
  }

  render() {
    let {historychart} = this.props.history;

    let max = 0;
    historychart.map(d => {
      max = Math.max(max, d)
    })
    
    max = max % 2 == 1 ? max+ 1 : max;

    const state = {
      series: [{
        data: historychart
      }],
      options: {
        chart: {
          type: 'bar',
          height: 450,
          // stackType: '100%'
        },
        plotOptions: {
          bar: {
            borderRadius: 0,
            horizontal: true,
          }
        },
        xaxis: {
          categories: ['100%-90%', '90%-90%', '80%-70%', '70%-60%', '60%-50%', '50%-40%', '40%-30%',
            '30%-20%', '20%-10%', '10%-0%'],
        },
        yaxis: {
          max: max,
          tickAmount: 2
        },
        labels: ['Apples', 'Oranges', 'Berries', 'Grapes']
      },
    }

    return (
      <div className="container">
        <br />
        {/* <div className="Header">
          <h1 style={{display: 'inline-block'}}>Report</h1>
        </div> */}
        <div>
          <section className="jumbotron fix1">
            <h3 align="center">Capsim Quiz Score</h3>
            <Chart options={state.options} series={state.series} type="bar" height={350} />
            <p align="right">Number of users</p>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history
});

export default connect(
  mapStateToProps,
  { getHistory, addHistory }
)(HistoryChart);
