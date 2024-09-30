import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Problem from './Problem';
import Solution from './Solution';
import Reason from './Reason';
import Profile from './Profile';
import Coins from './Coins';
import Login from './LoginScreen';
import Quiz from './Quiz';
import styles from '../styles/footer_breakpoint_quiz.module.css'; // Importa o CSS Module
import '../styles/global.css';
import '../styles/styles.css';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [showCoins, setShowCoins] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('main');

  const toggleProfile = () => setShowProfile(!showProfile);
  const handleLogin = () => setIsLoggedIn(true);
  const goToQuiz = () => setCurrentPage('quiz');
  const goToMain = () => setCurrentPage('main');

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="containerAll">
      {showCoins && <Coins />}
      {showProfile && <Profile toggleProfile={toggleProfile} />}

      <Header toggleProfile={toggleProfile} setShowCoins={setShowCoins} />

      {currentPage === 'main' ? (
        <>
          <Main goToQuiz={goToQuiz} />
          <Problem />
          <Solution />
          <Reason />
        </>
      ) : (
        <>
          <Quiz goToMain={goToMain} />
          {/* Adiciona o footer apenas no Quiz com estilo específico */}
          <Footer className={styles.footerQuiz} />
        </>
      )}

      {/* Footer padrão para as outras páginas */}
      {currentPage !== 'quiz' && <Footer />}
    </div>
  );
}

export default App;
