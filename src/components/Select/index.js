import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Select = (props) => {
    const { className, options, onChange, value } = props;

    return (
        <div className={classNames(styles.select, className)}>
            <select className={styles.field} onChange={onChange} value={value}>
                {options.map(({ label, value: val }) => (
                    <option className={styles.option} key={val} value={val}>{label}</option>
                ))}
            </select>
        </div>
    );
};

Select.propTypes = {
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })),
    onChange: PropTypes.func,
    value: PropTypes.string,
};

Select.defaultProps = {
    className: '',
    options: [],
    onChange: () => {},
    value: '',
};

export default Select;
