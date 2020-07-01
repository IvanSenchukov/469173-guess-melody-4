import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import QuestionArtist from "../question-artist/question-artist.jsx";
import QuestionGenre from "../question-genre/question-genre.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import questions from "../../mocks/questions";

const App = (props) => {

  const startGameCallback = () => {};
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorsCount={props.errorsCount} onWelcomeButtonClick={startGameCallback}/>
        </Route>
        <Route exact path="/dev-artist">
          <QuestionArtist question={questions[0]} errorsCount={props.errorsCount}/>
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenre question={questions[1]} errorsCount={props.errorsCount}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
