const initialState = { list: [] };

export default function chosenReducer(state = initialState, action) {
  switch (action.type) {
    case "THIS_COUNTRY": {
      return (state = action.payload);
    }
    default:
      return state;
  }
}
