import React, { useState } from "react";
import styles from "../styles/quiz.module.css"; // Estilos para o quiz (opcional)


const questions = [
    {
      questionText: "Qual foi o primeiro campeão da Fórmula E?",
      answerOptions: [
        { answerText: "Nelson Piquet Jr.", isCorrect: true },
        { answerText: "Sebastien Buemi", isCorrect: false },
        { answerText: "Jean-Eric Vergne", isCorrect: false },
        { answerText: "Lucas di Grassi", isCorrect: false },
      ],
    },
    {
      questionText: "Qual cidade sediou a primeira corrida da Fórmula E?",
      answerOptions: [
        { answerText: "Londres", isCorrect: false },
        { answerText: "Pequim", isCorrect: true },
        { answerText: "Nova York", isCorrect: false },
        { answerText: "Mônaco", isCorrect: false },
      ],
    },
    {
      questionText: "Qual fabricante forneceu os motores na primeira temporada da Fórmula E?",
      answerOptions: [
        { answerText: "Audi", isCorrect: false },
        { answerText: "Renault", isCorrect: true },
        { answerText: "BMW", isCorrect: false },
        { answerText: "Mercedes", isCorrect: false },
      ],
    },
    {
      questionText: "Qual é a distância média de uma corrida de Fórmula E?",
      answerOptions: [
        { answerText: "45 minutos + 1 volta", isCorrect: true },
        { answerText: "60 minutos", isCorrect: false },
        { answerText: "50 km", isCorrect: false },
        { answerText: "100 km", isCorrect: false },
      ],
    },
    {
      questionText: "Em que ano foi lançada a Fórmula E?",
      answerOptions: [
        { answerText: "2012", isCorrect: false },
        { answerText: "2014", isCorrect: true },
        { answerText: "2016", isCorrect: false },
        { answerText: "2018", isCorrect: false },
      ],
    },
    {
      questionText: "Qual dos seguintes pilotos NÃO competiu na Fórmula E?",
      answerOptions: [
        { answerText: "Felipe Massa", isCorrect: false },
        { answerText: "Fernando Alonso", isCorrect: true },
        { answerText: "Lucas di Grassi", isCorrect: false },
        { answerText: "Jean-Eric Vergne", isCorrect: false },
      ],
    },
    {
      questionText: "Qual equipe venceu o campeonato de construtores na temporada 2019-2020?",
      answerOptions: [
        { answerText: "BMW i Andretti", isCorrect: false },
        { answerText: "Mercedes-Benz EQ", isCorrect: true },
        { answerText: "Audi Sport ABT", isCorrect: false },
        { answerText: "Mahindra Racing", isCorrect: false },
      ],
    },
    {
      questionText: "O que é o 'Attack Mode' na Fórmula E?",
      answerOptions: [
        { answerText: "Um modo que aumenta a potência por um curto período", isCorrect: true },
        { answerText: "Um botão que faz o carro acelerar automaticamente", isCorrect: false },
        { answerText: "Um modo que ativa uma defesa extra contra colisões", isCorrect: false },
        { answerText: "Uma estratégia para economizar bateria", isCorrect: false },
      ],
    },
    {
      questionText: "Quantas temporadas de Fórmula E ocorreram até 2023?",
      answerOptions: [
        { answerText: "5", isCorrect: false },
        { answerText: "9", isCorrect: true },
        { answerText: "7", isCorrect: false },
        { answerText: "10", isCorrect: false },
      ],
    },
    {
      questionText: "Qual dos seguintes é o CEO da Fórmula E?",
      answerOptions: [
        { answerText: "Jean Todt", isCorrect: false },
        { answerText: "Alejandro Agag", isCorrect: true },
        { answerText: "Toto Wolff", isCorrect: false },
        { answerText: "Stefano Domenicali", isCorrect: false },
      ],
    },
  ];

function Quiz({ goToMain }) {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Pergunta atual
  const [score, setScore] = useState(0); // Pontuação
  const [showScore, setShowScore] = useState(false); // Mostra pontuação no fim

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1); // Incrementa a pontuação se a resposta for correta
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion); // Avança para a próxima pergunta
    } else {
      setShowScore(true); // Mostra a pontuação no final
    }
  };

  return (
    <div className={styles.quizContainer}>
      {showScore ? (
        <div className={styles.scoreSection}>
          Você acertou {score} de {questions.length} perguntas!
          <button onClick={goToMain}>Voltar para o Main</button> {/* Botão para voltar ao Main */}
        </div>
      ) : (
        <>
          <div className={styles.questionSection}>
            <div className={styles.questionCount}>
              <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className={styles.questionText}>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className={styles.answerSection}>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option.isCorrect)}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
