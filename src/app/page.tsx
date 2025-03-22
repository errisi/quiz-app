/* eslint-disable @next/next/no-img-element */
'use client';

import { Hotel, Brain, Star, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button, Card } from 'antd';
import logoImg from './assets/logo.svg';

export default function Home() {
  const features = [
    {
      icon: <Hotel className="w-6 h-6" />,
      title: `Smart Hotel Matching`,
      description: `Get personalized recommendations based on your travel patterns`,
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: `AI-Powered Analysis`,
      description: `Advanced algorithms analyze program benefits and your preferences`,
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: `Points Optimization`,
      description: `Learn how to maximize your loyalty points and rewards`,
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: `Elite Status Benefits`,
      description: `Compare elite status perks across different programs`,
    },
  ];

  return (
    <div className="min-h-[100svh] bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center text-[#cb6ce6] text-3xl font-semibold w-full justify-center mb-4 select-none gap-2">
          <img
            src={logoImg.src}
            alt=""
            className="object-contain w-[60px] h-[60px]"
          />
          LoyaltyFinder
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl text-gradient font-bold pb-6">
            {`Find Your Perfect Hotel Loyalty Program`}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {`Let our intelligent quiz bot guide you to the loyalty program that matches your travel style`}
          </p>
          <Button
            href="/quiz"
            size="large"
            className="animate-bounce"
            type="primary"
          >
            {`Take the Quiz`}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`p-6 h-full hover:shadow-lg transition-transform duration-300 hover:scale-105`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              alt="Luxury Hotel 1"
              className="w-24 h-24 rounded-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd"
              alt="Luxury Hotel 2"
              className="w-24 h-24 rounded-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
              alt="Luxury Hotel 3"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <p className="text-muted-foreground mb-8">
            {`Trusted by thousands of travelers worldwide`}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
