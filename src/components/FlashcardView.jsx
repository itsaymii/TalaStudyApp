import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const FlashcardView = () => {
  const location = useLocation();
  const { title, flashcards } = location.state;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false); 
    } else {
      alert('You have reached the end of the flashcards.');
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSaveFlashcardSet = () => {
    const savedFlashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
    const newFlashcardSet = { title, flashcards };
    localStorage.setItem('flashcards', JSON.stringify([...savedFlashcards, newFlashcardSet]));

    alert('Flashcard set saved successfully! You can now access it in the Dashboard.');
  };

  return (
    <div className="flashcard-view-container">
      <style>
        {`
          .flashcard-view-container {
            text-align: center;
            padding: 50px;
          }

          .flashcard-title {
            font-size: 44px;
            margin-bottom: 20px;
            color: #6C21DC;
            margin-top: 150px;
          }

          .flashcard {
            margin: 20px auto;
            width: 300px;
            height: 400px;
            perspective: 1000px;
            margin-top: 50px;
          }

          .flashcard-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            transform: ${isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
          }

          .flashcard-front, .flashcard-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            font-size: 18px;
            padding: 20px;
          }

          .flashcard-front {
            background-color: #f9f9f9;
          }

          .flashcard-back {
            background-color: #6C21DC;
            color: white;
            transform: rotateY(180deg);
          }

          .next-button, .save-button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #6C21DC;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 20px;
            margin-top: 70px;
          }

          .next-button:hover, .save-button:hover {
            background-color: #5a1ab8;
          }
        `}
      </style>
      <h1 className="flashcard-title">{title}</h1>
      <div className="flashcard" onClick={handleFlip}>
        <div className="flashcard-inner">
          <div className="flashcard-front">
            {flashcards[currentIndex].description}
          </div>
          <div className="flashcard-back">
            {flashcards[currentIndex].term}
          </div>
        </div>
      </div>
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
      <button className="save-button" onClick={handleSaveFlashcardSet}>
        Save Flashcard Set
      </button>
    </div>
  );
};

export default FlashcardView;