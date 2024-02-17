const BASE_URL = '/locales';

async function request(url: string) {
  return fetch(BASE_URL + url).then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
}

export const getQuestions = (locale: 'en' | 'fr' | 'de' | 'es') => {
  return request(`/${locale}/Questions.json`);
};
