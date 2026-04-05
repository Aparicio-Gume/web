import netflixLogo from '@/assets/netflix-logo.png';
import mozambiqueFlag from '@/assets/mozambique-flag.png';
import emolaBanner from '@/assets/emola-banner.png';
import type { Question, QuestionImage } from '@/data/questions';

interface QuizScreenProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: () => void;
}

const imageMap: Record<QuestionImage, string> = {
  netflix: netflixLogo,
  flag: mozambiqueFlag,
  emola: emolaBanner,
};

const QuizScreen = ({ question, questionIndex, totalQuestions, onAnswer }: QuizScreenProps) => {
  const progress = ((questionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="quiz-card flex flex-col gap-4 mt-4">
      <img
        src={imageMap[question.image]}
        alt={question.image}
        className="w-full h-48 object-contain rounded-lg"
      />

      <div className="flex justify-between text-muted-foreground text-sm">
        <span>Progresso</span>
        <span>{questionIndex + 1}/{totalQuestions} perguntas</span>
      </div>

      <div className="progress-bar-track">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <h2 className="text-xl font-bold text-foreground text-center mt-2">
        {question.question}
      </h2>

      <div className="flex flex-col gap-3">
        {question.options.map((option) => (
          <button key={option} onClick={onAnswer} className="option-button">
            {option}
          </button>
        ))}
      </div>

      <p className="text-center text-sm">
        <span className="text-[hsl(var(--success))] font-bold">+$100</span>
        <span className="text-muted-foreground"> ao responder esta pergunta</span>
      </p>
    </div>
  );
};

export default QuizScreen;
