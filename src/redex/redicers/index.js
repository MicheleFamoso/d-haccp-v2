const initialState = {
  temp: {
    aggiorna: Date.now(),
  },
  pulizie: {
    riaggiorna: Date.now(),
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AGGIORNA":
      return {
        ...state,
        temp: {
          ...state.temp,
          aggiorna: action.payload,
        },
      };
    case "RIAGGIORNA":
      return {
        ...state,
        pulizie: {
          ...state.pulizie,
          riaggiorna: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
