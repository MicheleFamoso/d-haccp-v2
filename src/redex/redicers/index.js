const initialState = {
  aggiorna: {
    temperature: Date.now(),
    pulizie: Date.now(),
    infestanti: Date.now(),
    fornitori: Date.now(),
  },
  fornitori: [],
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
    case "SET_FORNITORI":
      return {
        ...state,
        fornitori: action.payload,
      };

    case "REMOVE_FORNITORE":
      return {
        ...state,
        fornitori: state.fornitori.filter((f) => f.id !== action.payload),
      };

    default:
      return state;
  }
};

export default mainReducer;
