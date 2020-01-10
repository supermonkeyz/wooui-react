import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';
import getCssModules from '../../utils/getCssModules';
import Style from './Button.module.css';
import Spinner from '../Spinner';

class Button extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.oneOf(['s', 'm', 'l']),
    sort: PropTypes.oneOf(['line', 'flat']),
    kind: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'default']),
    disabled: PropTypes.bool,
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
    const {
      sort,
      size,
      kind,
      loading,
      disabled,
      children,
      className,
      style
    } = this.props;
    return (
      <button
        className={classNames(
          className,
          getCssModules(['main', sort, size, kind], Style)
        )}
        style={style}
        disabled={disabled}
        onClick={this.handleClick.bind(this)}
      >
        {loading && <Spinner className={Style.icon}></Spinner>}
        <span className={Style.text}>{children}</span>
      </button>
    );
  }
}

export default Button;
