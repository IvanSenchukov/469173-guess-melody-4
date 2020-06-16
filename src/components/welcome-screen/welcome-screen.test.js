import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

it(`Should render correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen errorsCount={4}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
