import { connect } from "react-redux";
import { AudioButton } from "../../components/AudioButton";

const mapStateToProps = (state) => {
  return {
    disabled: state.powerSwitch.disabled,
    volume: (Number.parseInt(state.volume) / 100)
  };
};

export const ConnectedAudioButton = connect(mapStateToProps)(AudioButton);