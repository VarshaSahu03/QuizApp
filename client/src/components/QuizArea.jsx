import React, { useState, useEffect } from 'react';
import qBank from './QuizData';

const QuizArea = () => {
  const [userAnswers, setUserAnswers] = useState( JSON.parse(localStorage.getItem('userAnswers')) || {});
  const [showExplanation, setShowExplanation] = useState( JSON.parse(localStorage.getItem('userAnswers')) || {});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = qBank[currentQuestionIndex];

  const handleOptionChange = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    setShowExplanation((prevExplanations) => ({
      ...prevExplanations,
      [currentQuestion.id]: true,
    }));
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };
  useEffect(() => {
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    localStorage.setItem('showExplanation', JSON.stringify(showExplanation));
  }, [userAnswers, showExplanation]);

  const isSubmitDisabled = !userAnswers[currentQuestion.id];

  return (
    <div style={{ zIndex: 1, padding: '1rem'}}>
      {qBank.map((question) => (
        <div key={question.id}>
          <h3>
            {question.id}. {question.question}
          </h3>
          <ul>
            {question.options.map((option, index) => (
              <label
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  color:
                    showExplanation[question.id] &&
                    (userAnswers[question.id] === option
                      ? option === question.answer
                        ? 'blue'
                        : 'red'
                      : 'black'),
                }}
              >
                <input
                  type="radio"
                  name={`question_${question.id}`}
                  value={option}
                  checked={userAnswers[question.id] === option}
                  onChange={() => handleOptionChange(question.id, option)}
                />
                {option}
              </label>
            ))}
          </ul>
          {showExplanation[question.id] && (
            <div style={{ marginTop: '1rem' }}>
              <h4>Explanation:</h4>
              <p>Correct Answer: {question.answer}</p>
              <p>{question.explaination}</p>
            </div>
          )}
          {!showExplanation[question.id] && (
            <button
              style={{
                marginLeft: '3rem',
                marginTop: '0.3rem',
                padding: '0.2rem',
                background: '#181052d4',
                color: 'white',
                borderRadius: '5px',
                border: '1px solid black',
              }}
              onClick={handleSubmit}
              disabled={isSubmitDisabled}

            >
              Submit
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuizArea;
