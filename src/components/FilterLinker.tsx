import * as React from 'react';
import '@scss/components/FilterLinker.scss';
import Linker from './ui/Linker';

interface FilterLinkerProps {
  type: string;
  name: string;
  color?: string;
}

const FilterLinker = ({ type, name, color }: FilterLinkerProps) => {
  return (
    <Linker
      url={`/list?${type}=${encodeURIComponent(name)}`}
      aria-label={`${type} ${encodeURIComponent(name)} 목록으로 이동`}
    >
      <div className={`filter-item ${color}-border`}>{name}</div>
    </Linker>
  );
};

export default FilterLinker;
