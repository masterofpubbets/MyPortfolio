function AvatarList(params) {
    const items = params.items;

    return (
        <div>
            <ul className="collection">

                {items.map((item, index) => {
                    return (
                    <li key={index} className={"collection-item avatar " + item.backColor}>
                        <i className={"material-icons circle " + item.iconBackColor}>{item.iconName}</i>
                        <span className="title fontWeight-bold">{item.title}</span>
                        <p>{item.text}</p>
                    </li>
                    )
                })}
                
            </ul>
        </div>
    );

}

export default AvatarList;