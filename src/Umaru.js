import React, { Component } from 'react';
import umaruBack from './umaru_back.jpg';
import kabao from './kabao.jpg';
import umaruPink from './umaru_pink.jpg';
import umaruNormal from './umaru_normal.jpg';

export default class Umaru extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isModalActivated : false,
      isFortuneStarted: false
    };
  }

  handleTileClick () {
    this.setState({ isModalActivated : true });
  }

  handleCloseClick () {
    this.setState({
      isModalActivated : false,
      isFortuneStarted : false
    });
  }
  
  handleStartClick () {
    this.setState({ isFortuneStarted: true });
  }

  handleAgainClick () {
    this.setState({ isFortuneStarted: false });
  }
  
  render() {
    let umaruModal = null;
    let content = null;
    let result = null;

    switch ( Date.now() % 10 ) {
      case 0: case 1: case 2:
        result = {
          image: kabao,
          text: "カバオくんでした！！"
        };
        break;
      case 3: case 4: case 5:
        result = {
          image: umaruPink,
          text: "うまるちゃん(亜種)でした！"
        };
        break;
      default:
        result = {
          image: umaruNormal,
          text: "うまるちゃん(ノーマル)でした！"
      };
    }

    const contentBefore = (
          <React.Fragment>
            <img src={umaruBack} className="umaru-img-before" alt="before" />
            <p>キミにピッタリのうまるちゃんを占うよ！</p>
            <p>どのうまるちゃんが出るかな？</p>
            <button className="start-btn" onClick={this.handleStartClick.bind(this)}>スタート</button>
          </React.Fragment>
    );
    const contentStarted = (
        <React.Fragment>
          <img src={result.image} className="umaru-img-after" alt="after" />
            <p>{result.text}</p>
              <a href="https://twitter.com/5rikka/status/702807215627841537">
                <p id="neta-source">ネタ元</p>
              </a>
              <a href="https://youngjump.jp/umaru-maker/index3.php">
                <p id="neta-source">素材</p>
              </a>
          <button className="start-btn" onClick={this.handleAgainClick.bind(this)}>もう一度遊ぶ</button>
        </React.Fragment>
    );
    
    if ( this.state.isModalActivated ) {
      if ( !this.state.isFortuneStarted ) {
        content = contentBefore;
      } else {
        content = contentStarted;
      }
      umaruModal = (
        <div className="modal">
          <div className="modal-box">
            <div className="modal-header">{this.props.name}</div>
            <div className="modal-content">
              {content}
            </div>
            <button className="modal-close-btn" onClick={this.handleCloseClick.bind(this)}>
            とじる
            </button>
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className="tile" onClick={this.handleTileClick.bind(this)}>
          <p>{this.props.name}</p>
          <img src={this.props.icon} width="64" height="64" alt="cat" />
        </div>
        {umaruModal}
      </React.Fragment>
    );
  }
}
