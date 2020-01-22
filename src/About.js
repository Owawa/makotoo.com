import React, { Component } from 'react';
import Tile from './Tile';

import gamepadIcon from './gamepad.svg';
import bookIcon from './book.svg';
import catIcon from './cat.svg';
import drinkIcon from './drink.svg';

import hinamatsuri from './hinamatsuri.jpg'
import abyss from './abyss.jpg'
import brawlstars from './brawlstars.jpg'
import chunithmImg from './chunithm.jpg'
import mashiro from './mashiro.jpg'
import shoulderCat from './shoulder_cat.jpg'


export default class About extends Component {
  render() {

    const favoriteItems = {
      comics: [
        {name: "ヒナまつり", img: hinamatsuri, desc: "ギャグ漫画あんまり読まないけどこれだけは読める.瞳さんの有能さに笑うw", url: "https://www.amazon.co.jp/dp/4047273813"},
        {name: "メイドインアビス", img: abyss, desc : "ファンタジーとしての魅力と理不尽さ両方あってかなり好きな話.", url: "https://www.amazon.co.jp/dp/4812483808"}
      ],
      games: [
        {name: "ブロスタ", img: brawlstars, desc: "スマホの対戦ゲームで一番楽しい.シンプルに神ゲー.", url: "https://play.google.com/store/apps/details?id=com.supercell.brawlstars&hl=ja"},
        {name: "Chunithm", img: chunithmImg, desc: "ガチ勢じゃなくてもそこそこ極められる音ゲー.運動不足解消にも効果アリ.", url: "https://chunithm.sega.jp/"}
      ],
      cats: [
        {name: "ねこかます", img: mashiro, desc: "ウチューネコちゃん.", url: "https://www.youtube.com/channel/UCVnXhulsNpFgxCpplJLKsUg"},
        {name: "肩に乗るやつ",  img: shoulderCat, desc: "はやくこれになりたい...", url: "https://www.youtube.com/watch?v=hPMYwcSi3eg"}
      ],
      drinks: [
        {name: "工事中", img: "", desc: "", url: ""}
      ]
    };
    
    return (
      <main>
        <div className="about-section">
          <h1 className="section-title">makotooとは？</h1>
          <div className="item-list">
            <p>なまえ : makotoo(マコトゥー)</p>
            <p>Twitter : ひみつ</p>
            <p>見た目 : 草野マサムネ</p>
          </div>
        </div>
        <div className="about-section">
          <h1 className="section-title">Favorite</h1>
          <div className="item-list">
            <Tile name="Comics" icon={bookIcon} items={favoriteItems.comics} />
            <Tile name="Games" icon={gamepadIcon} items={favoriteItems.games} />
            <Tile name="Cats" icon={catIcon} items={favoriteItems.cats} />
            <Tile name="Drinks" icon={drinkIcon} items={favoriteItems.drinks} />
          </div>
        </div>
      </main>
    );
  }
}
