import './Breadcrumb.css'
import Breadcrumb from "./Breadcrumb";

function Breadcrumbs(params) {
    const navItems = params.navItems;

    return (
        <div className="Breadcrumb-container">
            {navItems.map((item) =>
                <Breadcrumb
                    key={item.key}
                    mapkey={item.key}
                    link={item.link}
                    arrowVisible={item.arrowVisible}
                    foreColor={item.foreColor}
                    title={item.title}
                />
            )}

        </div>
    );

}

export default Breadcrumbs;