import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionGenre from "./question-genre";
import {GENRE_BLUES, GENRE_INDIE_ROCK, GENRE_JAZZ, QUESTION_TYPE_GENRE} from "../../mocks/questions";

Enzyme.configure({
  adapter: new Adapter()
});

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

describe(`QuestionGenre component`, () => {
  it(`should prevent sending form on click`, function () {

    const question = mock.question;
    const onAnswer = jest.fn();
    const formSendPrevention = jest.fn();
    const mockEvent = {preventDefault: formSendPrevention};

    const questionGenre = shallow(
        <QuestionGenre question={question} errorsCount={3} onAnswer={onAnswer}/>
    );

    const answerButton = questionGenre.find(`button.game__submit`);

    answerButton.simulate(`click`, mockEvent);

    expect(onAnswer).toBeCalledTimes(1);
    expect(formSendPrevention).toBeCalledTimes(1);
  });

  it(`should pass correct data for onAnswer`, function () {

    const question = mock.question;
    const handleAnswer = jest.fn();

    const questionGenre = shallow(
        <QuestionGenre question={question} errorsCount={3} onAnswer={handleAnswer}/>
    );

    const answerButton = questionGenre.find(`button.game__submit`);
    answerButton.simulate(`click`, {preventDefault() {}});

    expect(handleAnswer).toBeCalledTimes(1);
    expect(handleAnswer.mock.calls[0][0]).toMatchObject(question);
    expect(handleAnswer.mock.calls[0][1]).toMatchObject([false, false, false, false]);
  });
});

