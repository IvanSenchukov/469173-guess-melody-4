
export const QUESTION_TYPE_ARTIST = `QUESTION_TYPE_ARTIST`;
export const QUESTION_TYPE_GENRE = `QUESTION_TYPE_GENRE`;

export const questionsMock = [
  {
    type: QUESTION_TYPE_ARTIST,
    audioSource: ``,
    guesses: [
      {
        id: `1`,
        artistName: `Пелагея`,
        artistPicture: `http://placehold.it/134x134`
      },
      {
        id: `2`,
        artistName: `Краснознаменная дивизия имени моей бабушки`,
        artistPicture: `http://placehold.it/134x134`
      },
      {
        id: `3`,
        artistName: `Lorde`,
        artistPicture: `http://placehold.it/134x134`
      }
    ]
  },
  {
    type: QUESTION_TYPE_GENRE
  }
];
