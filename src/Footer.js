import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-logo" onClick={this.props.topLinkPushed}>makotoo.com</div>
        <ul className="footer-list">
          <li onClick={this.props.playLinkPushed}>あそぶ</li>
          <li onClick={this.props.aboutLinkPushed}>makotooについて</li>
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
