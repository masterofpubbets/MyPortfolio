import { React } from 'react';
import { useEffect } from "react";
import CardButton from "../../Components/Cards/CardButton";
import ciImage from '../../Assets/jenkins-icon.png';


function CicdMenu(params) {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, []);
    
    return (
        <div className="container main-div">
            <div className="divider"></div>
            <div className="section">
                <h5>CI/CD with Self-Hosting</h5>
            </div>
            <div className="row">
                <CardButton
                    css="col s12 m6 l4"
                    header="My Portfolio"
                    img={ciImage}
                    det="Implementing CI/CD/CD for my Portfolio involves a structured pipeline to automate software development and deployment efficiently and Securely Hosting in my network."
                    buttonCss="brown darken-1"
                    buttonIcon="description"
                    buttonText="Open Case"
                    link="/usecases/cicdproject"
                    linkParaValue="myportfolio"
                />
            </div>
        </div>
    );

}

export default CicdMenu;