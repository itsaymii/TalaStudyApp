import React, { useState } from 'react';

const CreateFlashcard = () => {
  const [title, setTitle] = useState('');
  const [flashcards, setFlashcards] = useState([{ term: '', description: '' }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Flashcard Set Created:', { title, flashcards });
    setTitle('');
    setFlashcards([{ term: '', description: '' }]);
  };

  const handleFlashcardChange = (index, field, value) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index][field] = value;
    setFlashcards(updatedFlashcards);
  };

  const addFlashcard = () => {
    if (flashcards.length < 10) {
      setFlashcards([...flashcards, { term: '', description: '' }]);
    } else {
      alert('You can only add up to 10 flashcards.');
    }
  };

  const removeFlashcard = (index) => {
    const updatedFlashcards = flashcards.filter((_, i) => i !== index);
    setFlashcards(updatedFlashcards);
  };

  return (
    <div className="create-flashcard-container">
      <style>
        {`

        h1 {
          text-align: center;   
            font-size: 36px;
            color: #6C21DC;
            margin-top: 100px;
            margin-bottom: 80px;
        }
        
          .create-flashcard-container {
            text-align: center;
            padding: 50px;
          }

          .flashcard-form {
            width: 600px;
            max-width: 1000px;
            margin: 0 auto;
            text-align: left;
          }

          .form-group {
            margin-bottom: 20px;
            width: 550px;
          }

          .form-label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
          }

          .form-input, .form-textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
          }

          .form-textarea {
            resize: none;
            height: 60px;
          }

          .flashcard-item {
            margin-bottom: 20px;
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 5px;
          }

          .remove-button {
            margin-top: 10px;
            padding: 5px 10px;
            background-color: #ff4d4d;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 14px;
            cursor: pointer;
          }

          .remove-button:hover {
            background-color: #e60000;
          }

          .add-button, .submit-button {
            margin-bottom: 20px;
            padding: 10px 20px;
            background-color: #6C21DC;
            color: white;
            border: none;
            border-radius: 29px;
            font-size: 16px;
            cursor: pointer;
            margin-left: 10px;
          }

          .add-button:hover, .submit-button:hover {
            background-color: #5a1ab8;
          }
        `}
      </style>
      <h1>Create Your Flashcards</h1>
      <form onSubmit={handleSubmit} className="flashcard-form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title of the Flashcard Set
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter flashcard set title"
            className="form-input"
          />
        </div>

        {flashcards.map((flashcard, index) => (
          <div key={index} className="flashcard-item">
            <div className="form-group">
              <label htmlFor={`term-${index}`} className="form-label">
                Term {index + 1}
              </label>
              <input
                id={`term-${index}`}
                type="text"
                value={flashcard.term}
                onChange={(e) => handleFlashcardChange(index, 'term', e.target.value)}
                placeholder="Enter term"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor={`description-${index}`} className="form-label">
                Description {index + 1}
              </label>
              <textarea
                id={`description-${index}`}
                value={flashcard.description}
                onChange={(e) => handleFlashcardChange(index, 'description', e.target.value)}
                placeholder="Enter description"
                className="form-textarea"
              />
            </div>
            <button
              type="button"
              onClick={() => removeFlashcard(index)}
              className="remove-button"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addFlashcard}
          className="add-button"
        >
          Add Flashcard
        </button>

        <button
          type="submit"
          className="submit-button"
        >
          Create Flashcard Set
        </button>
      </form>
    </div>
  );
};

export default CreateFlashcard;