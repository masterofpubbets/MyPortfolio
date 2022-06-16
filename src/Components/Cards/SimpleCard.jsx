import './SimpleCard.css';
import React from "react";

function SimpleCard({ headerBackColor, headerForeColor, backColor, foreColor, headerText, headerImg, lines }) {
    return (
        <div className="simple-card-main">
            <div className={'simple-card-header ' + headerBackColor + " " + headerForeColor}>
                <p>{headerText}</p>
                <img src={headerImg} alt={headerText}></img>
            </div>
            <div className={'simple-card-body ' + backColor + " " + foreColor}>
                {lines.map((line, index) => <p key={index}>{line}</p>)}
            </div>
        </div>
    );

}

export default SimpleCard;