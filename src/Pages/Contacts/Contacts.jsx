import { React } from 'react';
import { useEffect } from 'react';

function Contacts() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, []);
    
    return (
        <div className="container main-div">
            <div className="divider"></div>
            <div className="section">
                <h5>Contacts</h5>
            </div>
            <div className="row">
                <p>Name: Eslam Aly</p>
                <p>Phone: +62 817-7653-1888</p>
                <p>Personal Mail: master.pubbets@gmail.com</p>
                <a href={"https://www.linkedin.com/in/eslam-aly-4041b1a7/"} target="_blank" rel="noopener noreferrer">
                    <p>Linkedin: https://www.linkedin.com/in/eslam-aly-4041b1a7/</p>
                </a>
                <a href={"https://github.com/masterofpubbets"} target="_blank" rel="noopener noreferrer">
                    <p>Github</p>
                </a>
                <a href={"https://hub.docker.com/u/masterofpubbets"} target="_blank" rel="noopener noreferrer">
                    <p>Dockerhub</p>
                </a>
           </div>
        </div>
    );
    
}

export default Contacts;