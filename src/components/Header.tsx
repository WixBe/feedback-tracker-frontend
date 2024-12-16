// import { SetStateAction, useState } from 'react';
import './Header.css'

interface HeaderProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {


    // const handleToggle = (clickedId: string | undefined) => {

    //     const postTog = document.getElementById('post');
    //     const forumTog = document.getElementById('forum');

    //     if (clickedId === postTog?.id && postTog?.classList.contains('active')) {
    //         return;
    //     } 
    //     if (clickedId === forumTog?.id && forumTog?.classList.contains('active')) {
    //         return;
    //     }
    //     postTog?.classList.toggle('active');
    //     forumTog?.classList.toggle('active');
    // }

    // const handleToggle = (clickedId: SetStateAction<string>) => {
    //     if (clickedId === activeTab) {
    //         return;
    //     }
    //     setActiveTab(clickedId);
    // }

    return (
        <header>
        <nav>
            <span
            onClick={() => setActiveTab('post')}
            style={{ fontWeight: activeTab === 'post' ? 'bold' : 'normal' }}
            >
            Post Feedback
            </span> /
            <span
            onClick={() => setActiveTab('forum')}
            style={{ fontWeight: activeTab === 'forum' ? 'bold' : 'normal' }}
            >
            View Forum
            </span>

            {/* <div className="radio-inputs">
                <label className="radio">
                    <input type="radio" name="radio" onClick={() => setActiveTab('post')}/>
                    <span className="name">Post Feedback</span>
                </label>
                <label className="radio">
                    <input type="radio" name="radio" onClick={() => setActiveTab('forum')}/>
                    <span className="name">View Forum</span>
                </label>
            </div> */}
        </nav>
        </header>
    )
}

export default Header;