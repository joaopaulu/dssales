import axios from 'axios';
import { formtatDateToServer } from './formatters';
import { FilterData } from './types';

const baseURL = 'http://localhost:8080';

export const makeRequest = axios.create({
  baseURL
});

export const buildFilterParams = (filterData?: FilterData) => {
  return {
    minDate: formtatDateToServer(filterData?.dates?.[0]),
    maxDate: formtatDateToServer(filterData?.dates?.[1]),
    gender: filterData?.gender
  };
};
