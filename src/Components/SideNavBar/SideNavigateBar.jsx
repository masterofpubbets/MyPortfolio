import { React } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
import eslamPic from '../../Assets/eslam.jpg';
import SideBarBG from '../../Assets/abstract.jpg';

function SideNavBar() {

    useEffect(() => {
        M.AutoInit();
    });

    return (
        <div>
            
            <ul id="slide-out" className="sidenav">
                <li><div className="user-view">
                    <div className="background">
                        <img src={SideBarBG} alt="Eslam"></img>
                    </div>
                    <img className="circle" src={eslamPic} alt="Eslam Aly"></img>
                    <span className="white-text name">Eslam Aly</span>
                    <span className="white-text email">master.pubbets@gmail.com</span>
                </div></li>

                <li><NavLink to="/skills"><i className="material-icons">directions_run</i>SKILLS</NavLink></li>
                <li><NavLink to="/works"><i className="material-icons">business_center</i>WORK</NavLink></li>
                <li><NavLink to="/about"><i className="material-icons">cloud</i>ABOUT</NavLink></li>
                <li><NavLink to="/contacts"><i className="material-icons">contact_mail</i>CONTACT</NavLink></li>

                <li><div className="divider"></div></li>
                <li><a href='/#' className="subheader">Social</a></li>
                <li><a className="waves-effect" href="https://www.linkedin.com/in/eslam-aly-4041b1a7/">Go to linkedin</a></li>
            </ul>
            <a href="/#" data-target="slide-out" className="sidenav-trigger"><i className="medium material-icons brown-text">apps</i></a>
        </div>
    );
}

export default SideNavBar;