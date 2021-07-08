import React from 'react';

interface Loading{

    addRequest: () => void;
    removeRequest: () => void;
    isLoading: () => boolean;
}

const LoadingContext = React.createContext<Loading>({addRequest: () => 0, removeRequest: () => 0, isLoading: () => false});

export default LoadingContext;