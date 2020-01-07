import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    const content = window.location.hash;
    if  (content === "#PLAY") {
      this.state = { currentContent : "PLAY" };
      window.history.replaceState("PLAY", null, "#PLAY");
    } else if  (content === "#ABOUT") {
      this.state = { currentContent : "ABOUT" };
      window.history.replaceState("ABOUT", null, "#ABOUT");
    } else {
      this.state = { currentContent : "TOP" };
      window.history.replaceState("TOP", null, "#TOP");
    }
    window.App = this;
  }

  topLinkPushed () {
    this.setState({ currentContent : "TOP" });
    window.history.pushState("TOP", null, "#TOP");
  }

  playLinkPushed () {
    this.setState({ currentContent : "PLAY" });
    window.history.pushState("PLAY", null, "#PLAY");
  }

  aboutLinkPushed () {
    this.setState({ currentContent : "ABOUT" });
    window.history.pushState("ABOUT", null, "#ABOUT");
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
    } else if (this.state.currentContent === "ABOUT") {
      Main = <main>About makotoo</main>;
    }

    return (
      <React.Fragment>
      <Header
        handlePlayLinkPushed={this.playLinkPushed.bind(this)}
        handleTopLinkPushed={this.topLinkPushed.bind(this)}
        handleAboutLinkPushed={this.aboutLinkPushed.bind(this)}
      />
      {Main}
      <Footer
        handlePlayLinkPushed={this.playLinkPushed.bind(this)}
        handleTopLinkPushed={this.topLinkPushed.bind(this)}
        handleAboutLinkPushed={this.aboutLinkPushed.bind(this)}
      />
      </React.Fragment>
    );
  }
}

export default App;
