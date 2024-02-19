export interface Answer {
  title: string;
  type:
    | 'single-select'
    | 'multiple-select'
    | 'single-select-image'
    | 'bubble'
    | 'email';
  answer: string;
}
