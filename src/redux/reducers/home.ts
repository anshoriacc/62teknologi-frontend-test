import {
  GET_BUSINESS_ERROR,
  GET_BUSINESS_PENDING,
  GET_BUSINESS_SUCCESS,
  RESET_DATA,
} from '../actions';
import { Action, HomeState } from '../types';

const initialState: HomeState = {
  data: [],
  meta: {
    page: 1,
    limit: 10,
    totalData: 0,
    totalPage: 1,
  },
  isLoadingHome: false,
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case GET_BUSINESS_PENDING:
      return {
        ...state,
        isLoadingHome: true,
      };

    case GET_BUSINESS_SUCCESS:
      return {
        ...state,
        isLoadingHome: false,
        data: payload.data.businesses,
        meta: {
          page: payload.params.offset / payload.params.limit + 1,
          limit: payload.params.limit,
          totalData: payload.data.total,
          totalPage: payload.data.total / payload.params.limit,
        },
      };

    case GET_BUSINESS_ERROR:
      return {
        ...state,
        ...initialState,
      };

    case RESET_DATA:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
