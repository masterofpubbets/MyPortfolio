import { useParams } from "react-router-dom";
import Breadcrumbs from "../../Components/Header/Breadcrumbs";
import UseCaseItem from "../../Components/UseCases/UseCaseItem";
import { CoffeeShopData, CoffeeShopDataInsight, webSiteShoping, projectPipeline, eicaEA } from '../../Store/Consts/UseCaseData';
import imageWebsite from '../../Assets/websitemockup.png';
import imagePP from '../../Assets/pphome.jpg';
import imageEICAEA from '../../Assets/eicaea.png';
import imageCoffeeshop  from '../../Assets/coffeeshopmockup.png';

function UseCaseProject(params) {
    
    const { name } = useParams();
    console.log(process.env.PUBLIC_URL);

    const GenerateNavItems = () => {
        if (name === "coffee shop app") {
            return (
                <Breadcrumbs navItems={CoffeeShopData.navItems} />
            )
        }

        if (name === "coffee shop app2") {
            return (
                <Breadcrumbs navItems={CoffeeShopDataInsight.navItems} />
            )
        }

        if (name === "Shopping Website") {
            return (
                <Breadcrumbs navItems={webSiteShoping.navItems} />
            )
        }

        if (name === "Project Pipeline") {
            return (
                <Breadcrumbs navItems={projectPipeline.navItems} />
            )
        }

        if (name === "eica ea") {
            return (
                <Breadcrumbs navItems={eicaEA.navItems} />
            )
        }
    };
    const GenerateItems = () => {
        if (name === "coffee shop app") {
            return (
                <UseCaseItem 
                items={CoffeeShopData.items} 
                rightImage={imageCoffeeshop} 
                header={CoffeeShopData.header} 
                headerForeColor="light-blue-text text-darken-4"
                caseStudyLink={CoffeeShopData.caseStudyLink}
                mockupLink={CoffeeShopData.mockupLink}
                />
            )
        }
        if (name === "coffee shop app2") {
            return (
                <UseCaseItem 
                items={CoffeeShopDataInsight.items} 
                rightImage={imageCoffeeshop} 
                header={CoffeeShopDataInsight.header} 
                headerForeColor="light-blue-text text-darken-4"
                caseStudyLink={CoffeeShopDataInsight.caseStudyLink}
                mockupLink={CoffeeShopDataInsight.mockupLink}
                />
            )
        }

        if (name === "Shopping Website") {
            return (
                <UseCaseItem 
                items={webSiteShoping.items} 
                rightImage={imageWebsite} 
                header={webSiteShoping.header} 
                headerForeColor="light-blue-text text-darken-4"
                caseStudyLink={webSiteShoping.caseStudyLink}
                mockupLink={webSiteShoping.mockupLink}
                />
            )
        }

        if (name === "Project Pipeline") {
            return (
                <UseCaseItem 
                items={projectPipeline.items} 
                rightImage={imagePP} 
                header={projectPipeline.header} 
                headerForeColor="light-blue-text text-darken-4"
                caseStudyLink={projectPipeline.caseStudyLink}
                mockupLink={projectPipeline.mockupLink}
                />
            )
        }

        if (name === "eica ea") {
            return (
                <UseCaseItem 
                items={eicaEA.items} 
                rightImage={imageEICAEA} 
                header={eicaEA.header} 
                headerForeColor="light-blue-text text-darken-4"
                caseStudyLink={eicaEA.caseStudyLink}
                mockupLink={eicaEA.mockupLink}
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

export default UseCaseProject;