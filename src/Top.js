import React, { Component } from 'react';

export default class Top extends Component {
  render() {
    let PhraseA = null;
    let PhraseB = null;
    let rem = Date.now() % 10;
    
    switch (rem) {
      case 0: case 1: case 2:
        PhraseA ='"makotoo" って、　　';
        PhraseB ="　　良い響きだ。";
        break;
      case 3: case 4: case 5:
        PhraseA ="猫に対してだけは、　　";
        PhraseB ="　　素直になれる件。";
        break;
      default:
        PhraseA ='い、今 インターネットに　　';
        PhraseB ="　　行ってはダメ・・・";
    }
    
    return (
      <main>
        <div className="top-phrase">
          <p><span className="top-phrase-line">{PhraseA}</span></p>
          <p><span className="top-phrase-line">{PhraseB}</span></p>
        </div>
      </main>
    );
  }
}
