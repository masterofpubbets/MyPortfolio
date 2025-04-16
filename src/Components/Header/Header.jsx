import { React } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import EslamMark from '../Misc/EslamMark';
import HeaderButton from '../Buttons/HeaderButton';

function Header() {
    return (
        <div className="Header">
            <EslamMark />
            <div className='ButtonsSection hide-on-small-only'>
                <NavLink to="/skills"><HeaderButton title="SKILLS" link="#" external={false}/></NavLink>
                <NavLink to="/works"><HeaderButton title="WORK" link="#" external={false}/></NavLink>
                <NavLink to="/about"><HeaderButton title="ABOUT" link="#" external={false}/></NavLink>
                <NavLink to="/contacts"><HeaderButton title="CONTACT" link="#" external={false}/></NavLink>
            </div>
        </div>
    );

};

export default Header;