import React from "react";
import App from "./app.jsx";
import renderer from "react-test-renderer";

it(`renders correctly`, () => {
  const tree = renderer
    .create(<App errorsCount={3}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
