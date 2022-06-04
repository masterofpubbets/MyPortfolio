import './EslamMark.css'
import { NavLink } from 'react-router-dom';
import homeLogo from '../../Assets/home.svg';

function EslamMark() {
    return (
        <div className="EslamMark">
            <NavLink to="/">
                <p>Eslam <span>Aly</span></p>
            </NavLink>

            <NavLink to="/">
                <img className=' roll-in-left' src={homeLogo} alt="Home"></img>
            </NavLink>

        </div>
    );

};

export default EslamMark;