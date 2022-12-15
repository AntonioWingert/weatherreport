import { getDatesApi } from "../../services/api";

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const SET_DEGREE = 'SET_DEGREE'

export const firstRequest = () => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const data = await getDatesApi('santo antonio do sudoeste');
      return dispatch(requestSuccessful(data));
    } catch (error) {
      return dispatch(requestFailed(error));
    }
  }
};

export const fetchDateCity = (city) => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const data = await getDatesApi(city);
      return dispatch(requestSuccessful(data));
    } catch (error) {
      return dispatch(requestFailed(error));
    }
  }
};

const requestStarted = () => ({
  type: REQUEST_STARTED,
});

const requestSuccessful = (data) => ({
  type: REQUEST_SUCCESSFUL,
  data,
});

const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  error,
});

export const setDegree = () => ({
  type: SET_DEGREE,
});