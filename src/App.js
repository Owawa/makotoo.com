import React from 'react';
import './App.css';

const Header = () => {
  return (
      <header>
          <div className="header-logo">makotoo.com</div>
          <div className="header-list">
            <ul>
              <li>あそぶ</li>
              <li>makotooについて</li>
            </ul>
          </div>
      </header>
  )
}

const Footer = () => {
  return (
      <footer>
        <div className="footer-logo">makotoo.com</div>
        <div className="footer-list">
          <ul>
            <li>あそぶ</li>
            <li>makotooについて</li>
          </ul>
        </div>
      </footer>
  )
}


function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <p>あああああ</p>
        <p>あああああ</p>
        <p>あああああ</p>
        <p>あああああ</p>
        <p>ABCD</p>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
