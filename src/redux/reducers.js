import { combineReducers } from 'redux';

import { UPDATE_BANK, UPDATE_DISPLAY_TEXT, UPDATE_POWER_VALUE, UPDATE_VOLUME } from "./actions";

const display = (state = '', action) => {
  switch (action.type) {  
    case UPDATE_DISPLAY_TEXT:
      return action.text;
    default:  
      return state;
  }  
}

const powerSwitch = (state = { disabled: true }, action) => {
  switch (action.type) {  
    case UPDATE_POWER_VALUE:
      return { disabled: !action.value };
    default:  
      return state;
  }  
}

const volume = (state = 0.5, action) => {
  switch (action.type) {  
    case UPDATE_VOLUME:
      return action.value;
    default:  
      return state;
  }  
}

const bank = (state = 0, action) => {
  switch (action.type) {  
    case UPDATE_BANK:
      return action.value;
    default:  
      return state;
  }  
}

export default combineReducers({
  display,
  powerSwitch,
  volume,
  bank
});