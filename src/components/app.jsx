import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from "./welcome-screen.jsx";

const App = (props) => {
  return (
    <WelcomeScreen errorsCount={props.errorsCount}/>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired
};

export default App;
