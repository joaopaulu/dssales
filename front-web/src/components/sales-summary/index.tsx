import { ReactComponent as AvatarIcon } from 'core/assets/images/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from 'core/assets/images/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from 'core/assets/images/done-icon.svg';
import { ReactComponent as SyncIcon } from 'core/assets/images/sync-icon.svg';
import { buildFilterParams, makeRequest } from 'core/utils/request';
import { FilterData, SalesSummaryData } from 'core/utils/types';
import { useState } from 'react';
import { useEffect, useMemo } from 'react';
import SalesSummaryCard from './sales-summary-card';
import './styles.css';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  avg: 0,
  count: 0,
  max: 0,
  min: 0
};

const SalesSummary = ({ filterData }: Props) => {
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales by date');
      });
  }, [params]);
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={summary?.avg?.toFixed(2)} label="Média" icon={<DoneIcon />} />
      <SalesSummaryCard value={summary?.count} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={summary?.min} label="Mínima" icon={<BarChartIcon />} />
      <SalesSummaryCard value={summary?.max} label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
};

export default SalesSummary;
