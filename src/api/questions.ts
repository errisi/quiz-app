import { Locale } from '../types/Locale';

const BASE_URL = 'HolyWaterTest/public/locales';

async function request(url: string) {
  return fetch(BASE_URL + url).then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
}

export const getQuestions = (locale: Locale) => {
  return request(`/${locale}/Questions.json`);
};
