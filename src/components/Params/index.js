import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useParams } from 'hooks';
import { Button, TextField } from 'components';
import AddSubtract from './AddSubtract';
import MultiplyDivide from './MultiplyDivide';

import styles from './styles.module.scss';

const Params = (props) => {
    const { className } = props;
    const { params, setParams } = useParams();

    const onChangeAddSubtract = (e) => {
        setParams({ addSubtractAction: e.target.value });
    };

    const onChangeMultiplyDivide = (e) => {
        setParams({ multiplyAction: e.target.value });
    };

    const onAddSubtractRange = (e) => {
        setParams({ addSubtractRange: e.target.value });
    };

    const onMultiplyRange = (e) => {
        setParams({ multiplyRange: e.target.value });
    };

    const onGenerate = () => {
        setParams({});
    };

    return (
        <div className={classNames(styles.params, className)}>
            <AddSubtract className={styles.action} onChange={onChangeAddSubtract} value={params.addSubtractAction} />
            <TextField className={styles.action} onChange={onAddSubtractRange} value={params.addSubtractRange} />
            <MultiplyDivide className={styles.action} onChange={onChangeMultiplyDivide} value={params.multiplyAction} />
            <TextField className={styles.action} onChange={onMultiplyRange} value={params.multiplyRange} />
            <Button title="Generate" onClick={onGenerate} />
        </div>
    );
};

Params.propTypes = {
    className: PropTypes.string,
};

Params.defaultProps = {
    className: '',
};

export default Params;
