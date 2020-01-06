import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
      <header>
        <div className="header-logo" onClick={props.handleTopLinkPushed}>makotoo.com</div>
          <nav>
            <span onClick={props.handlePlayLinkPushed}>あそぶ</span>
            <span>makotooについて</span>
          </nav>
      </header>
  )
}

Header.propTypes = {
  handlePlayLinkPushed : PropTypes.func,
  handleTopLinkPushed : PropTypes.func
}

const Footer = (props) => {
  return (
      <footer>
        <div className="footer-logo" onClick={props.handleTopLinkPushed}>makotoo.com</div>
        <ul className="footer-list">
          <li onClick={props.handlePlayLinkPushed}>あそぶ</li>
          <li>makotooについて</li>
        </ul>
      </footer>
  )
}

Footer.propTypes = {
  handlePlayLinkPushed : PropTypes.func
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { currentContent : "TOP" };
  }

  playLinkPushed () {
    this.setState({ currentContent : "PLAY" });
  }

  topLinkPushed () {
    this.setState({ currentContent : "TOP" });
  }

  render() {
    let Main = null;
    if(this.state.currentContent === "TOP") {
      Main = <main>
               <p>あああああ</p>
               <p>あああああ</p>
               <p>あああああ</p>
               <p>あああああ</p>
               <p>ABCD</p>
             </main>;
    } else if(this.state.currentContent === "PLAY") {
      Main = <main>play</main>;
    }

    return (
      <React.Fragment>
      <Header
        handlePlayLinkPushed={this.playLinkPushed.bind(this)}
        handleTopLinkPushed={this.topLinkPushed.bind(this)}
        />
      {Main}
      <Footer
        handlePlayLinkPushed={this.playLinkPushed.bind(this)}
        handleTopLinkPushed={this.topLinkPushed.bind(this)}
      />
      </React.Fragment>
    );
  }
}

export default App;
