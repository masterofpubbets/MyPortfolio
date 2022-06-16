import { React } from 'react';
import { useEffect } from "react";
import CardButton from "../../Components/Cards/CardButton";
import eicaImage from '../../Assets/eica.svg';


function EAMenu(params) {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, []);
    
    return (
        <div className="container main-div">
            <div className="divider"></div>
            <div className="section">
                <h5>Enterprise Architecture Use Cases</h5>
            </div>
            <div className="row">
                <CardButton
                    css="col s12 m6 l4"
                    header="Elelctrical and Instrumentation App"
                    img={eicaImage}
                    det="A specific system to control the production steps for electrical and instrumentation items (Cables, Junction Box, Trays, Fixtures, etc.) in oil and gas project."
                    buttonCss="brown darken-1"
                    buttonIcon="description"
                    buttonText="Open Case"
                    link="/usecases/usecaseproject"
                    linkParaValue="eica ea"
                />
            </div>
        </div>
    );

}

export default EAMenu;