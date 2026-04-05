import netflixLogo from '@/assets/netflix-logo.png';

interface WelcomeScreenProps {
  balance: number;
  onStart: () => void;
}

const WelcomeScreen = ({ balance, onStart }: WelcomeScreenProps) => (
  <div className="quiz-card flex flex-col items-center text-center gap-4 mt-4">
    <img src={netflixLogo} alt="Netflix" className="w-32 h-32 object-contain rounded-lg" />
    
    <h1 className="text-2xl font-bold text-foreground">Parabéns! 🎁</h1>
    
    <p className="text-muted-foreground text-base">
      Você foi selecionado para o novo sistema de recompensas do Netflix Rewards.
    </p>
    
    <p className="text-foreground font-semibold text-lg">
      Você já ganhou <span className="text-[hsl(var(--success))]">${balance.toFixed(2)}</span>! 🤑
    </p>
    
    <p className="text-muted-foreground text-sm">
      Ganhe <span className="text-[hsl(var(--success))] font-bold">+$100</span> por cada pergunta respondida!
    </p>
    
    <p className="text-muted-foreground text-sm">
      Responda mais 9 perguntas e faça seu primeiro levantamento!
    </p>
    
    <button onClick={onStart} className="cta-button mt-2">
      Clique aqui para começar.
    </button>
  </div>
);

export default WelcomeScreen;
