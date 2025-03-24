'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAppStore } from '../services/store';
import { questions } from '../quiz/questions';
import { appService } from '../services/service';
import { Button, Divider, Tag } from 'antd';
import { UndoOutlined } from '@ant-design/icons';

export default function QuizResults() {
  const { answers } = useAppStore();
  const { push } = useRouter();
  const suitableHotels = appService.getSuitableHotels();

  useEffect(() => {
    if (answers.length < questions.length) {
      push('/quiz');
    }

    if (answers.length === questions.length) {
      localStorage.setItem('quizAnswers', JSON.stringify(answers));
    }
  }, [answers, push]);

  const normalizePriceLevel = (level: string) => {
    return level === 'Economy, Economy-Medium, Medium-Luxury, Luxury'
      ? 'Economy–Luxury'
      : level;
  };

  const renderMainRegions = (regionsStr: string) => {
    const regions = regionsStr.split(',').map((r) => r.trim());

    if (regions.includes('Worldwide')) {
      return <Tag color="gold">Worldwide</Tag>;
    }
    return regions.map((region, idx) => (
      <Tag key={idx} color="blue" className="!mb-1">
        {region}
      </Tag>
    ));
  };

  return (
    <div className="min-h-[100svh] bg-gray-100 p-4">
      <div className="container mx-auto mb-4">
        <h1 className="text-4xl text-balance font-semibold mt-6 pb-2 mb-8 text-center text-gradient">
          Results of selection of loyalty program
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          {suitableHotels.map(({ hotel, score }) => (
            <div
              key={hotel.hotelChain}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-transform hover:scale-105"
            >
              <img
                src={hotel.img.src}
                alt={hotel.hotelChain}
                className="!w-40 !h-40 object-contain mb-4 rounded-md !aspect-square"
              />
              <h2 className="text-lg font-semibold mb-2 text-gray-800">
                {hotel.hotelChain}
              </h2>
              <p className={`text-gray-700`}>
                Score foy you:{' '}
                <span
                  className={`${
                    score === 100
                      ? 'text-purple-500'
                      : score >= 75
                      ? 'text-green-500'
                      : score >= 50
                      ? 'text-yellow-500'
                      : 'text-red-500'
                  }`}
                >
                  {Math.round(score)}%
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {hotel.loyaltyProgram}
              </p>

              <Divider className="my-2" />

              <div className="text-sm text-gray-700 space-y-1 w-full">
                <p>
                  <strong>Loyalty Program:</strong> {hotel.loyaltyProgram}
                </p>
                <p>
                  <strong>Hotels in network:</strong> {hotel.numberOfHotels}
                </p>
                <p>
                  <strong>Price level:</strong>{' '}
                  {normalizePriceLevel(hotel.priceLevel)}
                </p>
                <p className="flex flex-col gap-1">
                  <strong className="">Main regions:</strong>{' '}
                  <div className="flex w-full flex-wrap">
                    {renderMainRegions(hotel.mainRegions)}
                  </div>
                </p>
                <p>
                  <strong>Airline partnerships:</strong>{' '}
                  {hotel.partnershipWithAirlines === 'Yes' ? (
                    <Tag color="green">Yes</Tag>
                  ) : (
                    <Tag color="red">No</Tag>
                  )}
                </p>

                {!!hotel.bonusesForFrequentTravelers && (
                  <p className="flex flex-col gap-1">
                    <strong className="">Frequent traveler bonuses:</strong>{' '}
                    <div className="flex w-full flex-wrap">
                      {hotel.bonusesForFrequentTravelers
                        .split(',')
                        .map((vibe: string, index: number) => (
                          <Tag key={index} color="geekblue" className="!mb-1">
                            {vibe}
                          </Tag>
                        ))}
                    </div>
                  </p>
                )}

                <p className="flex flex-col gap-1">
                  <strong>Hotel vibes:</strong>{' '}
                  <div className="flex w-full flex-wrap">
                    {hotel.hotelVibes
                      .split(',')
                      .map((vibe: string, index: number) => (
                        <Tag key={index} color="geekblue" className="!mb-1">
                          {vibe}
                        </Tag>
                      ))}
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            size="large"
            type="primary"
            className="w-full md:w-fit"
            onClick={appService.retakeQUiz}
            icon={<UndoOutlined />}
          >
            Retake quiz
          </Button>
        </div>
      </div>
    </div>
  );
}
