import { useEffect } from "react";
import CardButton from "../../Components/Cards/CardButton";
import cup from '../../Assets/cup.svg';
import shoes from '../../Assets/shoes.svg';
import pp from '../../Assets/pp.png';
import eica from '../../Assets/eica.svg';



function UCUXMenu() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, []);

    return (
        <div className="container main-div">
            <div className="divider"></div>
            <div className="section">
                <h5>UI/UX Use Cases</h5>
            </div>
            <div className="row">
                <CardButton
                    css="col s12 m6 l4"
                    header="Coffee Shop App"
                    img={cup}
                    det="We’re creating an app that is platform for ordering coffee in advanced, and also the ability to create custom coffee, by choosing ground beans type and flavors.
                    Then provide facility to make the payment to avoid waiting time at cashier.
                    "
                    buttonCss="brown darken-1"
                    buttonIcon="description"
                    buttonText="Open Case"
                    link="/usecases/usecaseproject"
                    linkParaValue="coffee shop app"
                />

                <CardButton
                    css="col s12 m6 l4"
                    header="Shopping Website"
                    img={shoes}
                    det="Consumers find a product of interest by visiting the website of the retailer directly, which displays product's availability and pricing at different e-retailers.
                    "
                    buttonCss="brown darken-1"
                    buttonIcon="description"
                    buttonText="Open Case"
                    link="/usecases/usecaseproject"
                    linkParaValue="Shopping Website"
                />

                <CardButton
                    css="col s12 m6 l4"
                    header="Project Pipeline App"
                    img={pp}
                    det="Controlling multi phases of a construction project from engineering to commissioning
                    By centralizing information, transform data into a standard shape,
                    Reducing human process and increasing automation and cloudification.
                    .
                    "
                    buttonCss="brown darken-1"
                    buttonIcon="description"
                    buttonText="Open Case"
                    link="/usecases/usecaseproject"
                    linkParaValue="Project Pipeline"
                />

                <CardButton
                    css="col s12 m6 l4"
                    header="EICA-Production-App"
                    img={eica}
                    det="A specific system to control the production steps for electrical and instrumentation items (Cables, Junction Box, Trays, Fixtures, etc.) in oil and gas project."
                    buttonCss="brown darken-1"
                    buttonIcon="description"
                    buttonText="Open Case"
                    link="/usecases/usecaseproject"
                    linkParaValue="eicaprostudy"
                />

                <CardButton
                    css="col s12 m6 l4"
                    header="Coffee Shop App Insights"
                    img={cup}
                    det="We’re creating an app that is platform for ordering coffee in advanced, and also the ability to create custom coffee, by choosing ground beans type and flavors.
                    Then provide facility to make the payment to avoid waiting time at cashier."
                    buttonCss="brown darken-1"
                    buttonIcon="description"
                    buttonText="Open Case"
                    link="/usecases/usecaseproject"
                    linkParaValue="coffee shop app2"
                />

            </div>
        </div>
    );

}

export default UCUXMenu;