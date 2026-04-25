import React from 'react';

type FilterType = 'all' | 'active' | 'completed';

interface FilterTabsProps {
  currentFilter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ currentFilter, setFilter }) => {
  return (
    <div className="filter-tabs">
      <button
        className={currentFilter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={currentFilter === 'active' ? 'active' : ''}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        className={currentFilter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterTabs;
