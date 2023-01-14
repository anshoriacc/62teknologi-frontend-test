import { Dispatch } from '../types';
import { BUSINESS_API } from '../../services/api';

export const GET_DATA_PENDING = 'GET_DATA_PENDING';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';

export const GET_CATEGORY_PENDING = 'GET_CATEGORY_PENDING';
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const GET_CATEGORY_ERROR = 'GET_CATEGORY_ERROR';

export const getData = (params: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_DATA_PENDING,
    });

    const response = await BUSINESS_API.getData(params);
    dispatch({
      type: GET_DATA_SUCCESS,
      payload: { data: response.data },
    });
  } catch (err) {
    dispatch({ type: GET_DATA_ERROR, payload: { data: err } });
  }
};

export const getCategory = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_CATEGORY_PENDING,
    });

    const response = await BUSINESS_API.getCategory();
    dispatch({
      type: GET_CATEGORY_SUCCESS,
      payload: { data: response.data },
    });
  } catch (err) {
    dispatch({ type: GET_CATEGORY_ERROR, payload: { data: err } });
  }
};
