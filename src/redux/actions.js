export const UPDATE_DISPLAY_TEXT = 'UPDATE_DISPLAY_TEXT';
export const UPDATE_POWER_VALUE = 'UPDATE_POWER_VALUE';
export const UPDATE_VOLUME = 'UPDATE_VOLUME';
export const UPDATE_BANK = 'UPDATE_BANK';

export const updateDisplayText = (text) => {
  return {
    type: UPDATE_DISPLAY_TEXT,
    text
  }
};

export const updatePowerValue = (value) => {
  return {
    type: UPDATE_POWER_VALUE,
    value
  }
}

export const updateVolume = (value) => {
  return {
    type: UPDATE_VOLUME,
    value
  }
}

export const updateBank = (value) => {
  return {
    type: UPDATE_BANK,
    value
  }
}