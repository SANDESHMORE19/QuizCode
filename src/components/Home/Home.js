import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <section className='home'>
            <section className='content'>
                <h2 className='typed-out'>Come_On Guys, challenge yourself.....</h2>
                <p >
                "Explore the tech world with QuizCode –
                the go-to quiz app for web development enthusiasts!
                Test your knowledge in HTML, CSS, JavaScript, and React.
                 Whether you're a coding pro or just starting, our quizzes offer a fun way to stay sharp and informed.
                 Embark on this learning journey and master the technologies shaping the web!"
                </p>
            </section>
            <section>
            <Link to="/topics">
            <button type="button" className="btn btn-lg home-btn" >Take a Quiz</button>
        </Link>
               
            </section>



        </section>
    )
}
