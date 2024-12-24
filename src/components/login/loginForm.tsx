/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react"
import './loginForm.css'

const loginForm: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/feedback/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                setError('');
                setEmail('');
                setPassword('');
                // Redirect to the landing page
                window.location.href = '/landing';
            } else {
                setError('Invalid credentials. Please try again.');
            }
            console.log(data);
            localStorage.setItem('userId', data.user._id);
            localStorage.setItem('userName', data.user.name);
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Failed to login. Please try again.');
            setEmail('');
            setPassword('');
        }
    }
    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inputs">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
            <p className="error">{ error }</p>
        </div>
    )
}

export default loginForm;