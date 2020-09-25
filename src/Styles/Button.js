import React, { Component } from "react";
import styled from "styled-components";

const white = "#FFFFFF";
const grey = "#474747";

const StyledButton = styled.button`
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
  }
`;

class Button extends Component {
  render() {
    return (
      <div>
        eslint-disable-next-line react/jsx-handler-names
        <StyledButton>{this.props.children}</StyledButton>
      </div>
    );
  }
}

export default Button;
