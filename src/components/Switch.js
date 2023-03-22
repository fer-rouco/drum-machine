import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 0;
`;

const StyledSwitch = styled.input`
  &.form-check-input {
    height: 2em;
    width: 4em;
    margin-left: 0;
  }
`;

const StyledLabel = styled.label`
  margin-left: auto;
  margin-right: auto;
`;

export class Switch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked||false
    };
  }
  
  handleChange(value) {
    this.setState({ checked: value.currentTarget.checked });

    if (this.props.onChange) {
      this.props.onChange(value.currentTarget.checked);
    }
  }

  render() {
    return (
      <StyledDiv className="form-check form-switch">
        <StyledLabel
          className="form-check-label"
          htmlFor="flexSwitchCheckDefault">
          {this.props.label}
        </StyledLabel>
        <StyledSwitch
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={this.state.checked}
          onChange={this.handleChange.bind(this)}
          disabled={(this.props.disabled) ? true : false}
        />
      </StyledDiv>
    );
  }
}
