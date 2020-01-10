import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Icon } from './assets/iOS.svg';
import classNames from '../../utils/classNames';
import Style from './Spinner.module.css';

const propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
};

function Spinner(props) {
  return (
    <Icon
      className={classNames(Style.main, props.className)}
      style={{ color: props.color, fontSize: props.size }}
    />
  );
}

Spinner.propTypes = propTypes;

export default Spinner;
