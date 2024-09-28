import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Problem from './Problem';
import Solution from './Solution';
import Reason from './Reason';
import Profile from './Profile';
import Coins from './Coins';
import Login from './LoginScreen'; // Importa o componente de Login
import Quiz from './Quiz'; // Importa o componente de Quiz
import '../styles/global.css';
import '../styles/styles.css';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [showCoins, setShowCoins] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controle de login
  const [currentPage, setCurrentPage] = useState('main'); // Estado para controlar qual página mostrar

  const toggleProfile = () => setShowProfile(!showProfile);

  // Função chamada após o login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Função para alternar entre Main e Quiz
  const goToQuiz = () => setCurrentPage('quiz');
  const goToMain = () => setCurrentPage('main');

  // Se o usuário não estiver logado, exibe a tela de login
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="containerAll">
      {/* Componentes Ocultos */}
      {showCoins && <Coins />}
      {showProfile && <Profile toggleProfile={toggleProfile} />}

      {/* Header estará visível em todas as páginas */}
      <Header toggleProfile={toggleProfile} setShowCoins={setShowCoins} />

      {/* Condicional para exibir Main ou Quiz */}
      {currentPage === 'main' ? (
        <>
          <Main goToQuiz={goToQuiz} /> {/* Passa a função goToQuiz para Main */}
          <Problem />
          <Solution />
          <Reason />
        </>
      ) : (
        <Quiz goToMain={goToMain} /> 
      )}

      <Footer />
    </div>
  );
}

export default App;
