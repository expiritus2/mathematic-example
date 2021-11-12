import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Params, Examples } from 'components';

import styles from './styles.module.scss';

const Content = (props) => {
    const { className } = props;

    return (
        <div className={classNames(styles.content, className)}>
            <Params />
            <Examples />
        </div>
    );
};

Content.propTypes = {
    className: PropTypes.string,
};

Content.defaultProps = {
    className: '',
};

export default Content;
