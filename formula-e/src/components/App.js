import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Problem from './Problem';
import Solution from './Solution';
import Reason from './Reason';
import Profile from './Profile';
import Coins from './Coins';
import '../styles/global.css';
import '../styles/styles.css';


function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [showCoins, setShowCoins] = useState(false);

  const toggleProfile = () => setShowProfile(!showProfile);

  return (
    <div className="containerAll">
      {/* Componentes Ocultos */}
      {showCoins && <Coins />}
      {showProfile && <Profile toggleProfile={toggleProfile} />}

      {/* Conteúdo Principal */}
      <Header toggleProfile={toggleProfile} setShowCoins={setShowCoins} />
      <Main />
      <Problem />
      <Solution />
      <Reason />
      <Footer />
    </div>
  );
}

export default App;
