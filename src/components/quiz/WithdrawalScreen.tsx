import { useState } from 'react';

interface WithdrawalScreenProps {
  balance: number;
  onCancel: () => void;
  onSubmit: () => void;
}

const WithdrawalScreen = ({ balance, onCancel, onSubmit }: WithdrawalScreenProps) => {
  const [name, setName] = useState('');
  const [method, setMethod] = useState<'mpesa' | 'emola'>('mpesa');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div className="quiz-card flex flex-col gap-5 mt-4">
      <div className="flex flex-col items-center gap-2">
        <span className="text-5xl">💰</span>
        <h1 className="text-2xl font-bold text-foreground">Fazer Levantamento</h1>
        <p className="text-muted-foreground text-sm">Seu saldo disponível:</p>
        <p className="text-3xl font-bold text-[hsl(var(--success))]">${balance.toFixed(2)}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-foreground">Nome Completo</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full bg-[hsl(var(--muted))] text-foreground rounded-[var(--radius)] p-3 border-none outline-none placeholder:text-muted-foreground"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-foreground">Dados de Levantamento</label>
        <div className="flex gap-3">
          <button
            onClick={() => setMethod('mpesa')}
            className={`flex-1 py-3 rounded-[var(--radius)] font-semibold transition-colors ${
              method === 'mpesa' 
                ? 'bg-[hsl(var(--accent))] text-foreground' 
                : 'bg-[hsl(var(--muted))] text-muted-foreground'
            }`}
          >
            M-Pesa
          </button>
          <button
            onClick={() => setMethod('emola')}
            className={`flex-1 py-3 rounded-[var(--radius)] font-semibold transition-colors ${
              method === 'emola' 
                ? 'bg-[hsl(var(--accent))] text-foreground' 
                : 'bg-[hsl(var(--muted))] text-muted-foreground'
            }`}
          >
            E-Mola
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-foreground">Número de Celular (9 dígitos)</label>
        <input
          type="tel"
          placeholder="Ex: 841234567"
          value={phone}
          onChange={e => {
            const val = e.target.value.replace(/\D/g, '').slice(0, 9);
            setPhone(val);
          }}
          className="w-full bg-[hsl(var(--muted))] text-foreground rounded-[var(--radius)] p-3 border-none outline-none placeholder:text-muted-foreground"
        />
        <span className="text-xs text-muted-foreground">{phone.length}/9 dígitos</span>
      </div>

      <button onClick={handleSubmit} className="cta-button">
        Fazer Levantamento
      </button>

      <button onClick={onCancel} className="cancel-button">
        Cancelar
      </button>
    </div>
  );
};

export default WithdrawalScreen;
