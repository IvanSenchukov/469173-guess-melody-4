import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import QuestionArtist from "../question-artist/question-artist.jsx";
import QuestionGenre from "../question-genre/question-genre.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import questions, {QUESTION_TYPE_ARTIST, QUESTION_TYPE_GENRE} from "../../mocks/questions";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mistakes: 0,
      currentStep: -1
    };
  }

  render() {

    const handleWelcomeButtonClick = () => {
      this.setState({currentStep: 0});
    };

    const handleAnswer = () => {
      this.setState((prevState) => {
        return {currentStep: prevState.currentStep + 1};
      });
    };

    const renderScreen = (currentStep, questionsArray, errorsCount) => {
      if (currentStep === -1 || currentStep >= questionsArray.length) {
        return (<WelcomeScreen errorsCount={errorsCount} onWelcomeButtonClick={handleWelcomeButtonClick}/>);
      } else {
        switch (questionsArray[currentStep].type) {
          case QUESTION_TYPE_ARTIST : return (<QuestionArtist question={questionsArray[currentStep]} onAnswer={handleAnswer} errorsCount={errorsCount}/>);
          case QUESTION_TYPE_GENRE : return (<QuestionGenre question={questionsArray[currentStep]} onAnswer={handleAnswer} errorsCount={errorsCount}/>);
          default : return (<WelcomeScreen errorsCount={errorsCount} onWelcomeButtonClick={handleWelcomeButtonClick}/>);
        }
      }
    };

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {renderScreen(this.state.currentStep, this.props.questions, this.props.errorsCount)}
          </Route>
          <Route exact path="/dev-artist">
            <QuestionArtist question={questions[0]} errorsCount={this.props.errorsCount} onAnswer={() => {}}/>
          </Route>
          <Route exact path="/dev-genre">
            <QuestionGenre question={questions[1]} errorsCount={this.props.errorsCount} onAnswer={() => {}}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
