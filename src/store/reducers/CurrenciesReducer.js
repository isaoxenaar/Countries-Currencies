const initialState = { list: [] };

export default function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHED_CURRENCIES": {
      return {
        ...state,
        list: action.payload,
      };
    }
    default:
      return state;
  }
}
