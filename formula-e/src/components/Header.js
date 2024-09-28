import React, { useEffect, useState } from 'react';

function Header({ toggleProfile, setShowCoins }) {
  const [username, setUsername] = useState(""); // Estado para armazenar o username

  // UseEffect para buscar o username do localStorage quando o componente for montado
  useEffect(() => {
    const storedUsername = localStorage.getItem("username"); // Recupera o username do localStorage
    if (storedUsername) {
      setUsername(storedUsername); // Atualiza o estado com o username armazenado
    }
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <section className="logo_container">
        <a href="#"><img src="/img/image1.png" alt="Logo" /></a>
        <h1 className="formula-e">TECHRAC-E</h1>
      </section>
      <section className="hyperlink_container">
        <div className="hyperlink_frame">
          <div className="hyperlink_rectangle">
            <a href="#problem" onClick={(e) => handleSmoothScroll(e, 'problem')}>The problem</a>
          </div>
        </div>
        <div className="hyperlink_frame">
          <div className="hyperlink_rectangle">
            <a href="#solution" onClick={(e) => handleSmoothScroll(e, 'solution')}>Our product</a>
          </div>
        </div>
        <div className="hyperlink_frame">
          <div className="hyperlink_rectangle">
            <a href="#reason" onClick={(e) => handleSmoothScroll(e, 'reason')}>Why does it work</a>
          </div>
        </div>
        <div
          id="my_profile_drawer"
          className="my_profile_frame"
          onMouseEnter={() => setShowCoins(true)}
          onMouseLeave={() => setShowCoins(false)}
        >
          <img id="coins_drawer" src="/img/Polygon 1.svg" alt="" />
          <div className="hyperlink_rectangle">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleProfile();
              }}
            >
              {username ? `Hey, ${username}` : "My Profile"}
              {/* Se username estiver presente, mostra "Hey, {username}", senão mostra "My Profile" */}
            </a>
          </div>
          <img src="/img/Ellipse 1.svg" alt="Profile Image" />
        </div>
      </section>
    </nav>
  );
}

export default Header;
