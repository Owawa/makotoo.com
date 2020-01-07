import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-logo" onClick={this.props.handleTopLinkPushed}>makotoo.com</div>
          <nav>
            <span onClick={this.props.handlePlayLinkPushed}>あそぶ</span> 
            <span onClick={this.props.handleAboutLinkPushed}>makotooについて</span>
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

export default Header;
