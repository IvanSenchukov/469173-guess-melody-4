import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {

  const startGameCallback = () => {};
  return (
    <WelcomeScreen errorsCount={props.errorsCount} onWelcomeButtonClick={startGameCallback}/>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired
};

export default App;
