const initialState = {
  aggiorna: {
    temperature: Date.now(),
    pulizie: Date.now(),
    infestanti: Date.now(),
    fornitori: Date.now(),
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AGGIORNA":
      return {
        ...state,
        aggiorna: {
          ...state.aggiorna,
          [action.key]: action.payload,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
