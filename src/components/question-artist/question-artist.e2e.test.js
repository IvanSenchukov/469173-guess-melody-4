import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionArtist from "./question-artist.jsx";
import {QUESTION_TYPE_ARTIST} from "../../mocks/questions.js";

Enzyme.configure({
  adapter: new Adapter()
});

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

describe(`QuestionArtist component`, () => {
  it(`should pass artist name to callback`, function () {

    const handleAnswer = jest.fn();

    const questionArtist = shallow(
        <QuestionArtist question={mock} errorsCount={3} onAnswer={handleAnswer}/>
    );

    const answerInput = questionArtist.find(`.artist__input`).at(0);

    answerInput.simulate(`click`, {preventDefault() {}});

    expect(handleAnswer).toHaveBeenCalledTimes(1);

    expect(handleAnswer.mock.calls[0][0]).toMatchObject(mock);
    expect(handleAnswer.mock.calls[0][1]).toEqual(mock.guesses[0].artistName);

  });
});
