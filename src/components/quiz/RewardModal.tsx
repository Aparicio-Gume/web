import { useEffect } from 'react';

interface RewardModalProps {
  reward: number;
  onClose: () => void;
}

const RewardModal = ({ reward, onClose }: RewardModalProps) => {
  useEffect(() => {
    // Play money sound
    const audio = new Audio('/sounds/money.mpeg');
    audio.volume = 0.7;
    audio.play().catch(() => {});

    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="quiz-card flex flex-col items-center text-center gap-3 max-w-sm w-full animate-in zoom-in-95 duration-300">
        <span className="text-6xl">🤑</span>
        <h2 className="text-2xl font-bold text-foreground">Parabéns!</h2>
        <p className="text-muted-foreground">Você ganhou mais</p>
        <p className="text-4xl font-bold text-[hsl(var(--success))]">
          +${reward.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default RewardModal;
