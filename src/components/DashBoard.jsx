import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

import 'react-calendar/dist/Calendar.css';

function DashBoard() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [flashcards, setFlashcards] = useState(() => {
        const savedFlashcards = localStorage.getItem('flashcards');
        return savedFlashcards ? JSON.parse(savedFlashcards) : [];
    });

        const navigate = useNavigate(); 


    const [showForm, setShowForm] = useState(false);
    const [subject, setSubject] = useState('');
    const [activityName, setActivityName] = useState('');
    const [teacher, setTeacher] = useState('');
    const [deadlineDate, setDeadlineDate] = useState('');
    const [deadlineTime, setDeadlineTime] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem('flashcards', JSON.stringify(flashcards));
    }, [flashcards]);

    const addTask = () => {
        if (subject && activityName && teacher && deadlineDate && deadlineTime) {
            const newTask = { subject, activityName, teacher, deadlineDate, deadlineTime };
            setTasks([...tasks, newTask]);
            setSubject('');
            setActivityName('');
            setTeacher('');
            setDeadlineDate('');
            setDeadlineTime('');
            setShowForm(false);
        } else {
            alert('Please fill in all fields.');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const deleteFlashcard = (index) => {
        const updatedFlashcards = flashcards.filter((_, i) => i !== index);
        setFlashcards(updatedFlashcards);
        localStorage.setItem('flashcards', JSON.stringify(updatedFlashcards));
    };

    return (
        <>
            <style>
                {`
                    .dashboard-container {
                        background-color: #f7f9f9;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        padding: 20px;
                        min-height: 100vh;
                        width: 100vw;
                        box-sizing: border-box;
                        font-family: Arial, sans-serif;
                    }
                    .greeting-section {
                        margin-bottom: 20px;
                        margin-top: 130px;
                        margin-left: 20px;
                    }
                    .greeting-h1 {
                        font-size: 40px;
                        margin: -30%;
                        margin-top: 5px;
                        color: #333;
                        margin-left: 20px;
                    }
                    .greeting-p {
                        position: relative;
                        font-size: 18px;
                        margin: -100%;
                        color: black;
                        margin-top: 240px;
                        margin-left: 20px;
                    }
                    .greeting-span {
                        color: #6C21DC;
                    }
                    .task-container {
                        background: linear-gradient(135deg, #6C21DC, #21DC6C);
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        border-radius: 10px;
                        padding: 20px;
                        margin-top: 20px;
                        width: 730px;
                        height: 600px;
                        margin-left: -720px;
                        max-width: 800px;
                        display: flex;
                        flex-direction: column;
                        color: white;
                        margin-top: 280px;

                    }
                    .task-title {
                        font-size: 24px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .add-task-button {
                        background-color: white;
                        color: #6C21DC;
                        border: none;
                        width: 120px;
                        margin-left: 540px;
                        margin-top: -50px;
                        border-radius: 20px;
                        padding: 10px 20px;
                        font-size: 16px;
                        cursor: pointer;
                        transition: background-color 0.3s ease, color 0.3s ease;
                        margin-bottom: 20px;
                    }
                    .add-task-button:hover {
                        background-color: #6C21DC;
                        color: white;
                    }
                    .form-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.5);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 1000;
                    }
                    .form-container {
                        background-color: white;
                        padding: 30px;
                        height: 400px;
                        width: 600px;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                        max-width: 500px;
                    }
                    .form-container input {
                        padding: 10px;
                        width: 480px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        font-size: 16px;
                        margin-bottom: 10px;
                        margin-top: 15px;
                    }
                    .form-container button {
                        background-color: #6C21DC;
                        color: white;
                        border: none;
                        margin-top: 10px;
                        margin-left: 10px;
                        border-radius: 29px;
                        padding: 10px 20px;
                        font-size: 16px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }
                    .form-container button:hover {
                        background-color: #5a1ab8;
                    }

                    .task-list {
                        height: 480px;
                        border-radius: 10px;
                        padding: 20px;
                        margin-top: --10px;
                        overflow-y: auto;
                        max-height: 1000px;
                    }
                    .task-item {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background-color: #f9f9f9;
                        color: #333;
                        padding: 10px;
                        border-radius: 5px;
                        margin-bottom: 10px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }
                    .delete-task-button {
                        background-color: #ff4d4d;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 14px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }
                    .delete-task-button:hover {
                        background-color: #e60000;
                    }

                    .cards-container {
                        display: flex;
                        flex-direction: row;
                        gap: 20px;
                        flex: 1;
                        margin-top: 130px;
                        margin-right: 20px;
                        margin-left: 100px;
                        margin-top: 160px;
                    }
                    .card {
                        background-color: white;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        border-radius: 10px;
                        padding: 20px;
                        width: 250px;
                        height: 150px;
                        text-align: center;
                        position: relative;
                        margin-right: 20px;
                    }
                    .card:nth-child(1) {
                        border-left: 5px solid #6C21DC; 
                    }
                    .card:nth-child(2) {
                        border-left: 5px solid #21DC6C; 
                    }
                    .card:nth-child(3) {
                        border-left: 5px solid #DC6C21; 
                    }
                    .card-title {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 16px;
                        font-weight: bold;
                        color: #333;
                        padding-top: 110px;
                        text-align: center;
                        margin-bottom: 10px;
                    }

                    .card-description {
                        font-size: 44px;
                        font-weight: bold;
                        color: #6C21DC;
                        margin-top: -120px;
                    }

                    .extra-containers {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 40px;
                        gap: 60px;
                        height: 500px;
                        width: 960px;
                        margin-left: 870px;
                        margin-top: 420px;
                        position: absolute;
                    }
                    .extra-container {
                        flex: 1;
                        background-color: white;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        padding: 20px;
                        text-align: center;
                    }
                    .extra-container-1 {
                        border-left: 5px solid #6C21DC; /* Purple */
                        color: white;
                    }

                    .extra-container-2 {
                        border-left: 5px solid #DC6C21; /* Orange */
                        color: white;
        }
                    .extra-container-title {
                        font-size: 20px;
                        font-weight: bold;
                        margin-bottom: 10px;
                        color: #333;
                    }
                    .extra-container-description {
                        font-size: 16px;
                    }

                    .flashcard-list {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        margin-top: 40px;
                    }

                    .flashcard-item {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background-color: white ;
                        padding: 10px 20px;
                        border-radius: 10px;
                        color: #333;
                        border-left: 5px solid #e74c3c; 
                        margin-top: 10px;
                        margin-bottom: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }

                    .flashcard-item:hover {
                        background-color: #e0e0e0;
                    }

                    .delete-flashcard-button {
                        background-color: #ff4d4d;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 14px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }

                    .delete-flashcard-button:hover {
                        background-color: #e60000;
                    }
                `}
            </style>
            <div className="dashboard-container">
                <div className="greeting-section">
                    <h1 className="greeting-h1">
                        Hi <span className="greeting-span">Aimee</span>, Welcome to Tala
                    </h1>
                    <p className="greeting-p">
                        Your smart study buddy! Let’s make learning easier, faster, and more fun. Ready to get started?
                    </p>
                </div>

                <div className="task-container">
                    <h2 className="task-title">Today's Task</h2>
                    <button
                        className="add-task-button"
                        onClick={() => setShowForm(true)}
                    >
                        Add Task
                    </button>
                    <div className="task-list">
                        {tasks.map((task, index) => (
                            <div key={index} className="task-item">
                                <div>
                                    <strong>Subject:</strong> {task.subject} <br />
                                    <strong>Activity:</strong> {task.activityName} <br />
                                    <strong>Teacher:</strong> {task.teacher} <br />
                                    <strong>Deadline:</strong> {task.deadlineDate} at {task.deadlineTime}
                                </div>
                                <button
                                    className="delete-task-button"
                                    onClick={() => deleteTask(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="cards-container">
                    <div className="card">
                        <h3 className="card-title">No of Flashcards</h3>
                        <p className="card-description">{flashcards.length}</p>
                    </div>
                    <div className="card">
                        <h3 className="card-title">Score</h3>
                    </div>
                    <div className="card">
                        <h3 className="card-title">Hour</h3>
                    </div>
                </div>
                    <div className="extra-containers">
                    <div className="extra-container extra-container-1">
                        <h3 className="extra-container-title">Flashcards</h3>
                        {flashcards.length > 0 ? (
                            <ul className="flashcard-list">
                                {flashcards.map((flashcard, index) => (
                                    <li
                                        key={index}
                                        className="flashcard-item"
                                        onClick={() =>
                                            navigate('/flashcard-view', {
                                                state: { title: flashcard.title, flashcards: flashcard.flashcards },
                                            })
                                        }
                                    >
                                        <span>{flashcard.title}</span>
                                        <button
                                            className="delete-flashcard-button"
                                            onClick={(e) => {
                                                e.stopPropagation(); 
                                                deleteFlashcard(index);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No flashcards available.</p>
                        )}
                    </div>
                        <div className="extra-container extra-container-2">
                            <h3 className="extra-container-title">Quizzes</h3>
                            <p className="extra-container-description">This is the quizzes container.</p>
                        </div>
                    </div>
        
            </div>

            {showForm && (
                <div className="form-overlay">
                    <div className="form-container">
                        <input
                            type="text"
                            placeholder="Subject Name"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Name of the Activity"
                            value={activityName}
                            onChange={(e) => setActivityName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Teacher"
                            value={teacher}
                            onChange={(e) => setTeacher(e.target.value)}
                        />
                        <input
                            type="date"
                            placeholder="Deadline Date"
                            value={deadlineDate}
                            onChange={(e) => setDeadlineDate(e.target.value)}
                        />
                        <input
                            type="time"
                            placeholder="Deadline Time"
                            value={deadlineTime}
                            onChange={(e) => setDeadlineTime(e.target.value)}
                        />
                        <button onClick={addTask}>Submit Task</button>
                        <button onClick={() => setShowForm(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default DashBoard;