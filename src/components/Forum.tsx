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
    // const [searchQuery, setSearchQuery] = useState('');
    const [displayList, setDisplayList] = useState<Feedback[]>(feedbackList);

    
    const fetchList = async () => {
        try {
            const response = await axios.get('http://localhost:3000/feedback/');
            setFeedbackList(response.data.reverse());
            setDisplayList(response.data);
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
                <div className="title">
                    <h1>Feedback Forum</h1>
                    <div className="filters">
                        <label htmlFor="filter">Search:</label>
                        <input type="text" placeholder="Id here..." id="filter" onChange={(e) => {
                            { if (e.target.value !== '')
                                setDisplayList(feedbackList.filter((feedback) => feedback.employee_id.includes(e.target.value)));
                                else setDisplayList(feedbackList);
                            }
                        }}/>
                    </div>
                </div>
                 { displayList.length > 0 ? (
                <ul>
                    {displayList.map((feedback) => (
                        <li key={feedback._id}>
                            {/* <p><strong>Employee ID:</strong> {feedback.employee_id || "Anonymous"}</p>
                            <p><strong>Feedback:</strong> {feedback.feedbackText}</p>
                            <p><strong>Rating:</strong> {feedback.rating}</p> */}
                        
                            <div className="card">
                                <div className="author">
                                    <strong>Review for</strong> {feedback.employee_id}
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
                ) : ( <p>No feedbacks found.</p> )}
            </div>
        )
    }

export default Forum;