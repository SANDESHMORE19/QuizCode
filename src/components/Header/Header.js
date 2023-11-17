import React from 'react';
import './Header.css';
import {Link, NavLink} from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header'>
    <NavLink to="/" ClassName='logomain'>
    <h3 id='logo'>QuizCode</h3>
    </NavLink>
        
        <div className='header-right'>
        <Link to="topics">
        <h5 className='heading-topic'> Topics</h5>
        </Link>
            <button type="button" className="btn button-86">Light</button>
        </div>
        

    </header>
  )
}
