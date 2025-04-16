import { React } from 'react';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../Components/Header/Breadcrumbs";
import UseCaseItem from "../../Components/UseCases/UseCaseItem";
import { myportfolioCICDUseCase } from '../../Store/Consts/UseCaseData';
import imageWebsite from '../../Assets/websitemockup.png';
import imagePP from '../../Assets/pphome.jpg';
import imageEICAEA from '../../Assets/eicaea.png';
import imageCoffeeshop  from '../../Assets/coffeeshopmockup.png';
import imageCircles  from '../../Assets/site-circle.svg';
import bpmnImage from '../../Assets/proman/eicapromanbpmn.png';

function CicdShProject(params) {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, []);
    
    const { name } = useParams();

    const GenerateNavItems = () => {
        if (name === "myportfolio") {
            return (
                <Breadcrumbs navItems={myportfolioCICDUseCase.navItems} />
            )
        }
    };
    const GenerateItems = () => {
        if (name === "myportfolio") {
            return (
                <UseCaseItem 
                items={myportfolioCICDUseCase.items} 
                rightImage={imageCircles} 
                header={myportfolioCICDUseCase.header} 
                headerForeColor="light-blue-text text-darken-4"
                caseStudyLink={myportfolioCICDUseCase.caseStudyLink}
                mockupLink={myportfolioCICDUseCase.mockupLink}
                />
            )
        }
    };



    return (
        <div className="container main-div">
            {GenerateNavItems()}
            <div className="divider"></div>
            {GenerateItems()}
        </div>
    );

}

export default CicdShProject;