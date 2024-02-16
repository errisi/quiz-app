const BASE_URL = '/Questions.json';

async function request(url: string) {
  return fetch(BASE_URL + url).then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
}

export const getQuestions = () => {
  return request('');
};
