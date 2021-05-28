import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTests } from '../../actions/testActions';
import { addHistory } from '../../actions/historyActions';
import SingleTest from '../../components/test/SingleTest';
import MultiTest from '../../components/test/MultiTest';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      total: 0
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getTests();
  }

  componentDidMount() {
    this.props.getTests();
  }

  onSubmit(e) {
    const data = new FormData(e.target);
    e.preventDefault();

    let total = 0;

    for (let [key, value] of data.entries()) {
      total += Number(value);
    }

    let point = (total / this.props.topmark * 100).toFixed(0);
    this.props.addHistory({
      point: point,
      user: "60ae866b6bd0b62fc884cb5c"
    }, this.props.history);
  }

  render() {
    let tests = this.props.tests;

    return (
      
      <div className="container">
        {/* <br />
        <div className="Header">
          <h1 style={{display: 'inline-block'}}>Test</h1>
        </div> */}
        <div>
          <section className="jumbotron fix1">
            <h2 className="quiztitle">Capsim Quiz</h2>
            <form className="Articles" onSubmit={this.onSubmit}>
              <ol>
                {
                  tests.map((test, i) => (
                    <li key={i}>
                      <p>{test.question}</p>
                      <div>
                        {test.type == "multiple"? <MultiTest test={test} id={i} /> : <SingleTest test={test} id={i} />}
                      </div>
                    </li>
                  ))
                }
              </ol>
              <button className="btn btn-success" style={{marginBottom: '50px', marginRight: '50px', float: 'right'}}>Submit</button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  tests: state.test.tests,
  topmark: state.test.topmark
});

export default connect(
  mapStateToProps,
  { getTests, addHistory }
)(Dashboard);
