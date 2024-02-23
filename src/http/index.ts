import axios from 'axios';

const BASE_URL = './locales';

export function createClient() {
  return axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  });
}
