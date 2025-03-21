/* eslint-disable @next/next/no-img-element */
import { IQuestion } from '@/app/services/store';
import { FC } from 'react';

type Props = {
  question: IQuestion;
  selectedAnswers: string[];
  handleSelect: (value: string | string[]) => void;
};

export const BubbleSelect: FC<Props> = ({
  question,
  selectedAnswers,
  handleSelect,
}) => {
  return (
    <div className="flex flex-col items-center justify-between h-[calc(100%-160px)] max-h-[68vh]">
      <div className="max-w-full min-h-[160px] flex justify-start overflow-x-auto flex-wrap">
        <div className="flex">
          {question.options.map((option, index) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              aria-label="toggle-checkbox"
              className={`w-[88px] relative h-[88px] flex flex-col gap-2 justify-center items-center text-center font-medium cursor-pointer rounded-full border-3 transition-all ${
                selectedAnswers.includes(option.value)
                  ? 'bg-primary-light border-[#1677ff]'
                  : 'bg-primary-light/50 border-[#1677ff]/40 hover:bg-primary-light/70'
              } ${index % 2 === 0 ? 'self-end' : ''}`}
            >
              {option.icon && (
                <div className="w-full h-full absolute">
                  <img
                    src={option.icon.src}
                    alt={option.value}
                    className="w-full h-full absolute rounded-full"
                  />

                  <div className="w-full h-full absolute bg-black/30 rounded-full" />
                </div>
              )}
              <span className="text-sm z-2 text-white font-semibold text-text-primary-light">
                {option.value}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
