import { useEffect } from 'react';
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';

function Collapsible(params) {
    const details = params.details;
    const title = params.title;
    const icon = params.icon;
    const cssColor = "collapsible-header " + params.backColor + " " + params.foreColor;
    const cssBodyColor = "collapsible-body " + params.backColor + " " + params.foreColor;
    const details2 = params.details2;
    const title2 = params.title2;
    const icon2 = params.icon2;
    const cssColor2 = "collapsible-header " + params.backColor2 + " " + params.foreColor2;
    const cssBodyColor2 = "collapsible-body " + params.backColor2 + " " + params.foreColor2;

    useEffect(()=> {
        M.AutoInit();
    });

    return (
        <div>
            <ul className="collapsible popout">
                <li>
                    <div className={cssColor}><i className="material-icons">{icon}</i>{title}</div>
                    <div className={cssBodyColor}><span>{details}</span></div>
                </li>
                <li>
                    <div className={cssColor2}><i className="material-icons">{icon2}</i>{title2}</div>
                    <div className={cssBodyColor2}><span>{details2}</span></div>
                </li>
            </ul>
        </div>
    );

};

export default Collapsible;