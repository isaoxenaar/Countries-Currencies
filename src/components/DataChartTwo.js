import React, { Component } from "react";
import * as d3 from "d3";
import { connect } from "react-redux";

class DataChartTwo extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    var dataset = Object.values(this.props.currencies.list.rates);
    var w = 1000;
    var h = 500;
    var barPadding = 5;

    var svg = d3
      .select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    svg
      .selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", function (d, i) {
        return i * (w / dataset.length);
      })
      .attr("y", function (d) {
        return h - d * 4;
      })
      .attr("width", w / dataset.length - barPadding)
      .attr("height", function (d) {
        return d * 4;
      })
      .attr("fill", function (d) {
        return (
          "rgb(" +
          Math.round(d * 80) +
          ", " +
          Math.round(d * 80) +
          ", " +
          Math.round(d * 80) +
          ")"
        );
      });

    svg
      .selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(function (d) {
        return d;
      })
      .attr("x", function (d, i) {
        return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
      })
      .attr("y", function (d) {
        return h - d * 4 + 14;
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "black")
      .attr("text-anchor", "middle");
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

export default connect(mapStateToProps)(DataChartTwo);
