import { NavLink } from 'react-router-dom';

function Button(params) {
    let buttonLink = params.link + "/" + params.linkParaValue
    const buttonIcon = params.buttonIcon;
    const buttonText = params.buttonText;
    const buttonCss = "btn " + params.buttonCss;
    const iconCss = params.iconSize + " material-icons";
    const extrnal = params.extrnal;

    if ((params.linkParaValue === "") || (params.linkParaValue === undefined)) {
        buttonLink = params.link
        console.log(buttonLink)
    }

    const GenerateButton = () => {
        if (extrnal === false) {
            return (
                <NavLink to={buttonLink}>
                    <button className={buttonCss}><i className={iconCss}>{buttonIcon}</i>{buttonText}</button>
                </NavLink>
            )
        } else {
            return (
                <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                    <button className={buttonCss}><i className={iconCss}>{buttonIcon}</i>{buttonText}</button>
                </a>
            )
        }
    };

    return (
        <div>
            {GenerateButton()}
        </div>
    )

}


export default Button;