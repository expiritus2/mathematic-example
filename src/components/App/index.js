import React, { useState } from 'react';

import ParamsContext, { DEFAULT_PARAMS } from 'contexts/params';

import { Content } from 'components';

const App = () => {
    const [params, setParams] = useState(DEFAULT_PARAMS);

    const onSetParams = (newParams = {}) => {
        setParams({ ...params, ...newParams });
    };

    return (
        <ParamsContext.Provider value={{ params, setParams: onSetParams }}>
            <Content />
        </ParamsContext.Provider>
    );
};

export default App;
