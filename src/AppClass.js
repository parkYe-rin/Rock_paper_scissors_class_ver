import React, { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass';

const choice = {
  rock: {
    name: 'rock',
    img: 'https://static.thenounproject.com/png/477914-200.png',
  },
  scissors: {
    name: 'scissors',
    img: 'https://static.thenounproject.com/png/477919-200.png',
  },
  paper: {
    name: 'paper',
    img: 'https://static.thenounproject.com/png/477912-200.png',
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userImg: '',
      comImg: '',
      userResult: '',
      comResult: '',
    };
  }

  clickBtn = (userChoice) => {
    let comResult = this.random();
    this.setState({
      userImg: choice[userChoice],
      comImg: comResult,
      userResult: this.gameOutcome(choice[userChoice].name, comResult.name),
      comResult: this.gameOutcome(comResult.name, choice[userChoice].name),
      questionImg:
        'https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/02/1472-question-mark-emoji-coloring-page.png',
    });
  };

  random = () => {
    let choiceKeys = Object.keys(choice);
    let randomNum = Math.floor(Math.random() * choiceKeys.length);
    let final = choiceKeys[randomNum];
    return choice[final];
  };

  gameOutcome = (first, sec) => {
    if (first === sec) {
      return 'tie';
    }
    return (first === 'scissors' && sec === 'paper') ||
      (first === 'rock' && sec === 'scissors') ||
      (first === 'paper' && sec === 'rock')
      ? 'win'
      : 'lose';
  };

  render() {
    return (
      <div>
        <div className="box-align">
          {this.state.userImg === '' || this.state.userImg === null ? (
            <BoxClass
              title="나"
              img={this.state.questionImg}
              result="결과는?"
            />
          ) : (
            <BoxClass
              title="나"
              img={this.state.userImg.img}
              result={this.state.userResult}
            />
          )}
          {this.state.comImg === '' || this.state.userImg === null ? (
            <BoxClass
              title="컴퓨터"
              img={this.state.questionImg}
              result="결과는?"
            />
          ) : (
            <BoxClass
              title="컴퓨터"
              img={this.state.comImg.img}
              result={this.state.comResult}
            />
          )}
        </div>

        <div className="btn">
          <button onClick={() => this.clickBtn('scissors')}>가위</button>
          <button onClick={() => this.clickBtn('rock')}>바위</button>
          <button onClick={() => this.clickBtn('paper')}>보</button>
        </div>
      </div>
    );
  }
}
