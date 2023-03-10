// actions
interface Payload {
  data?: any;
  params?: any;
}

interface Params {
  type: string;
  payload?: Payload;
}

export type Dispatch = (params: Params | Function) => void;
export type GetState = () => Reducers;

export interface Action {
  type: string;
  payload: Payload;
}

// combine reducers
export interface Reducers {
  home: HomeState;
}

// reducers
export interface HomeState {
  data: any[];
  meta: {
    page: number;
    limit: number;
    totalData: number;
    totalPage: number;
  };
  isLoadingHome: boolean;
}
