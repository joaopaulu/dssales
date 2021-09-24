import PieChartCard from 'components/pie-chart-card';
import SalesByDateComponent from 'components/sales-by-date';
import SalesTable from 'components/sales-table';
import { FilterData } from 'core/utils/types';
import { useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import SalesSummary from './components/sales-summary';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDateComponent filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummary filterData={filterData} />
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
