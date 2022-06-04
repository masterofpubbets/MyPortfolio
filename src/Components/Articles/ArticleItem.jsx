import './Articles.css';

function ArticleItem(params) {
    const icon = params.icon;
    const title = params.title;
    var color = params.color;
    const link = params.link;

    if (color === undefined) {
        color = "AppColorBlack"
    }

    if (link === undefined) {
        return (
            <div className="article-icons">
                <img src={icon} alt={title}></img>
                <p className={color}>{title}</p>
            </div>
        )
    } else {
        return (
            <div className="article-icons z-depth-5">
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={icon} alt={title}></img>
                </a>
                <a href={link} target="_blank" rel="noreferrer">
                    <p className={color}>{title}</p>
                </a>
            </div>
        )
    }

};

export default ArticleItem;