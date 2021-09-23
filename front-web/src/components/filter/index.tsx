import { FilterData, Gender } from 'core/utils/types';
import flatpickLib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import 'flatpickr/dist/themes/material_green.css';
import React, { useState } from 'react';
import FlatPicker from 'react-flatpickr';
import './styles.css';

flatpickLib.localize(Portuguese);

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

const Filter = ({ onFilterChange }: Props) => {
  const [dates, setDates] = useState<Date[]>([]);
  const [gender, setGender] = useState<Gender>();

  const onChangeDate = (dates: Date[]) => {
    if (dates.length === 2) {
      setDates(dates);
      onFilterChange({ dates, gender });
    }
  };

  const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value as Gender;

    setGender(selectedGender);
    onFilterChange({ dates, gender: selectedGender });
  };
  return (
    <header className="filter-container base-card">
      <FlatPicker
        options={{
          mode: 'range',
          dateFormat: 'd/m/Y',
          showMonths: 2
        }}
        className="filter-input"
        onChange={onChangeDate}
        placeholder="Selecione um período"
      />
      <select className="filter-input" value={gender} onChange={onChangeGender}>
        <option value="">Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outro</option>
      </select>
    </header>
  );
};

export default Filter;
