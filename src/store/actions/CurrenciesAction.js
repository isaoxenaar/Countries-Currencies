export function currenciesFetched(data) {
  return {
    type: "FETCHED_CURRENCIES",
    payload: data,
  };
}

export function fetchCurrencies(dispatch, getState) {
  fetch("https://api.exchangeratesapi.io/latest?base=SEK")
    .then((response) => response.json())
    .then((data) => {
      dispatch(currenciesFetched(data));
    });
}
