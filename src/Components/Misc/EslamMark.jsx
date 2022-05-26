import './EslamMark.css'
import { NavLink } from 'react-router-dom';

function EslamMark() {
    return (
        <div className="EslamMark">
            <NavLink to="/">
                <p>Eslam <span>Aly</span></p>
            </NavLink>
            <div className="MarkCircle"></div>

        </div>
    );

};

export default EslamMark;