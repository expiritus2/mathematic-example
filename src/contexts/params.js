import { createContext } from 'react';

export const DEFAULT_PARAMS = {
    addSubtractAction: '',
    multiplyAction: '',
    addSubtractRange: 100,
    multiplyRange: 20,
};

export default createContext({
    params: DEFAULT_PARAMS,
    setParams: () => {},
});
