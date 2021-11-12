import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { action } from 'settings/constants/actions';
import { Select } from 'components';

import styles from './styles.module.scss';

const AddSubtract = (props) => {
    const { className, onChange, value } = props;

    const options = useMemo(() => ([
        { label: '', value: '' },
        { label: '+', value: action.PLUS },
        { label: '-', value: action.MINUS },
        { label: 'Mixed', value: action.MIXED },
    ]), []);

    return (
        <div className={classNames(styles.addSubtract, className)}>
            <Select options={options} onChange={onChange} value={value} />
        </div>
    );
};

AddSubtract.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

AddSubtract.defaultProps = {
    className: '',
    onChange: () => {},
    value: null,
};

export default AddSubtract;
