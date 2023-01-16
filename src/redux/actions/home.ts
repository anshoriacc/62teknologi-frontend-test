import { Dispatch } from '../types';
import { BUSINESS_API } from '../../services/api';
import { SearchParams } from '../../services/api/business';

export const GET_BUSINESS_PENDING = 'GET_BUSINESS_PENDING';
export const GET_BUSINESS_SUCCESS = 'GET_BUSINESS_SUCCESS';
export const GET_BUSINESS_ERROR = 'GET_BUSINESS_ERROR';
export const RESET_DATA = 'RESET_DATA';

export const getBusiness =
  (params: SearchParams) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: GET_BUSINESS_PENDING,
      });

      const response = await BUSINESS_API.getBusiness(params);
      dispatch({
        type: GET_BUSINESS_SUCCESS,
        payload: { data: response.data, params },
      });
    } catch (err) {
      dispatch({
        type: GET_BUSINESS_ERROR,
        payload: { data: err?.response.data.error },
      });
    }
  };

export const resetData = () => (dispatch: Dispatch) => {
  dispatch({
    type: RESET_DATA,
  });
};
