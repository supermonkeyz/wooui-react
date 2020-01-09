import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';
import Style from './Button.module.css';

class Button extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['s', 'm', 'l']),
    sort: PropTypes.oneOf(['line', 'flat']),
    kind: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'default']),
    onClick: PropTypes.func
  };
  static defaultProps = {
    size: 'm',
    sort: 'line',
    kind: 'primary'
  };

  handleClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const { sort, size, kind, children } = this.props;
    return (
      <button
        className={classNames(Style.main, Style[sort], Style[size], Style[kind])}
        onClick={this.handleClick.bind(this)}
      >
        {children}
      </button>
    );
  }
}

export default Button;
