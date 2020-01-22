import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tile extends Component {
  constructor (props) {
    super(props);
    this.state = { isModalActivated : false };
  }

  handleTileClick () {
    this.setState({ isModalActivated : true });
  }

  handleCloseClick () {
    this.setState({ isModalActivated : false });
  }
  
  render() {
    let favoriteModal = null;
    if ( this.state.isModalActivated ) {
      favoriteModal = (
        <div className="modal">
          <div className="modal-box">
            <div className="modal-header">{this.props.name}</div>
            <div className="modal-content-list">
              {this.props.items.map((item) => {
                return (
                  <div className="modal-content" key={item.name}>
                    <p className="modal-content-header">{item.name}</p>
                    <div className="modal-content-main">
                      <img className="modal-content-img" src={item.img} alt="modal item"/>
                      <div>{item.desc}</div>
                      <a href={item.url}></a>
                    </div>
                  </div>
                );
              })}
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
        {favoriteModal}
      </React.Fragment>
    );
  }

  static propTypes = {
    name: PropTypes.string,
    icon: PropTypes.node,
    items: PropTypes.array
  };
}
