'use client';

import { Button, Checkbox, Progress } from 'antd';
import { useState, useEffect } from 'react';
import { useAppStore } from '../services/store';
import { questions } from './questions';
import { appService } from '../services/service';
import { BubbleSelect } from './components/BubbleSelect';
import { useRouter } from 'next/navigation';

export default function Quiz() {
  const { currentQuestionIndex, answers } = useAppStore();
  const currentQuestion = questions[currentQuestionIndex];
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const { push } = useRouter();

  useEffect(() => {
    const savedAnswers = localStorage.getItem('quizAnswers');

    if (savedAnswers) {
      appService.setAnswers(JSON.parse(savedAnswers));

      if (JSON.parse(savedAnswers).length === questions.length) {
        push('/list');
      }
    }
  }, []);

  useEffect(() => {
    const existingAnswer = answers.find(
      (a) => a.questionId === currentQuestionIndex
    );
    if (existingAnswer) {
      if (Array.isArray(existingAnswer.answer)) {
        setSelectedAnswers(existingAnswer.answer);
      } else {
        setSelectedAnswers([existingAnswer.answer]);
      }
    } else {
      setSelectedAnswers([]);
    }
  }, [currentQuestionIndex, answers]);

  const handleSelect = (value: string | string[]) => {
    if (currentQuestion.type === 'single-select') {
      appService.updateAnswer({
        questionId: currentQuestionIndex,
        answer: value,
      });
      handleNext();
    } else {
      setSelectedAnswers((prev) => {
        if (Array.isArray(value)) {
          return [...prev, ...value];
        }
        return prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value];
      });
    }
  };

  const handleNext = () => {
    if (currentQuestion.type !== 'single-select') {
      appService.updateAnswer({
        questionId: currentQuestionIndex,
        answer: selectedAnswers,
      });
    }

    if (currentQuestionIndex < questions.length - 1) {
      appService.setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      push('/list');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      appService.setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="min-h-[100svh] flex justify-center bg-gradient-to-b from-background to-secondary">
      <div className="max-w-[50rem] w-full px-4 py-12">
        <div className="flex flex-col items-center gap-2 mb-6">
          <p className="font-bold text-lg text-gray-500">
            <span className="text-[#1677ff]">{currentQuestionIndex + 1}</span>/
            {questions.length}
          </p>
          <Progress
            status="active"
            strokeColor={{ from: '#108ee9', to: '#87d068' }}
            percent={((currentQuestionIndex + 1) / questions.length) * 100}
            showInfo={false}
          />
        </div>

        <p className="font-semibold text-2xl mb-6 text-gray-700 text-center">
          {currentQuestion.title}
        </p>

        {!!currentQuestion.hint && (
          <p className="font-semibold text-md text-gray-500 text-center mb-6">
            {currentQuestion.hint}
          </p>
        )}

        <div className="flex flex-col gap-2 w-full">
          {currentQuestion.type === 'bubble' ? (
            <BubbleSelect
              question={currentQuestion}
              selectedAnswers={selectedAnswers}
              handleSelect={handleSelect}
            />
          ) : (
            <>
              {currentQuestion.options.map(({ value, label }) => (
                <div
                  key={value}
                  className={`w-full flex items-center justify-between bg-[#1677ff]/20 hover:bg-[#1677ff]/50 cursor-pointer rounded-md px-6 py-4 text-gray-700 ${
                    selectedAnswers.includes(value) ? 'bg-[#1677ff]' : ''
                  }`}
                  onClick={() => handleSelect(value)}
                >
                  {label}

                  {currentQuestion.type === 'multiple-select' && (
                    <Checkbox checked={selectedAnswers.includes(value)} />
                  )}
                </div>
              ))}
            </>
          )}
        </div>

        <div className="flex justify-between mt-6 gap-4">
          {currentQuestionIndex > 0 && (
            <Button
              size="large"
              onClick={handleBack}
              className="px-4 py-2 rounded-md flex-1"
            >
              Back
            </Button>
          )}

          {currentQuestion.type !== 'single-select' && (
            <Button
              size="large"
              onClick={handleNext}
              type="primary"
              className="px-4 py-2 rounded-md flex-1"
              disabled={
                selectedAnswers.length === 0 ||
                (currentQuestion.type === 'bubble' &&
                  selectedAnswers.length < 2) ||
                (currentQuestionIndex === 3 && selectedAnswers.length < 2)
              }
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
