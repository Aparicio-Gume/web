import { useState, useCallback } from 'react';
import { questions, INITIAL_BALANCE } from '@/data/questions';
import WelcomeScreen from '@/components/quiz/WelcomeScreen';
import QuizScreen from '@/components/quiz/QuizScreen';
import CompletionScreen from '@/components/quiz/CompletionScreen';
import WithdrawalScreen from '@/components/quiz/WithdrawalScreen';
import ProcessingScreen from '@/components/quiz/ProcessingScreen';
import BlockTeenScreen from '@/components/quiz/BlockTeenScreen';
import RewardModal from '@/components/quiz/RewardModal';
import BalanceBadge from '@/components/quiz/BalanceBadge';

type Screen = 'welcome' | 'quiz' | 'completion' | 'withdrawal' | 'processing' | 'blockteen';

const Index = () => {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [balance, setBalance] = useState(INITIAL_BALANCE);
  const [showReward, setShowReward] = useState(false);
  const [lastReward, setLastReward] = useState(0);

  const handleStart = useCallback(() => {
    setScreen('quiz');
  }, []);

  const handleAnswer = useCallback(() => {
    const reward = questions[currentQuestion].reward;
    setLastReward(reward);
    setBalance(prev => Math.round((prev + reward) * 100) / 100);
    setShowReward(true);
  }, [currentQuestion]);

  const handleRewardClose = useCallback(() => {
    setShowReward(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setScreen('completion');
    }
  }, [currentQuestion]);

  const handleWithdrawal = useCallback(() => {
    setScreen('withdrawal');
  }, []);

  const handleWithdrawalSubmit = useCallback(() => {
    setScreen('processing');
  }, []);

  const handleProcessingComplete = useCallback(() => {
    setScreen('blockteen');
  }, []);

  const handleCancel = useCallback(() => {
    setScreen('completion');
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center max-w-md mx-auto relative">
      <div className="w-full flex justify-end p-4">
        <BalanceBadge balance={balance} />
      </div>

      <div className="w-full px-4 pb-8 flex-1">
        {screen === 'welcome' && (
          <WelcomeScreen balance={balance} onStart={handleStart} />
        )}
        {screen === 'quiz' && (
          <QuizScreen
            question={questions[currentQuestion]}
            questionIndex={currentQuestion}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        )}
        {screen === 'completion' && (
          <CompletionScreen balance={balance} onWithdraw={handleWithdrawal} />
        )}
        {screen === 'withdrawal' && (
          <WithdrawalScreen balance={balance} onCancel={handleCancel} onSubmit={handleWithdrawalSubmit} />
        )}
        {screen === 'processing' && (
          <ProcessingScreen onComplete={handleProcessingComplete} />
        )}
        {screen === 'blockteen' && (
          <BlockTeenScreen balance={balance} onExit={handleCancel} />
        )}
      </div>

      {showReward && (
        <RewardModal reward={lastReward} onClose={handleRewardClose} />
      )}
    </div>
  );
};

export default Index;
