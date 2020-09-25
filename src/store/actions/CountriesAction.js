export function countriesFetched(data) {
  return {
    type: "FETCHED_COUNTRIES",
    payload: data,
  };
}

export function chosenCountry(data) {
  return {
    type: "THIS_COUNTRY",
    payload: data,
  };
}

export function fetchAll(dispatch, getState) {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .then((data) => {
      dispatch(countriesFetched(data));
    });
}

export const thisCountry = (data) => (dispatch) => {
  const action = chosenCountry(data);
  dispatch(action);
};
