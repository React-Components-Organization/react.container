/* jshint strict: true */
/* jshint esversion: 6 */

/**
 * @author oliviercolonna@gmail.com
 * Copyright(c) 2016 Olivier Colonna
 * MIT Licensed
 *
 * ReactContainer
 */

import React from 'react';

export default class ReactContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    let {
      scrollable,
      config,
      direction,
      hidden,
      floating,
      height,
      width } = this.props;

    this.applyScroll(config, direction, scrollable);
    this.applyHidden(config, hidden);
    this.setSize(config, height, width);
    this.applyFloating(config, floating);
  }

  /**
   * Make this container floatable, position absolute.
   * @param {object} config
   * @param {object} floating
   */
  applyFloating (config, floating) {
    if(typeof floating !== 'undefined') {
      config.position = 'absolute';
      config.top = floating.top;
      config.bottom = floating.bottom;
      config.left = floating.left;
      config.right = floating.right;
    }
  }

  /**
   * Make the container scrollable.
   * @param {object} config
   * @param {string} direction
   * @param {boolean} scrollable
   */
  applyScroll (config, direction, scrollable) {
    const y = 'overflowY';
    const x = 'overflowX';

    if(scrollable) {
      config.WebkitOverflowScrolling = 'touch';
      if(direction === 'vertical') {
        config[y] = 'scroll';
        config[x] = 'hidden';
      } else if(direction === 'horizontal') {
        config[y] = 'hidden';
        config[x] = 'scroll';
      } else if(direction === 'both'){
        config[y] = 'scroll';
        config[x] = 'scroll';
      }
    }

    config.position = 'relative';
  }

  /**
   * Hide the container, apply a css display: none.
   * @param {object} config
   * @param {boolean} hidden
   */
  applyHidden (config, hidden) {
    config.display = hidden ? 'none' : 'block';
  }

  /**
   * Define height and width of the container by default both are 100%.
   * @param {object} config
   * @param {number} h
   * @param {number} w
   */
  setSize (config, h, w) {
    if(h || w) {
      config.height = h || config.height;
      config.width = w || config.width;
    }
  }

  render () {
    const { config, cls, children } = this.props;

    return (
      <div
        ref={cls}
        className={`container ${cls}`}
        style={config}>
        {children}
      </div>
    );
  }

}

/**
 * Default properties of the container.
 */
ReactContainer.defaultProps = {
  config: {},
  hidden: false,
  cls: ''
};

/**
 * Properties types
 */
ReactContainer.propTypes = {
  children: React.PropTypes.node,
  baseCls: React.PropTypes.string,
  cls: React.PropTypes.string,
  scrollable: React.PropTypes.bool,
  direction: React.PropTypes.oneOf([
    'vertical', 'horizontal', 'both'
  ]),
  config: React.PropTypes.object,
  hidden: React.PropTypes.bool,
  height: React.PropTypes.number,
  width: React.PropTypes.number,
  floating: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object
  ])
};
