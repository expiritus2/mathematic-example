import { useContext } from 'react';

import ParamsContext from 'contexts/params';

const useParams = () => {
    const { params, setParams } = useContext(ParamsContext);
    return { params, setParams };
};

export default useParams;
