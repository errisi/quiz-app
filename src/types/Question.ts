export interface Question {
  id: number;
  ownerSlug: 'book-quiz';
  type: 'single-select' | 'multiple-select' | 'single-select-image' | 'bubble';
  title: string;
  hint: string | null;
  options: string[];
}
