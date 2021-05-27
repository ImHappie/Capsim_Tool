import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHistory, addHistory } from '../../actions/historyActions';
import SingleTest from '../../components/test/SingleTest';
import MultiTest from '../../components/test/MultiTest';
import Chart from 'react-apexcharts'

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
// [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    const state = {
      series: [{
        data: historychart
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['100%-90%', '90%-90%', '80%-70%', '70%-60%', '60%-50%', '50%-40%', '40%-30%',
            '30%-20%', '20%-10%', '10%-0%'
          ],
        }
      },
    }

    return (
      <div className="container">
        <br />
        <div className="Header">
          <h1 style={{display: 'inline-block'}}>Report Page</h1>
        </div>
        <div>
          <section className="jumbotron">
            <h3 align="center">Capsim QUiz Score</h3>
            <Chart options={state.options} series={state.series} type="bar" height={350} />
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
