import { NavLink } from 'react-router-dom';

function Breadcrumb(params) {
    const link = params.link;
    const arrowVisible = params.arrowVisible;
    const css = "material-icons " + params.foreColor;
    const title = params.title;

    return (
        <div>
            <NavLink key={params.mapkey} className="Breadcrumb-container-item" to={link}>
                <p className={params.foreColor}>{title}</p>
                {arrowVisible && <i className={css}>chevron_right</i>}
             </NavLink>
        </div>
    );

}

export default Breadcrumb;