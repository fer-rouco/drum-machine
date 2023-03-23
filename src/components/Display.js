import React from "react";
import styled from "styled-components";


const StyledDiv = styled.div`
  background-color: lightsteelblue;
  padding: 10px;
  width: 160px;
  min-height: 48px;
  border: 2px black solid;
  border-radius: 8px;
  font-weight: bold;
  
  &.disabled {
    opacity: 25%;
  }
`;

export class Display extends React.Component {

  render() {
    return (
      <StyledDiv id="display" className={(this.props.disabled) ? 'disabled' : ''}>
        {(this.props.disabled) ? '' : this.props.text} 
      </StyledDiv>
    );
  }
}