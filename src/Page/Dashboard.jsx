import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import { requestToGrogAI } from '../Utils/Grog';
import ReactMarkdown from 'react-markdown'; // Import library

const Dashboard = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = async () => {
        if (input.trim() === '') return;

        // Add user's message to the chat
        const userMessage = { role: 'user', content: input };
        setMessages([...messages, userMessage]);

        // Get AI's response
        const aiResponse = await requestToGrogAI(input);
        const aiMessage = { role: 'ai', content: aiResponse };

        // Add AI's message to the chat
        setMessages(prevMessages => [...prevMessages, aiMessage]);

        // Clear the input
        setInput('');
    };


    return (
        <>
            {messages.length > 0 && (
                <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="row w-100">
                        <div className="col-12 col-md-8 offset-md-2 chat-container">
                            <div className="chat-box">
                                {messages.map((message, index) => (
                                    <div key={index} className={`message ${message.role}-message`}>
                                        <div className="message-content">
                                            <ReactMarkdown>{message.content}</ReactMarkdown> {/* Render markdown content */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="fixed-bottom mt-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2">
                            <div className="input-container">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="form-control chat-input"
                                />
                                <button
                                    className="btn btn-primary send-button"
                                    onClick={handleSubmit}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Dashboard;
