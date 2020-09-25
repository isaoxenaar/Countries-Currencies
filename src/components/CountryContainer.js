import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchAll } from "../store/actions/CountriesAction";
import { fetchCurrencies } from "../store/actions/CurrenciesAction";
import Converter from "./CurrencyConverter.js";

const white = "#FFFFFF";
const grey = "#474747";

const BooleanButton = styled.div`
all: unset;
width: 50%;
margin-bottom: 3rem;
margin: auto;
padding: 1rem;
display: flex;
justify-content: center;
align-items: center;
background-color: ${grey};
text-align: center;
font-size: 24px;
font-family: "Courier New";
color: ${white};
border-radius: 4px;
cursor: pointer;
&:hover {
  color: ${grey};
  background-color: ${white};
`;

class CountryContainer extends Component {
  state = {
    showList: true,
  };

  componentDidMount() {
    this.props.dispatch(fetchAll);
    this.props.dispatch(fetchCurrencies);
  }

  render() {
    const countries = this.props.countries.list;

    const list = countries.map((c) => (
      <p styles={{ width: "20px", float: "left" }} key={c.name}>
        {c.name} {c.currencies[0].code} {c.currencies[0].symbol}
      </p>
    ));

    const listButtonText = this.state.showList
      ? "Show DataCharts"
      : "Show countries";

    const chosen = this.props.chosen[0];

    if (!chosen) {
      return " ";
    } else {
      const currency = chosen.currencies.map((c) => c.name);
      return (
        <div style={{ backgroundColor: "rgba(255,255,255, 0.5)" }}>
          <h1 style={{ color: "#00000" }}>{chosen.name}</h1>
          <p>
            The capital of {chosen.name} is {chosen.capital}. <br></br>
            The currency used is called the {currency}. <br></br>
            {chosen.population} people live in {chosen.name}.
          </p>
          <p>
            You can convert SEK to {currency} down here and see how much your
            Krona is worth.
          </p>
          <Converter />
          <BooleanButton
            onClick={() => {
              console.log("hello");
              this.setState({ showList: !this.state.showList });
            }}
          >
            {listButtonText}
          </BooleanButton>
          {this.state.showList && (
            <div>
              <h4>{list}</h4>
            </div>
          )}
        </div>
      );
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    countries: reduxState.countries,
    chosen: reduxState.chosen,
    currencies: reduxState.currencies,
  };
}

export default connect(mapStateToProps)(CountryContainer);
