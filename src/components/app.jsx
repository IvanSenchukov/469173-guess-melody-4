import React from 'react';
import WelcomeScreen from "./welcome-screen.jsx";

const App = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <WelcomeScreen errorsCount={props.errorsCount}/>
  );
};

export default App;
