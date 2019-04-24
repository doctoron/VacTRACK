1
2
3
4
5
6
7
8
9
10
11
12
13
import React from 'react';
  function Question(props) {
    return (
      <h2 className="question">{props.content}</h2>
    );
  }
  Question.propTypes = {
    content: React.PropTypes.string.isRequired
  };
  export default Question;