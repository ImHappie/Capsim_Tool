import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addTest } from '../../actions/testActions';

class AddTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      type: 'single',
      answer: [{mark: 1,choice: ''}, {mark: 0,choice: ''}, {mark: 0,choice: ''}, {mark: 0,choice: ''}]
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTest(this.state, this.props.history)
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})

    if(e.target.name == 'type'){
      switch(e.target.value){
        case 'single':
          this.setState({answer: [{mark: 1,choice: ''}, {mark: 0,choice: ''}, {mark: 0,choice: ''}, {mark: 0,choice: ''}]});
          break;
        case 'multiple':
          this.setState({answer: [{mark: 1,choice: ''}, {mark: 0,choice: ''}, {mark: 0,choice: ''}, {mark: 0,choice: ''}]});
          break;
        case 'truefalse':
          this.setState({answer: [{mark: 1,choice: 'True'}, {mark: 0,choice: 'False'}]});
          break;
      }
    }
  }

  onChangeAnswer = (index, e) => {
    let answer = this.state.answer;

    if(e.target.name == 'mark' && this.state.type !== 'multiple'){
      for (var i = answer.length - 1; i >= 0; i--) {
        answer[i].mark = 0;
      }
    }
    answer[index][e.target.name] = e.target.value;

    this.setState({answer: answer})
  }

  render() {
    return (
      <div className="container">
        <br />
        <h3 className="text-center">Add Test</h3>
        <div className="jumbotron">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Question</label>
              <input
                type='text'
                name='question'
                className='form-control'
                value={this.state.question}
                required
                onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label>Type</label>
              <select 
                name='type'
                className='form-control'
                style={{'marginLeft': '20px'}}
                onChange={this.onChange}
                value={this.state.type}
              >
                <option value='single'>single</option>
                <option value='multiple'>multiple</option>
                <option value='truefalse'>true or false</option>
              </select>
            </div>
            <div className="form-group">
              <label>Answer</label>
              <div>
                <ul className='test-item'>
                  {
                    this.state.answer.map((a, j) => (
                      <li key={j}>
                        <input type='text' name='choice' onChange={(e) => this.onChangeAnswer(j, e)} className='form-control answertxt' value={a.choice} disabled={this.state.type == 'truefalse'} required/>
                        <input type='number' name='mark' onChange={(e) => this.onChangeAnswer(j, e)} className='form-control answermark' value={a.mark} min='0' max={this.state.type == 'multiple'? 5 : 1}/>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <button className="btn btn-success item-right">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  { addTest }
)(AddTest);
