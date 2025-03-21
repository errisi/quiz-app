import { IAnswer, IAppStore, appStore } from "./store";
// import { $api } from "./interceptor";
import { BaseService } from "./baseService";
import { hotelChains } from "../quiz/hotelsChains";
import { questions } from "../quiz/questions";


class AppAPI extends BaseService<IAppStore> {
  constructor() {
    super(appStore);
  }

  setCurrentQuestionIndex = (currentQuestionIndex: number) => this.setState({ currentQuestionIndex })

  setAnswers = (answers: IAnswer[]) => this.setState({ answers })

  // Replace the addAnswer method with updateAnswer
  updateAnswer = (answer: IAnswer) => this.setState((c) => {
    const existingAnswerIndex = c.answers.findIndex(a => a.questionId === answer.questionId);

    if (existingAnswerIndex >= 0) {
      // Update existing answer
      const updatedAnswers = [...c.answers];
      updatedAnswers[existingAnswerIndex] = answer;
      return { ...c, answers: updatedAnswers };
    } else {
      // Add new answer
      return { ...c, answers: [...c.answers, answer] };
    }
  })

  retakeQUiz = () => {
    this.setState({ answers: [] })
    this.setCurrentQuestionIndex(0)
    localStorage.removeItem("quizAnswers")
  }

  getSuitableHotels = () => {
    const answers = this.getState().answers;

    if (answers.length < questions.length) {
      return [];
    }

    const selectedRegions = (answers.find(a => a.questionId === 0)?.answer as string[]) || [];
    const selectedPriceLevels = (answers.find(a => a.questionId === 1)?.answer as string[]) || [];
    const airlineMilesImportant = answers.find(a => a.questionId === 2)?.answer === "Yes";
    const selectedPerks = (answers.find(a => a.questionId === 3)?.answer as string[]) || [];
    const selectedVibes = (answers.find(a => a.questionId === 4)?.answer as string[]) || [];

    const maxScore = 3 + 3 + (airlineMilesImportant ? 2 : 0) + selectedPerks.length;

    return hotelChains
      .map(hotel => {
        if (!selectedRegions.some(region => hotel.mainRegions.includes(region))) {
          return { hotel, score: 0 };
        }

        let score = 0;

        if (selectedPriceLevels.some(price => hotel.priceLevel.includes(price))) {
          score += 3;
        }

        if (airlineMilesImportant && hotel.partnershipWithAirlines === "Yes") {
          score += 2;
        }

        if (selectedVibes.some(vibe => hotel.hotelVibes.includes(vibe))) {
          score += 3;
        }

        score += selectedPerks.filter(perk => hotel.bonusesForFrequentTravelers.includes(perk)).length;

        const percentageScore = (score / maxScore) * 100;

        return { hotel, score: percentageScore };
      })
      .filter(result => result && result.score > 0)
      .sort((a, b) => b.score - a.score);
  };
}

export const appService = new AppAPI();