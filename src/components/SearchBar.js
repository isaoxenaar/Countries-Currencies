import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { thisCountry } from "../store/actions/CountriesAction";
import Button from "../Styles/Button";

const Input = styled.input`
  all: unset;
  width: 50%;
  margin-bottom: 2rem;
  margin-top; 2rem;
  padding: 1rem;
  border-radius: 4px;
  background-color: #e0dede;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class SearchBar extends Component {
  state = {
    searchField: "",
    chosen: [],
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { searchField } = this.state;
    const countries = this.props.countries.list;
    const filteredCountry = countries.filter((c) => {
      return c.name.toLowerCase() === searchField.toLowerCase();
    });
    this.props.dispatch(thisCountry(filteredCountry));
    this.setState({
      searchField: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <Input
            type="search"
            className="search"
            placeholder="enter country name"
            onChange={(e) => this.setState({ searchField: e.target.value })}
            value={this.state.searchField}
          />
          <Button>Search</Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    countries: reduxState.countries,
    chosen: reduxState.chosenCountry,
    currencies: reduxState.currencies,
  };
}

export default connect(mapStateToProps)(SearchBar);
