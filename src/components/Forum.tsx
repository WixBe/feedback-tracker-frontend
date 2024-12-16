import axios from "axios";
import { useEffect, useState } from "react";
import './Forum.css';
import StarRating from "./rating";

const Forum: React.FC = () => {

    interface Feedback {
        _id: string;
        employee_id: string;
        feedbackText: string;
        rating: number;
        submittedAt: Date;
    }

    const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
    
    const fetchList = async () => {
        try {
            const response = await axios.get('http://localhost:3000/feedback/');
            setFeedbackList(response.data.reverse());
            // feedbackList.map((feedback) => {
            //     const formattedDate = feedback.submittedAt.toLocaleDateString('en-US', { 
            //         year: 'numeric', 
            //         month: 'long', 
            //         day: 'numeric' 
            //       }); 
            //       const formattedTime = feedback.submittedAt.toLocaleTimeString('en-US', { 
            //         hour: '2-digit', 
            //         minute: '2-digit' 
            //       });
            //     feedback.submittedAt = `${formattedDate} ${formattedTime}`;
            // })
            console.log('List fetch successfull: ', feedbackList);
        } catch (error) {
            console.error('Error fetching feedbacks:', error);
        };
    }

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div id="forum">
            <h1>Feedback Forum</h1>
            <div className="filters">
                
            </div>
            <ul>
                {feedbackList.map((feedback) => (
                    <li key={feedback._id}>
                        {/* <p><strong>Employee ID:</strong> {feedback.employee_id || "Anonymous"}</p>
                        <p><strong>Feedback:</strong> {feedback.feedbackText}</p>
                        <p><strong>Rating:</strong> {feedback.rating}</p> */}
                    
                        <div className="card">
                            <div className="author">
                                <strong>Review for</strong> {feedback.employee_id || "Anonymous"}
                            </div>

                            <div className="infos">
                                <p className="date-time">
                                    {String(feedback.submittedAt)}
                                </p>
                                <p className="description">
                                    {feedback.feedbackText}
                                </p>
                            </div>
                            <div className="stars">
                                <StarRating rating={feedback.rating} />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Forum;