interface CompletionScreenProps {
  balance: number;
  onWithdraw: () => void;
}

const CompletionScreen = ({ balance, onWithdraw }: CompletionScreenProps) => (
  <div className="quiz-card flex flex-col items-center text-center gap-4 mt-4">
    <span className="text-6xl">🎉</span>
    
    <h1 className="text-2xl font-bold text-foreground">Incrível!</h1>
    
    <p className="text-muted-foreground text-lg">
      Você completou todas as perguntas!
    </p>
    
    <p className="text-muted-foreground text-sm">Seu saldo total:</p>
    <p className="text-4xl font-bold text-[hsl(var(--success))]">
      ${balance.toFixed(2)}
    </p>
    
    <button onClick={onWithdraw} className="cta-button flex items-center justify-center gap-2 mt-4">
      <span>💰</span> Fazer Levantamento
    </button>
    
    <p className="text-muted-foreground text-sm mt-2">
      O levantamento será processado via M-Pesa ou E-Mola em até 24 horas
    </p>
  </div>
);

export default CompletionScreen;
