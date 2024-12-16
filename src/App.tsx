import { useState } from 'react'
import './App.css'
import FeedbackForm from './components/FeedbackForm'
import Header from './components/Header'
import Forum from './components/Forum';

function App() {

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

export default App
