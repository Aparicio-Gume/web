interface BlockTeenScreenProps {
  balance: number;
  onExit: () => void;
}

const BlockTeenScreen = ({ balance, onExit }: BlockTeenScreenProps) => {
  const balanceMT = (balance * 64.5).toFixed(2).replace('.', ',');

  const handleActivate = () => {
    window.open('https://ever.prygoat.com/checkouts/pry-checkout/', '_blank');
  };

  return (
    <div className="flex flex-col gap-6 mt-4">
      {/* Rejected banner */}
      <div className="bg-[hsl(var(--primary))] rounded-2xl p-8 flex flex-col items-center text-center gap-3">
        <div className="w-16 h-16 rounded-full border-2 border-foreground/30 flex items-center justify-center">
          <span className="text-3xl text-foreground font-bold">!</span>
        </div>
        <h1 className="text-2xl font-bold text-foreground">Levantamento Recusado</h1>
        <p className="text-foreground/80 flex items-center gap-2">
          🔒 Carteira Block Teen Desativada
        </p>
      </div>

      {/* Balance section */}
      <div>
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground text-sm">Valor Disponível</p>
          <span className="text-2xl">💳</span>
        </div>
        <h2 className="text-4xl font-bold text-foreground mt-1">{balanceMT} MT</h2>
        <p className="text-[hsl(var(--success))] text-sm mt-1">Aguardando ativação da carteira</p>
      </div>

      <hr className="border-[hsl(var(--muted))]" />

      {/* Info card */}
      <div className="bg-[hsl(var(--muted))] rounded-xl p-4">
        <p className="text-foreground text-sm">
          Para levantar seu saldo, você precisa ativar sua carteira <strong>Block Teen</strong> primeiro.
        </p>
      </div>

      {/* What is Block Teen */}
      <div className="border-l-4 border-[hsl(var(--primary))] pl-4">
        <h3 className="text-xl font-bold text-foreground mb-2">O que é Block Teen?</h3>
        <p className="text-sm text-[hsl(var(--primary))]">
          Block Teen é uma <strong className="text-foreground">carteira digital segura</strong> que permite
          que você gerencie e converta facilmente <strong className="text-foreground">dólares para meticais</strong>{' '}
          <span className="text-[hsl(var(--success))]">(MT)</span>. Oferece transações rápidas,
          seguras e certificadas para jovens e adultos.
        </p>
      </div>

      {/* Trusted by */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-muted-foreground text-xs tracking-widest uppercase">Confiado por milhões de usuários</p>
        <div className="flex items-center gap-4 text-foreground font-bold text-sm">
          <span className="text-[hsl(var(--primary))]">NETFLIX</span>
          <span>❤️</span>
          <span>📷</span>
          <span>IG</span>
          <span>f</span>
          <span>v</span>
          <span>TT</span>
        </div>
        <p className="text-[hsl(var(--success))] text-sm flex items-center gap-1">
          🛡️ Compra Segura e Certificada
        </p>
      </div>

      {/* CTA */}
      <button onClick={handleActivate} className="w-full py-4 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
        📋 Ativar minha carteira Block Teen
      </button>

      <button onClick={onExit} className="cancel-button font-bold">
        Sair
      </button>

      <p className="text-center text-muted-foreground text-sm flex items-center justify-center gap-1">
        🔒 Transação segura e protegida
      </p>
    </div>
  );
};

export default BlockTeenScreen;
