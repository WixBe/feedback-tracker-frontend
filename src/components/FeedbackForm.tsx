import React, { useState } from "react";
import axios from "axios";
import './FeedbackForm.css';

const FeedbackForm: React.FC = () => {

    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(5);
    const [employeeId, setEmployeeId] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/feedback/', {feedbackText: feedback, rating: rating, employee_id: employeeId});
            alert('Feedback submitted successfully!');
            setEmployeeId('');
            setFeedback('');
            setRating(5);
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert('Failed to submit feedback.');
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="eid">Leaving a review for</label>
            <input type="text" name="text" className="input" placeholder="Type id here..." value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} id="eid"/>
            <label htmlFor="feedback">Feedback</label>
            <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Your feedback..."></textarea>
            {/* <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select> */}
            {/* From Uiverse.io by aguerquin */ }
            <div className="rating">
            <input type="radio" id="star5" name="rate" value="5" onChange={(e) => setRating(parseInt(e.target.value))}/>
            <label title="Excellent!" htmlFor="star5">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path>
                </svg>
            </label>
            <input value="4" name="rate" id="star4" type="radio" onChange={(e) => setRating(parseInt(e.target.value))}/>
            <label title="Great!" htmlFor="star4">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path>
                </svg>
            </label>
            <input value="3" name="rate" id="star3" type="radio" onChange={(e) => setRating(parseInt(e.target.value))}/>
            <label title="Good" htmlFor="star3">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path>
                </svg>
            </label>
            <input value="2" name="rate" id="star2" type="radio" onChange={(e) => setRating(parseInt(e.target.value))}/>
            <label title="Okay" htmlFor="star2">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path>
                </svg>
            </label>
            <input value="1" name="rate" id="star1" type="radio" onChange={(e) => setRating(parseInt(e.target.value))}/>
            <label title="Bad" htmlFor="star1">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path>
                </svg>
            </label>
            </div>

            <button type="submit">Submit Feedback</button>
        </form>
    );  
};

export default FeedbackForm;