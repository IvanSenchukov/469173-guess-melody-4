
export const QUESTION_TYPE_ARTIST = `QUESTION_TYPE_ARTIST`;
export const QUESTION_TYPE_GENRE = `QUESTION_TYPE_GENRE`;

export const GENRE_INDIE_ROCK = `GENRE_INDIE_ROCK`;
export const GENRE_BLUES = `GENRE_BLUES`;
export const GENRE_JAZZ = `GENRE_JAZZ`;

export default [
  {
    type: QUESTION_TYPE_ARTIST,
    artist: `Пелагея`,
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
  },
  {
    type: QUESTION_TYPE_GENRE,
    genre: GENRE_INDIE_ROCK,
    guesses: [
      {
        id: `1`,
        audio: {
          source: ``
        },
        genre: GENRE_BLUES,
        selected: false
      },
      {
        id: `2`,
        audio: {
          source: ``
        },
        genre: GENRE_JAZZ,
        selected: false
      },
      {
        id: `3`,
        audio: {
          source: ``
        },
        genre: GENRE_INDIE_ROCK,
        selected: false
      },
      {
        id: `4`,
        audio: {
          source: ``
        },
        selected: false
      }
    ]
  }
];
