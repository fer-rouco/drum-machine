import { connect } from "react-redux";
import { Display } from "../../components/Display";

const mapStateToProps = (state) => {
  return {
    text: state.display,
    disabled: state.powerSwitch.disabled
  };
};

export const ConnectedDisplay = connect(mapStateToProps)(Display);