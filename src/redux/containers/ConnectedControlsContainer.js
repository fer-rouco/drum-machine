import { connect } from "react-redux";
import { ControlsContainer } from "../../components/ControlsContainer";
import { updateBank, updateDisplayText, updatePowerValue } from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    updatePowerValue: (newText) => {
       dispatch(updatePowerValue(newText))
    },
    updateDisplayText: (newText) => {
      dispatch(updateDisplayText(newText))
    },
    updateBank: (newText) => {
      dispatch(updateBank(newText))
    }
  }
};

export const ConnectedControlsContainer = connect(null, mapDispatchToProps)(ControlsContainer);