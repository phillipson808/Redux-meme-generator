import uuid from 'uuid/v4';


const INITIAL_STATE = {
  memes: []
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD':
      let newMeme = { ...action.payload, id: uuid() };
      return {
        ...state, memes: [...state.memes,
          newMeme
        ]
      }

    case 'REMOVE':
      return { ...state, memes: state.memes.filter(meme => meme.id !== action.payload) }

    default:
      return state;

  }

}

export default rootReducer;
