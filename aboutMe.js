import React, {useState} from 'react';
import Link from 'next/link';


export default function About(){
    // Calculator
    const [result, setResult] = useState('');
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    // Functions for add
    const add = () => {
        setResult(parseFloat(num1) + parseFloat(num2));
    }
    // Functions for subtraction
    const subtract = () => {
        setResult(parseFloat(num1) - parseFloat(num2));
    }
    // Functions for multiply
    const multiply = () => {
        setResult(parseFloat(num1) * parseFloat(num2));
    }
    // Functions for divide
    const divide = () => {
        setResult(parseFloat(num1) / parseFloat(num2));
    }
    return (
        <div className='container'>
            <nav className='navBar'>
                  <Link href="/">Home</Link>
                  <Link href="/aboutMe">About Me</Link>
                  <Link href="/career">My career</Link>  
          </nav>
            <header>
                <h1>About Me</h1>
                <p>I am a dedicated and passionate student currently pursuing a career in data analysis at Humber College. With a keen interest in understanding how data influences decision-making, I am learning powerful tools like Python, SQL, and Tableau to develop the analytical skills necessary to solve real-world problems. Beyond technical expertise, I am focused on mastering data storytelling and working collaboratively with teams to create meaningful change. Whether it's solving complex problems or predicting trends in industries like healthcare, business, or marketing, I am eager to make an impact with data, one dataset at a time.</p>
            </header>
          <div className='calculator'>
                <h1>Here is a Calculator</h1>
                <p>Enter two numbers and select an operation to calculate the result.</p>
            <div>
                <input type='number' placeholder='Enter first number' onChange={(e) => setNum1(e.target.value)}></input>
                <input type='number' placeholder='Enter second number' onChange={(e) => setNum2(e.target.value)}></input>
                <ul>
                    <li><button onClick={add}>Add</button></li>
                    <li><button onClick={subtract}>Subtract</button></li>
                    <li><button onClick={multiply}>Multiply</button></li>
                    <li><button onClick={divide}>Divide</button></li>
                </ul>
                <p>Result: {result}</p>
            </div>
        </div>
        </div>
        );
}
