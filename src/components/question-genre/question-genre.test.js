import React from "react";
import renderer from "react-test-renderer";
import QuestionGenre from "./question-genre.jsx";
import {GENRE_BLUES, GENRE_INDIE_ROCK, GENRE_JAZZ, QUESTION_TYPE_GENRE} from "../../mocks/questions";

const mock = {
  question: {
    type: QUESTION_TYPE_GENRE,
    genre: GENRE_INDIE_ROCK,
    guesses: [
      {
        audio: {
          source: ``
        },
        genre: GENRE_BLUES,
        selected: false
      },
      {
        audio: {
          source: ``
        },
        genre: GENRE_JAZZ,
        selected: false
      },
      {
        audio: {
          source: ``
        },
        genre: GENRE_INDIE_ROCK,
        selected: true
      },
      {
        audio: {
          source: ``
        },
        genre: GENRE_INDIE_ROCK,
        selected: false
      }
    ]
  }

};


it(`should renders correctly`, function () {
  const tree = renderer
    .create(<QuestionGenre question={mock.question} errorsCount={2} onAnswer={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
