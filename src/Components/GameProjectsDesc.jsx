import DailyWorkoutCard from "../GameProject/DailyWorkoutCard";
import QuizGameCard from "../GameProject/QuizGameCard";
import SimonGameCard from "../GameProject/SimonGameCard";

export function createGameCards(QuizControl, SimonControl, DailyWOControl) {
  return [
    {
      id: 1,
      control: QuizControl,
      component: <QuizGameCard quizControl={QuizControl} />,
    },
    {
      id: 2,
      control: SimonControl,
      component: (
        <SimonGameCard
          title1="SIMON"
          title2="GAME"
          simonControl={SimonControl}
        />
      ),
    },
    {
      id: 3,
      control: DailyWOControl,
      component: <DailyWorkoutCard dailyWOControl={DailyWOControl} />,
    },
  ];
}
