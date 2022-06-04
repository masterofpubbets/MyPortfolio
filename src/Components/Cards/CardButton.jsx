import './CardButton.css';
import { NavLink } from 'react-router-dom';


function CardButton(params) {
    const mainCss = "div-margin-top-25 " + params.css;
    const header = params.header;
    const img = params.img;
    const det = params.det;
    const buttonCss = "btn " + params.buttonCss;
    const buttonIcon = params.buttonIcon;
    const buttonText = params.buttonText;
    const link = params.link;
    const linkParaValue = params.linkParaValue;

    return (
        <div className={mainCss}>
            <div className="card-button-main">
                <div className="card-button-header"><p>{header}</p></div>
                <div className="card-button-img roll-in-blurred-left"><img src={img} alt=""></img></div>
                <div className="card-button-det"><p>{det}</p></div>
                <div className="card-button-btn">
                    <NavLink to={`${link}/${linkParaValue}`}>
                        <button className={buttonCss}><i className="material-icons left">{buttonIcon}</i>{buttonText}</button>
                    </NavLink>
                </div>

            </div>
        </div>
    );

}

export default CardButton;