import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL, SET_DEGREE } from "../actions";

const INITIAL_STATE = {
  datesApi: {},
  error: '',
  isLoading: true,
  celsius: true,
};

export const weatherApiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_STARTED: return {
      ...state,
      isLoading: true,
    };
    case REQUEST_SUCCESSFUL: return {
      ...state,
      datesApi: {...action.data},
      isLoading: false,
    };
    case REQUEST_FAILED: return {
      ...state,
      error: action.error,
      isLoading: false,
    }
    case SET_DEGREE: return {
      ...state,
      celsius: !state.celsius,
    }
    default: return state;
  }
};
