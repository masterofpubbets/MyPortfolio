import { useEffect } from "react";
import M from "materialize-css";

function FloatingAction(params) {
    useEffect(() => {
        M.AutoInit();
    });
    const menu = params.menu;
    const mainColor = "btn-floating btn-large " + menu.main.colorName;



    return (
        <div className="fixed-action-btn">
            <button className={mainColor}>
                <i className="large material-icons">{menu.main.iconName}</i>
            </button>
            <ul>
                {
                    menu.items.map((item, index) => {
                        const itemClass = "tooltipped btn-floating " + item.colorName + " " + item.fontColor;
                        return (
                            <li key={index}>
                                <a href={item.link} className={itemClass} data-position="left" data-tooltip={item.text}>
                                    <i className="material-icons">{item.iconName}</i>
                                </a>
                            </li>
                        )
                    }
                    )
                }

            </ul>
        </div>
    );
}

export default FloatingAction;