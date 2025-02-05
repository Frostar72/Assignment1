import { useState } from 'react';
import Link from "next/link";

export default function Home() {
  // Declare a state variable 'message' with initial value as an empty string
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    
    // Get the value entered in the name input field
    const name = e.target.name.value;

    // Check if the name is empty
    if (!name) {
      alert('Please enter your name'); // Alert user if no name is entered
      return;
    }

    // Set a personalized message if name is provided
    setMessage('Hello ' + name + ', Really nice to meet you!');
  };

  return (
    <div className="container">
      {/* Navigation bar with links to other pages */}
      <nav className="navBar">
        <Link href="/">Home</Link>
        <Link href="/aboutMe">About Me</Link>
        <Link href="/career">My Career</Link>
      </nav>

      {/* Header section with a welcome message */}
      <header className="header">
        <h1>Welcome to My Website</h1>
        <p>I hope you have a fun time in here reading stuff about me.</p>
      </header>

      {/* Introductory text asking the visitor for their name */}
      <p className="intro-text">Now I want to know more about you, the person who is reading this website.</p>

      {/* Form to input user's name */}
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" className="input" />
        <button type="submit" className="button">Submit</button>
      </form>

      {/* Display a personalized greeting message if 'message' state is set */}
      {message && <p className="message">{message}</p>}
    </div>
  );
}
