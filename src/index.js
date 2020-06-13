import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app.jsx";

const settings = {
  errorsCount: 3
};

ReactDOM.render(
    <App errorsCount={settings.errorsCount}/>,
    document.querySelector(`#root`)
);
