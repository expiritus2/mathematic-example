import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { action } from 'settings/constants/actions';
import { Select } from 'components';

import styles from './styles.module.scss';

const MultiplyDivide = (props) => {
    const { className, onChange, value } = props;

    const options = useMemo(() => ([
        { label: '', value: '' },
        { label: '*', value: action.PLUS },
        { label: '/', value: action.MINUS },
        { label: 'Mixed', value: action.MIXED },
    ]), []);

    return (
        <div className={classNames(styles.multiplyDivide, className)}>
            <Select options={options} onChange={onChange} value={value} />
        </div>
    );
};

MultiplyDivide.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

MultiplyDivide.defaultProps = {
    className: '',
    onChange: () => {},
    value: null,
};

export default MultiplyDivide;
