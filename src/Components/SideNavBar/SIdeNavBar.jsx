import { useEffect } from 'react';
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
                <li><a href="#"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#">Second Link</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Subheader</a></li>
                <li><a className="waves-effect" href="#">Third Link With Waves</a></li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>

        </div>
    );
}

export default SideNavBar;