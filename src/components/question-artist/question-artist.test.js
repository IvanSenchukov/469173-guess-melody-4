import React from "react";
import renderer from "react-test-renderer";
import QuestionArtist from "./question-artist.jsx";
import {QUESTION_TYPE_ARTIST} from "../../mocks/questions.js";

const mock = {
  type: QUESTION_TYPE_ARTIST,
  artist: `Краснознаменная дивизия имени моей бабушки`,
  audio: {
    source: ``
  },
  guesses: [
    {
      artistName: `Пелагея`,
      artistPicture: `http://placehold.it/134x134`
    },
    {
      artistName: `Краснознаменная дивизия имени моей бабушки`,
      artistPicture: `http://placehold.it/134x134`
    },
    {
      artistName: `Lorde`,
      artistPicture: `http://placehold.it/134x134`
    }
  ]
};


it(`should renders correctly`, function () {
  const tree = renderer
    .create(<QuestionArtist question={mock} errorsCount={3} onAnswer={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
