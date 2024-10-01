import React, { useState, useEffect } from 'react';

function Main({ goToQuiz }) {
  const slides = [
    { src: '/img/fa97d2e7-02ca-4983-a930-4fdaa245a852 1.png', alt: 'mahindra_car' },
    { src: '/img/8bd68290-c0ad-43b6-a1ce-ee162b7d8914 1.png', alt: 'driver1' },
    { src: '/img/728b2253-b9d4-47dd-9051-e970bff2a62f 1.png', alt: 'driver2' },
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const showSlide = (index) => {
    if (index >= slides.length) {
      setSlideIndex(0);
    } else if (index < 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(slideIndex + 1);
  };

  const prevSlide = () => {
    showSlide(slideIndex - 1);
  };

  useEffect(() => {
    const id = setInterval(() => {
      nextSlide();
    }, 5000);
    setIntervalId(id);
    return () => clearInterval(id); // Limpa o intervalo ao desmontar o componente
  }, [slideIndex]);

  const handleRaceClick = (e) => {
    e.preventDefault();
    // Redireciona para o jogo
    window.location.href = `${process.env.PUBLIC_URL}/game/index.html`;
  };

  return (
    <main className='main'>
      {/* Main Hyperlinks Container */}
      <div className="main_hyperlinks_container">
        <h2><a href="#" onClick={handleRaceClick}>Race</a></h2> {/* Redireciona para o jogo */}
        <h2><a href="#" onClick={goToQuiz}>Quiz</a></h2> {/* Chama a função goToQuiz ao clicar */}
      </div>

      {/* Info Slider */}
      <div className="info_slider">
        <div className="info_slider_option_container">
          <h1>About</h1>
          <p>
            Mahindra Racing has competed in Formula E since its inception in 2014-2015...
          </p>
          <div className="info_slider_buttons_container">
            <button className="prev" onClick={() => { clearInterval(intervalId); prevSlide(); }}>&#10094;</button>
            <button className="next" onClick={() => { clearInterval(intervalId); nextSlide(); }}>&#10095;</button>
          </div>
        </div>
        <div className="info_slider_images">
          <img className="mahindra_logo" src="/img/LogoMahindra2 1.png" alt="mahindra_logo" />
          {slides.map((slide, index) => (
            <img
              key={index}
              className={`slide ${index === slideIndex ? 'display_slide' : ''}`}
              src={slide.src}
              alt={slide.alt}
            />
          ))}
        </div>
      </div>

      {/* Ranking Section */}
      <div className="ranking">
        <div className="ranking_title_container">
          <h1>Ranking</h1>
        </div>
        <div className="ranking_outer_rectangle">
          <div className="ranking_inner_rectangle">
            <ul>
              <li>#1 - </li>
              <li>#2 - </li>
              <li>#3 - </li>
              <li>#4 - </li>
              <li>#5 - </li>
              <li>#6 - </li>
              <li>#7 - </li>
              <li>#8 - </li>
              <li>#9 - </li>
              <li>#10 - </li>                
            </ul>
            <p>My Ranking: #x</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
