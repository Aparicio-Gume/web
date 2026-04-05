import { useEffect, useState } from 'react';

interface ProcessingScreenProps {
  onComplete: () => void;
}

const ProcessingScreen = ({ onComplete }: ProcessingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="quiz-card flex flex-col items-center text-center gap-6 mt-4">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r="45"
            stroke="hsl(var(--muted))"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="50" cy="50" r="45"
            stroke="hsl(var(--primary))"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-100"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl">💰</span>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-foreground">Processando...</h2>
      <p className="text-muted-foreground">Aguarde um momento</p>

      <div className="w-full">
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-muted-foreground text-sm mt-2">{progress}%</p>
      </div>
    </div>
  );
};

export default ProcessingScreen;
