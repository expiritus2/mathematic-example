import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

const TextField = (props) => {
    const { className, onChange, value, placeholder } = props;

    return (
        <div className={classNames(styles.textField, className)}>
            <input className={styles.field} type="text" onChange={onChange} value={value} placeholder={placeholder} />
        </div>
    );
};

TextField.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextField.defaultProps = {
    className: '',
    placeholder: '',
    onChange: () => {},
    value: null,
};

export default TextField;
