import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.button`
  width: 100px;
  height: 80px;
  margin-top: 10px;
  box-shadow: black 3px 3px 5px;
  color: white;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export class AudioButton extends React.Component {
  constructor(props) {
    super(props);

    this.audioTagRef = React.createRef();
  }
  
  play() {
    this.audioTagRef.current.volume = (!this.props.disabled) ? this.props.volume||0.5 : 0;
    this.audioTagRef.current.play();
  }
  
  render() {
     return (
      <StyledDiv className="btn btn-success drum-pad" onClick={this.play.bind(this)} disabled={(this.props.disabled) ? true : false} >
        <audio ref={this.audioTagRef} className="clip" id={this.props.id} src={this.props.src} ></audio>
        {this.props.label}
      </StyledDiv>
    );
  }
}
