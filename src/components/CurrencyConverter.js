import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchCurrencies } from "../store/actions/CurrenciesAction";
import Button from "../Styles/Button";
import ChartOne from "./DataChart";
import ChartTwo from "./DataChartTwo";

const Input = styled.input`
all: unset;
width: 50%;
margin-bottom: 2rem;
margin; auto;
padding: 1rem;
border-radius: 4px;
background-color: #e0dede;
`;

class Converter extends Component {
  state = {
    amount: "",
    answer: 0,
  };

  componentDidMount() {
    this.props.dispatch(fetchCurrencies);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const currency = this.props.chosen[0].currencies[0].code;
    const rates = Object.entries(this.props.currencies.list.rates);
    const conversionRate = rates.filter((rate) => {
      return rate[0] === currency;
    });
    const rate = conversionRate[0][1];
    const SEK = this.state.amount * rate;
    this.setState({
      answer: SEK,
      amount: "",
    });
  };

  render() {
    const answer = this.state.answer ? this.state.answer : " ";

    return (
      <main>
        <p style={{ color: "#B97417" }}>
          {" "}
          {this.state.amount} SEK is {answer}{" "}
          {this.props.chosen[0].currencies[0].symbol}
        </p>
        <form onSubmit={this.onSubmit}>
          <Input
            type="text"
            className="text"
            placeholder="from SEK to..."
            onChange={(e) => this.setState({ amount: e.target.value })}
            value={this.state.amount}
          />
          <Button>Convert</Button>
        </form>
        <div
          style={{
            marginTop: "90px",
            backgroundColor: "rgba(255,255,255, 0.5)",
          }}
        >
          1 SEK converted to all currencies (See the dynamic DataCharts)
          <ChartOne />
          <ChartTwo />
        </div>
      </main>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    countries: reduxState.countries,
    chosen: reduxState.chosen,
    currencies: reduxState.currencies,
  };
}

export default connect(mapStateToProps)(Converter);
