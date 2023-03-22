import { connect } from "react-redux";
import { VolumeSlider } from "../../components/VolumeSlider";
import { updateVolume } from "../actions";

const mapStateToProps = (state) => {
  return {
    disabled: state.powerSwitch.disabled
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateVolume: (newText) => {
       dispatch(updateVolume(newText))
    }
  }
};

export const ConnectedVolumeSlider = connect(mapStateToProps, mapDispatchToProps)(VolumeSlider);