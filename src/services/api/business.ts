import axios from 'axios';

const { VITE_API_URL, VITE_API_KEY } = import.meta.env;
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

export interface SearchParams {
  term?: string | null;
  location?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  price?: number | null;
  categories?: string | null;
  limit?: number | null;
  offset?: number | null;
  sort_by?: string | null;
}

export function getBusiness(params: SearchParams) {
  return axios({
    method: 'GET',
    url: `${corsAnywhere}${VITE_API_URL}/search`,
    params,
    headers: {
      Authorization: `Bearer ${VITE_API_KEY}`,
      accept: 'application/json',
    },
  });
}

export function getDetail(id: string) {
  return axios({
    method: 'GET',
    url: `${corsAnywhere}${VITE_API_URL}/${id}`,
    headers: {
      Authorization: `Bearer ${VITE_API_KEY}`,
      accept: 'application/json',
    },
  });
}

export function getReview(id: string) {
  return axios({
    method: 'GET',
    url: `${corsAnywhere}${VITE_API_URL}/${id}/reviews`,
    params: {
      limit: 10,
      sort_by: 'yelp_sort',
    },
    headers: {
      Authorization: `Bearer ${VITE_API_KEY}`,
      accept: 'application/json',
    },
  });
}
