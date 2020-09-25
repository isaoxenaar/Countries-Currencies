import { combineReducers } from "redux";
import countries from "./CountriesReducer";
import chosen from "./ChosenCountryReducer";
import currencies from "./CurrenciesReducer";

export default combineReducers({
  countries,
  chosen,
  currencies,
});
