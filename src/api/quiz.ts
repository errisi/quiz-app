import { httpClient } from '../http/httpClient';
import { Answer } from '../types/Answers';
import { Locale } from '../types/Locale';

export async function getQuestions(locale: Locale) {
  return httpClient.get(`/${locale}/Questions.json`);
}

export async function postAnswers(answers: Answer[]) {
  const email = answers.find((a) => a.title === 'Email')
    ? answers.find((a) => a.title === 'Email')?.answer
    : null;

  return httpClient.post('/answers', {
    email,
    answers,
  });
}
