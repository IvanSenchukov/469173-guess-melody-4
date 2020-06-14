import React from 'react';
import WelcomeScreen from "./welcome-screen.jsx";

const App = (props) => {
  return (
    <WelcomeScreen errorsCount={props.errorsCount}/>
  );
};

export default App;
