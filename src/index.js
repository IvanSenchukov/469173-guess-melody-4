import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";
import questions from "./mocks/questions";

const settings = {
  errorsCount: 4
};

ReactDOM.render(
    <App errorsCount={settings.errorsCount} questions={questions}/>,
    document.querySelector(`#root`)
);
