import React, { Component } from 'react';
import Umaru from './Umaru';
import Tile from './Tile';

import gamepadIcon from './gamepad.svg' // temporary

export default class Play extends Component {
  render() {
    return (
      <main>
        <div className="play-section">
          <div className="item-list">
            <h1 className="section-title">ミニゲーム</h1>
            <Tile name="？？" icon={gamepadIcon} items={[{name: "工事中"}]} />
          </div>
        </div>
        <div className="play-section">
          <div className="item-list">
            <h1 className="section-title">ネタ</h1>
            <Umaru name="UMR占い" icon={gamepadIcon} />
          </div>
        </div>
      </main>
    );
  }
}
