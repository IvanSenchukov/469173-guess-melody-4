import React from "react";
import PropTypes from "prop-types";

const QuestionArtist = (props) => {

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"></img>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: ` url(#blur)`, transformOrigin: `center`, transform: `rotate(-90deg scaleY(-1))`}}/>
        </svg>

        <div className="game__mistakes">
          {Array.from(Array(props.errorsCount)).map((mistake, index) => {
            return (
              <div className="wrong" key={`mistake-${index}`}></div>
            );
          })}
        </div>
      </header>

      <section className="game__screen">

        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio src={props.question.audio.source}></audio>
            </div>
          </div>
        </div>

        <form className="game__artist">
          {props.question.guesses.map((guess, index) => {

            const answerId = `answer-${index}`;
            const artistId = `artist-${index}`;

            return (
              <div className="artist" key={answerId}>
                <input
                  value={artistId}
                  id={answerId}
                  className="artist__input visually-hidden"
                  onClick={() => {
                    props.onAnswer(props.question, guess.artistName);
                  }}
                  type="radio"
                  name="answer"></input>
                <label className="artist__name" htmlFor={answerId}>
                  <img className="artist__picture" src={guess.artistPicture} alt={guess.artistName}></img>
                  {guess.artistName}
                </label>
              </div>
            );
          })}
        </form>
      </section>
    </section>
  );
};

QuestionArtist.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    audio: PropTypes.shape(
        {
          source: PropTypes.string.isRequired
        }
    ).isRequired,
    guesses: PropTypes.arrayOf(PropTypes.shape(
        {
          artistName: PropTypes.string.isRequired,
          artistPicture: PropTypes.string.isRequired
        }
    ))
  }).isRequired,
  errorsCount: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default QuestionArtist;

