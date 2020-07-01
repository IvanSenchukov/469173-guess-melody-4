import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import QuestionArtist from "../question-artist/question-artist.jsx";
import QuestionGenre from "../question-genre/question-genre.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = (props) => {

  const startGameCallback = () => {};
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorsCount={props.errorsCount} onWelcomeButtonClick={startGameCallback}/>
        </Route>
        <Route exact path="/dev-artist">
          <QuestionArtist/>
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenre/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired
};

export default App;
