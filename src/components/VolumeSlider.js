import React from "react";

export class VolumeSlider extends React.Component {
    
  handleVolumeChange(event) {
    this.props.updateVolume(event.currentTarget.value);
    this.props.onChange(event.currentTarget.value);
  }

  render() {
    return (
      <div>
        <label
          htmlFor="customRange"
          className="form-label">
          {this.props.label}
        </label>
        <input
          type="range"
          className="form-range"
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          id="customRange"
          disabled={(this.props.disabled) ? true : false}
          onChange={this.handleVolumeChange.bind(this)}
        />
      </div>
    );
  }
}