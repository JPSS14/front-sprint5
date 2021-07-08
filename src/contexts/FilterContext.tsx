import React from 'react';

interface Filter{

    filter: string;
    setFilter: (arg: string) => void;
}

const FilterContext = React.createContext<Filter>({filter: '', setFilter: () => ''});

export default FilterContext;