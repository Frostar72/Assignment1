import React, { useState } from 'react';
import Link from 'next/link';

export default function Career() {
    // State to manage hover effect for the image
    const [hover, setHover] = useState(false);

    // Handle mouse over event
    const handleMouseOver = () => {
        setHover(true); // Set hover to true when mouse is over the image
    };

    // Handle mouse out event
    const handleMouseOut = () => {
        setHover(false); // Set hover to false when mouse leaves the image
    };

    return (
        <div className='container'>
            {/* Navigation bar with links to other pages */}
            <nav className='navBar'>
                <Link href="/">Home</Link>
                <Link href="/aboutMe">About Me</Link>
                <Link href="/career">My Career</Link>  
            </nav>

            {/* Career section header with an introductory paragraph */}
            <header>
                <h1>My Career</h1>
                <p>
                    My journey to becoming a data analyst started with a fascination for how data shapes decisions and solves problems. 
                    Studying at Humber College has been the first step toward turning this passion into a career. Here, I’m learning 
                    essential tools like Python, SQL, and Tableau, while developing the analytical mindset needed to uncover insights from complex datasets.<br /><br />
                    What excites me most about data analysis is its ability to drive real-world impact. I see myself using data to solve 
                    problems, predict trends, and improve processes in industries like business, healthcare, or marketing. Beyond technical 
                    skills, I’m focused on mastering data storytelling and collaborating with teams to turn insights into action.<br /><br />
                    My goal is to become a data analyst who not only excels in analyzing data but also uses it to create meaningful change. 
                    With every project and lesson at Humber, I’m building the foundation for a career where I can make a difference—one dataset at a time.
                </p>
            </header>

            {/* Conditional rendering for image based on hover state */}
            <div>
                {hover ? (
                    // If hovered, show sad face image
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtuBrXiQP5pCioygWtQykID5uDdp5xq2Yeg&s"
                        alt="sadFace"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    />
                ) : (
                    // If not hovered, show smile face image
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUK8SIKu_YqBCylmRh0sEkqX0O3mR7F4Jf9Q&s"
                        alt="smileFace"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    />
                )}
            </div>
        </div>
    );
}
