import React from 'react';
import './App.css';
import { ConnectedControlsContainer } from './redux/containers/ConnectedControlsContainer';
import { ConnectedPadBank } from './redux/containers/ConnectedPadBank';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bank: 0
    };
  }

  handleBankChange(bank) {
    this.setState({ bank: bank });
  }

  render() {
    return (
      <div id="drum-machine" className="inner-container" >
        <div className="row" >
          <div className="col-md-6 col-lg-6" >
            <ConnectedPadBank bank={this.state.bank} ></ConnectedPadBank>
          </div>
          <div className="col-md-6 col-lg-6" >
            <ConnectedControlsContainer onBankChange={this.handleBankChange.bind(this)} ></ConnectedControlsContainer>
          </div>
        </div>
      </div>
    );
  }
}
