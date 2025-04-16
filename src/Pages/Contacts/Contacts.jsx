import { React } from 'react';
import { useEffect } from 'react';

function Contacts() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, []);
    
    return (
        <div className="container main-div">
            <div class="divider"></div>
            <div class="section">
                <h5>Contacts</h5>
            </div>
            <div className="row">
                <p col s12 m12 l12>Name: Eslam Aly</p>
                <p col s12 m12 l12>Phone: +62 817-7653-1888</p>
                <p col s12 m12 l12>Personal Mail: master.pubbets@gmail.com</p>
                <a href={"https://www.linkedin.com/in/eslam-aly-4041b1a7/"} target="_blank" rel="noopener noreferrer">
                    <p col s12 m12 l12>Linkedin: https://www.linkedin.com/in/eslam-aly-4041b1a7/</p>
                </a>
                <a href={"https://github.com/masterofpubbets"} target="_blank" rel="noopener noreferrer">
                    <p col s12 m12 l12>Github</p>
                </a>
                <a href={"https://hub.docker.com/u/masterofpubbets"} target="_blank" rel="noopener noreferrer">
                    <p col s12 m12 l12>Dockerhub</p>
                </a>
           </div>
        </div>
    );
    
}

export default Contacts;