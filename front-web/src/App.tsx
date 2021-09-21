import PieChartCard from 'components/pie-chart-card';
import SalesByDate from 'components/sales-by-date';
import SalesTable from 'components/sales-table';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';

import SalesSummary from './components/sales-summary';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Brasília', 'Rio', 'São Paulo']}
            series={[40, 30, 60]}
          />
          <PieChartCard
            name="Pagamento"
            labels={['Crédito', 'Débito', 'Dinheiro']}
            series={[20, 60, 80]}
          />
        </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
