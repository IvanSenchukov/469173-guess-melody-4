import React from 'React';
import PropTypes from 'prop-types';
import {GENRE_BLUES, GENRE_INDIE_ROCK, GENRE_JAZZ} from "../../mocks/questions";

const QuestionGenre = (props) => {

  function generateTitle(questionGenre) {

    let genre;

    switch (questionGenre) {
      case GENRE_INDIE_ROCK : {
        genre = `инди-рок`;
        break;
      }
      case GENRE_BLUES: {
        genre = `блюз`;
        break;
      }
      case GENRE_JAZZ: {
        genre = `джаз`;
        break;
      }
    }

    return `Выберите ${genre} треки`;
  }

  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"></img>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transfrmOrigin: `center`}}/>
        </svg>

        <div className="game__mistakes">
          {Array.from(Array(props.errorsCount)).map((mistake, number) => {
            return (
              <div className="wrong" key={`mistake-${number}`}></div>
            );
          })}
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">{generateTitle(props.question.genre)}</h2>
        <form className="game__tracks">

          {props.question.guesses.map((guess, index) => {
            const answerId = `answer-${index}`;
            return (
              <div className="track" key={answerId}>
                <button className="track__button track__button--play" type="button"></button>
                <div className="track__status">
                  <audio src={guess.audio.source}></audio>
                </div>
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" checked={guess.selected} name="answer" value={answerId} id={answerId}></input>
                  <label className="game__check" htmlFor={answerId}>Отметить</label>
                </div>
              </div>
            );
          })}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
};

QuestionGenre.propTypes = {
  question: PropTypes.shape(
      {
        type: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        guesses: PropTypes.arrayOf(
            PropTypes.shape({
              genre: PropTypes.string.isRequired,
              selected: PropTypes.bool.isRequired,
              audio: PropTypes.shape({
                source: PropTypes.string.isRequired
              })
            }).isRequired
        ).isRequired
      }
  ).isRequired,
  errorsCount: PropTypes.number.isRequired
};

export default QuestionGenre;
