import { connect } from "react-redux";
import { Switch } from "../../components/Switch";

const mapStateToProps = (state) => {
  return {
    disabled: state.powerSwitch.disabled
  };
};

export const ConnectedSwitch = connect(mapStateToProps)(Switch);