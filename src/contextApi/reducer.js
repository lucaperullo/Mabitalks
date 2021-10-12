export const initialState = {
  cards: [],
};

export const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_CARDS":
      return {
        ...state,
        cards: action.payload,
      };

    default:
      return state;
  }
};
