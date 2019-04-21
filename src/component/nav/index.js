import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

const Nav = props => (
    <ul className="nav">
        {
            props.list.map((ele, idx) => (
                <li key={idx}><Link to={
                    { pathname:`${ele.url}`}}
                >{ele.text}</Link></li>
            ))
        }
    </ul>
);

export default Nav;
