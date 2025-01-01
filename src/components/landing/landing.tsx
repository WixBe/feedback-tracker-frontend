import React, { useState } from "react";
import Header from "../Header";
import FeedbackForm from "../FeedbackForm";
import Forum from "../Forum";
import './landing.css'

const landingPage: React.FC = () => {

//   eslint-disable-next-line react-hooks/rules-of-hooks
  const [ activeTab, setActiveTab ] = useState('post');

     
    return (
        <>
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="board">
                { activeTab === 'post' ? <FeedbackForm /> : <Forum /> }
            </div>
        </>
    )
}

export default landingPage;