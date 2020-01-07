import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-logo" onClick={this.props.handleTopLinkPushed}>makotoo.com</div>
        <ul className="footer-list">
          <li onClick={this.props.handlePlayLinkPushed}>あそぶ</li>
          <li onClick={this.props.handleAboutLinkPushed}>makotooについて</li>
        </ul>
      </footer>
    )
  }
  
  static propTypes = {
    handlePlayLinkPushed : PropTypes.func,
    handleTopLinkPushed : PropTypes.func,
    handleAboutLinkPushed : PropTypes.func
  };
}

export default Footer;
