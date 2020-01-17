import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-logo" onClick={this.props.topLinkPushed}>makotoo.com</div>
          <nav>
            <span onClick={this.props.playLinkPushed}>あそぶ</span> 
            <span onClick={this.props.aboutLinkPushed}>makotooについて</span>
          </nav>
      </header>
    )
  }

  static propTypes = {
    handlePlayLinkPushed : PropTypes.func,
    handleTopLinkPushed : PropTypes.func,
    handleAboutLinkPushed : PropTypes.func
  };
}
