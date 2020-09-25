import React, { Component } from "react";
import * as d3 from "d3";
import { connect } from "react-redux";

class DataChart extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = Object.values(this.props.currencies.list.rates);
    var w = 1000;
    var h = 300;

    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("margin-left", 100);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 50)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "grey");

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d - 3);
  }

  render() {
    return <div id={"#" + this.props.id}></div>;
  }
}

function mapStateToProps(reduxState) {
  return {
    countries: reduxState.countries,
    chosen: reduxState.chosen,
    currencies: reduxState.currencies,
  };
}

export default connect(mapStateToProps)(DataChart);
