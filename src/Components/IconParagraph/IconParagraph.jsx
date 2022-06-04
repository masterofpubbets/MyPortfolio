import './IconParagraph.css';

function IconParagraph(params) {
    const img = params.img;
    const header = params.header;
    const text = params.text;
    const cssImage = "material-icons small icon-paragraph-image " + params.imageForeColor + " " + params.imageBackColor;
    const cssHeader = "icon-paragraph-header " + params.headerForeColor + " " + params.headerBackColor;
    const cssText = "icon-paragraph-text " + params.textForeColor + " " + params.textBackColor;

    return (
        <div key={params.mapKey} className="icon-paragraph">
            <p className={cssHeader}>{header}</p>
            <i className={cssImage}>{img}</i>
            <p className={cssText}>{text}</p>
        </div>
    )
    
}

export default IconParagraph;