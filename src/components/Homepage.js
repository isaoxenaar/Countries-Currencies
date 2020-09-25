import React, { Component } from "react";
import { connect } from "react-redux";
import CountryContainer from "./CountryContainer.js";
import SearchBar from "./SearchBar.js";

class Homepage extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = `url("https://i.pinimg.com/originals/6d/62/3c/6d623c82d5e61401e1f82d26ca786623.png")`;
  }

  render() {
    return (
      <main>
        <div style={{ marginTop: "90px" }}>
          <SearchBar />
        </div>
        <CountryContainer />
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

export default connect(mapStateToProps)(Homepage);
