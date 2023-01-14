import {
  GET_DATA_ERROR,
  GET_DATA_PENDING,
  GET_DATA_SUCCESS,
  GET_CATEGORY_ERROR,
  GET_CATEGORY_PENDING,
  GET_CATEGORY_SUCCESS,
} from '../actions';
import { Action, HomeState } from '../types';

const initialState: HomeState = {
  data: [],
  meta: {
    page: 1,
    limit: 20,
    totalData: 0,
    totalPage: 1,
  },
  isLoadingHome: false,
  isLoadingCategories: false,
  categories: [],
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case GET_DATA_PENDING:
      return {
        ...state,
        isLoadingHome: true,
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoadingHome: false,
        data: payload.data.data,
      };

    case GET_DATA_ERROR:
      return {
        ...state,
        isLoadingHome: false,
        data: [],
      };

    case GET_CATEGORY_PENDING:
      return {
        ...state,
        isLoadingCategories: true,
      };

    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoadingCategories: false,
        categories: payload.data,
      };

    case GET_CATEGORY_ERROR:
      return {
        ...state,
        isLoadingCategories: false,
        categories: [],
      };

    default:
      return state;
  }
};
