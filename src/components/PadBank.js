import React from 'react';
import { ConnectedAudioButton } from '../redux/containers/ConnectedAudioButton';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 304px;
  height: 100%;
  display: inline-block;
  margin: 0 10px 10px 10px;
`;

export class PadBank extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kits: [
        {
          name: "Heater Kit",
          drumPadElements: [
            { id: 'Q', innerText: "Heater 1", src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
            { id: 'W', innerText: "Heater 2", src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
            { id: 'E', innerText: "Heater 3", src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
            { id: 'A', innerText: "Heater 4", src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
            { id: 'S', innerText: "Clap", src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
            { id: 'D', innerText: "Open-HH", src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
            { id: 'Z', innerText: "Kick-n'-Hat", src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
            { id: 'X', innerText: "Kick", src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
            { id: 'C', innerText: "Closed-HH", src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
          ]
        },
        {
          name: "Smooth Piano Kit",
          drumPadElements: [
            { id: 'Q', innerText: "Chord 1", src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },
            { id: 'W', innerText: "Chord 2", src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },
            { id: 'E', innerText: "Chord 3", src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },
            { id: 'A', innerText: "Shaker", src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },
            { id: 'S', innerText: "Open-HH", src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },
            { id: 'D', innerText: "Closed-HH", src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },
            { id: 'Z', innerText: "Punchy-Kick", src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
            { id: 'X', innerText: "Side-Stick", src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
            { id: 'C', innerText: "Snare", src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' },
          ]
        }
      ]
    };
    
    this.renderRow = this.renderRow.bind(this);
    this.renderDrumPadElementCol = this.renderDrumPadElementCol.bind(this);
    this.renderDrumPadElements = this.renderDrumPadElements.bind(this);
    this.handleAudioButtonClick = this.handleAudioButtonClick.bind(this);
  }
  
  // componentWillReceiveProps(nextProps) {
  //   this.props.updateDisplayText(this.state.kits[nextProps.bank].name);
  // }
  componentDidUpdate(prevProps, prevState) {
    this.props.updateDisplayText(this.state.kits[this.props.bank].name);
  }

  handleAudioButtonClick(drumPadElement) {
    this.props.updateDisplayText(drumPadElement.innerText);
  }

  renderRow(children, key) {
    return (
      <div className="row" key={key} >
        {children}
      </div>
    );
  }
  
  renderDrumPadElementCol(drumPadElement, key) {
    return (
      <div className="col-4 col-sm-4 col-md-4 col-lg-4" key={key} onClick={() => {this.handleAudioButtonClick(drumPadElement) }} >
        <ConnectedAudioButton id={drumPadElement.id} label={drumPadElement.id} src={drumPadElement.src} ></ConnectedAudioButton>
      </div>
    );
  }
  
  renderDrumPadElements() {
    let drumPadElementsToRender = [];
    let drumPadElementsByRow = [];

    this.state.kits[this.props.bank].drumPadElements.forEach((drumPadElement, drumPadElementIndex) => {
      drumPadElementsByRow.push(this.renderDrumPadElementCol(drumPadElement, drumPadElementIndex));
      
      if ((drumPadElementIndex + 1) % 3 === 0) {
        drumPadElementsToRender.push(drumPadElementsByRow);
        drumPadElementsByRow = [];
      }
    });
    
    return (
      drumPadElementsToRender.map((drumPadElementToRender, index) => (
        this.renderRow(drumPadElementToRender, index)
      ))
    );
  }

  render() {
    return (
      <StyledDiv className="pad-bank" >
        {this.renderDrumPadElements()}
      </StyledDiv>        
    );
  }
}
