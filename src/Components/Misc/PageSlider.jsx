function PageSlider(params) {
    const link = params.link;
    const size = params.size + " material-icons";
    const icon = params.icon;
    const color = params.color;
    const foreColor = params.foreColor;
    const css = params.css;
    const tooltip = params.tooltip;

    return (
        <div className={css}>
            <a href={link} className="tooltipped" data-position="top" data-tooltip={tooltip}>
                <i className={ size + ' ' + color + ' ' + foreColor }>{icon}</i>
            </a>
        </div>
    );

}

export default PageSlider;