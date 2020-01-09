import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Style from './Box.module.css';

class Box extends Component {
  // constructor(props) {
  //   super(props);
  // }
  static propTypes = {
    tag: PropTypes.string
  };
  static defaultProps = {
    tag: 'div'
  };
  render() {
    return <this.props.tag className={Style.flex}>{this.props.children}</this.props.tag>;
  }
}

export default Box;
