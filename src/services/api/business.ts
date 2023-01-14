import axios from 'axios';

const { VITE_API_URL, VITE_ACCESS_KEY } = import.meta.env;
const url = `${VITE_API_URL}/business`;

export interface Params {
  q?: String;
  category?: String;
  location?: String;
  open_now?: boolean;
  transaction?: String;
  price?: String;
  page?: number;
  limit?: number;
  orderby?: String;
  sort?: String;
}

export interface BodyAddData {
  name: String;
  images: any[];
  transactions: String;
  price: String;
  phone: String;
  address1: String;
  address2: String;
  address3: String;
  latitude: String;
  longitude: String;
  city: String;
  state: String;
  country: String;
  zip_code: String;
  categories: String[];
}

export interface BodyUpdateData {
  name?: String;
  images?: any[];
  transactions?: String;
  price?: String;
  phone?: String;
  address1?: String;
  address2?: String;
  address3?: String;
  latitude?: String;
  longitude?: String;
  city?: String;
  state?: String;
  country?: String;
  zip_code?: String;
  categories?: String[];
}

export function getData(params: Params) {
  return axios({
    method: 'GET',
    url: `${url}/search`,
    params,
    headers: {
      'x-access-key': VITE_ACCESS_KEY,
    },
  });
}

export function getCategory() {
  return axios({
    method: 'GET',
    url: `${url}/categories`,
    headers: {
      'x-access-key': VITE_ACCESS_KEY,
    },
  });
}

export function addData(data: BodyAddData) {
  return axios({
    method: 'POST',
    url: `${url}`,
    data,
    headers: {
      'x-access-key': VITE_ACCESS_KEY,
    },
  });
}

export function updateData(data: BodyUpdateData, id: String) {
  return axios({
    method: 'POST',
    url: `${url}/${id}`,
    data,
    headers: {
      'x-access-key': VITE_ACCESS_KEY,
    },
  });
}

export function deleteData(id: String) {
  return axios({
    method: 'DELETE',
    url: `${url}/${id}`,
    headers: {
      'x-access-key': VITE_ACCESS_KEY,
    },
  });
}
