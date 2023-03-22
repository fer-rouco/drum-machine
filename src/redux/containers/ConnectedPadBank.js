import { connect } from "react-redux";
import { PadBank } from "../../components/PadBank";
import { updateDisplayText } from "../actions";


const mapStateToProps = (state) => {
  return {
    bank: state.bank
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDisplayText: (newText) => {
       dispatch(updateDisplayText(newText))
    }
  }
};

export const ConnectedPadBank = connect(mapStateToProps, mapDispatchToProps)(PadBank);