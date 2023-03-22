import React from 'react';
import styled from 'styled-components';
import { ConnectedDisplay } from '../redux/containers/ConnectedDisplay';
import { ConnectedSwitch } from '../redux/containers/ConnectedSwitch';
import { ConnectedVolumeSlider } from '../redux/containers/ConnectedVolumeSlider';
import { Switch } from './Switch';

const StyledDiv = styled.div`
  display: inline-block;
  margin: 20px;
  padding: 10px;
`;

const StyledRowDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

export class ControlsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.props.updatePowerValue(true);
  }

  powerHandleChange(value) {
    this.props.updatePowerValue(value);
  }

  volumeChange(value) {
    this.props.updateDisplayText(`Volume ${value}`);
  }

  bankHandleChange(value) {
    const bank = (!value) ? 0 : 1;
    this.props.updateBank(bank);
    this.props.onBankChange(bank);
  }

  render() {
    return (
      <StyledDiv className="controlsContainer">
        <StyledRowDiv>
          <Switch label="Power" checked={true} onChange={this.powerHandleChange.bind(this)} ></Switch>
        </StyledRowDiv>
        <StyledRowDiv>
          <ConnectedDisplay></ConnectedDisplay>
          <ConnectedVolumeSlider min="0" max="100" onChange={this.volumeChange.bind(this)} ></ConnectedVolumeSlider>
        </StyledRowDiv>
        <StyledRowDiv>
          <ConnectedSwitch label="Bank" onChange={this.bankHandleChange.bind(this)} ></ConnectedSwitch>
        </StyledRowDiv>
      </StyledDiv>
    );
  }
}
