import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Button = (props) => {
    const { className, type, title, onClick } = props;

    return (
        <div className={classNames(styles.button, className)}>
            <button className={styles.btn} type={type} onClick={onClick}>{title}</button>
        </div>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    className: '',
    type: 'button',
    title: 'Submit',
    onClick: () => {},
};

export default Button;
