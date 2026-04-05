interface BalanceBadgeProps {
  balance: number;
}

const BalanceBadge = ({ balance }: BalanceBadgeProps) => (
  <div className="balance-badge">
    <span>💰</span>
    <span>${balance.toFixed(2)}</span>
  </div>
);

export default BalanceBadge;
