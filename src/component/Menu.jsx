import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/weather1">WeatherApp1</Link></li>
                <li><Link to="/weather2">WeatherApp2</Link></li>
            </ul>
        </div>
    );
};

export default Menu;