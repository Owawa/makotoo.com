import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Top from './Top';
import About from './About';

class App extends Component {
  constructor(props) {
    super(props);

    const stateList = ["#TOP", "#PLAY", "#ABOUT"];
    const initialPath = window.location.hash;
    const content = stateList.includes(initialPath) ? initialPath : "#TOP";

    this.state = { currentContent : content };
    window.history.replaceState(content, null, content);

    window.App = this;
  }

  handleTopLinkPushed () {
    this.setState({ currentContent : "#TOP" });
    window.history.pushState("#TOP", null, "#TOP");
  }

  handlePlayLinkPushed () {
    this.setState({ currentContent : "#PLAY" });
    window.history.pushState("#PLAY", null, "#PLAY");
  }

  handleAboutLinkPushed () {
    this.setState({ currentContent : "#ABOUT" });
    window.history.pushState("#ABOUT", null, "#ABOUT");
  }

  render() {
    let Main = null;
    if (this.state.currentContent === "#TOP") {
      Main = <Top />;
    } else if(this.state.currentContent === "#PLAY") {
      Main = <main>play</main>;
    } else if (this.state.currentContent === "#ABOUT") {
      Main = <About />;
    }

    return (
      <React.Fragment>
      <Header
        playLinkPushed={this.handlePlayLinkPushed.bind(this)}
        topLinkPushed={this.handleTopLinkPushed.bind(this)}
        aboutLinkPushed={this.handleAboutLinkPushed.bind(this)}
      />
      {Main}
      <Footer
        playLinkPushed={this.handlePlayLinkPushed.bind(this)}
        topLinkPushed={this.handleTopLinkPushed.bind(this)}
        aboutLinkPushed={this.handleAboutLinkPushed.bind(this)}
      />
      </React.Fragment>
    );
  }
}

export default App;
