import React, { Component } from 'react';
// import Quiz from './Quiz';
// import _ from 'lodash';
// import Result from './Result';
// import { withRouter } from 'react-router';

class QuizHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      answers: [],
      isSubmitted: false,
    };
  }

  componentDidMount() {
    let category = this.props.match.params.category;
    let level = this.props.match.params.level;
    console.log(category, level);
  }

  render() {
    return <h3>Quizzzzzz</h3>;
  }
}

export default QuizHome;
