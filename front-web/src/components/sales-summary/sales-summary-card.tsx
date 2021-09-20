import './styles.css';

type Props = {
  value: number;
  label: string;
  icon: React.ReactNode;
};

const SalesSummaryCard = ({ value, label, icon }: Props) => {
  return (
    <div className="sales-summary-card base-card">
      {icon}
      <h3 className="sales-summary-card-value">{value}</h3>
      <div className="sales-summary-card-label">{label}</div>
    </div>
  );
};

export default SalesSummaryCard;
