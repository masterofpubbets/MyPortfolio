import { useEffect } from 'react';
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';

function Collapsible(params) {
    const details = params.details;
    const title = params.title;
    const icon = params.icon;
    const cssColor = "collapsible-header " + params.backColor + " " + params.foreColor;

    useEffect(()=> {
        M.AutoInit();
    });

    return (
        <div>
            <ul className="collapsible">
                <li>
                    <div className={cssColor}><i className="material-icons">{icon}</i>{title}</div>
                    <div className="collapsible-body"><span>{details}</span></div>
                </li>
            </ul>
        </div>
    );

};

export default Collapsible;