import { StaticImageData } from "next/image";
import { create, useStore } from "zustand";

export interface IAnswer {
  questionId: number;
  answer: string | string[];
}

export interface IOption {
  value: string;
  label: string;
  icon?: StaticImageData;
}

export interface IQuestion {
  id: number;
  ownerSlug: string;
  type: 'multiple-select' | 'single-select' | 'bubble';
  title: string;
  hint?: string;
  options: IOption[];
}

export interface IAppStore {
  answers: IAnswer[],
  currentQuestionIndex: number,
}

export const appStore = create<IAppStore>(() => ({
  answers: [],
  currentQuestionIndex: 0,
}));

export const useAppStore = () => useStore(appStore);
