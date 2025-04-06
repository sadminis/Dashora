import React from 'react';
import './Card.css'; // Optional: Add styles for the card

const Card = ({ title, content }) => {
    return (
        <div className="card">
            <h2 className="card-title">Card Title: {title}</h2>
            <p className="card-content">Card Content: {content}</p>
        </div>
    );
};

export default Card;