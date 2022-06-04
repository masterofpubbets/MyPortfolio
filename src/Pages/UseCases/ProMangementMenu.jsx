import CardButton from "../../Components/Cards/CardButton";
import pp from '../../Assets/pp.png';


function ProManagementMenu() {
    return (
        <div className="container main-div">
            <div className="divider"></div>
            <div className="section">
                <h5>Project Management Use Cases</h5>
            </div>
            <div className="row">
                <CardButton
                    css="col s12 m6 l4"
                    header="Coffee Shop App"
                    img={pp}
                    det="We’re creating an app that is platform for ordering coffee in advanced, and also the ability to create custom coffee, by choosing ground beans type and flavors.
                    Then provide facility to make the payment to avoid waiting time at cashier.
                    "
                    buttonCss="brown darken-1"
                    buttonIcon="description"
                    buttonText="Open Case"
                    link="/usecases/usecaseproject"
                    linkParaValue="coffee shop app"
                />
            </div>
        </div>
    );

}

export default ProManagementMenu;