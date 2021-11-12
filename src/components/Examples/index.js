import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// import { useParams } from 'hooks';
import styles from './styles.module.scss';

const Examples = (props) => {
    const { className } = props;

    return (
        <div className={classNames(styles.examples, className)}>
            Examples
        </div>
    );
};

Examples.propTypes = {
    className: PropTypes.string,
};

Examples.defaultProps = {
    className: '',
};

export default Examples;
