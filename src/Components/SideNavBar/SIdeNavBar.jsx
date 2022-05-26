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
                    <a href="#"><img className="circle" src={eslamPic} alt="Eslam Aly"></img></a>
                    <a href="#"><span className="white-text name">Eslam Aly</span></a>
                    <a href="#"><span className="white-text email">master.pubbets@gmail.com</span></a>
                </div></li>

                <li><NavLink to="/skills"><i className="material-icons">directions_run</i>SKILLS</NavLink></li>
                 <li><a href="#"><i className="material-icons">business_center</i>WORK</a></li>
                <li><a href="./myresume/eslam.html" target="_blank" rel="noopener noreferrer"><i className="material-icons">recent_actors</i>RESUME</a></li>
                <li><a href="#"><i className="material-icons">cloud</i>ABOUT</a></li>
                <li><a href="#"><i className="material-icons">contact_mail</i>CONTACT</a></li>
                
                <li><div className="divider"></div></li>
                <li><a className="subheader">Social</a></li>
                <li><a className="waves-effect" href="https://www.linkedin.com/in/eslam-aly-4041b1a7/">Go to linkedin</a></li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="medium material-icons brown-text">apps</i></a>

        </div>
    );
}

export default SideNavBar;