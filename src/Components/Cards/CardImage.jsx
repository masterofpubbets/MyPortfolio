import React from "react";

function CardImage({ img, title, texts, imageCSS, contentCSS, maxHeight }) {
    return (
        <div className="card">
            <div className={"card-image yellow " + imageCSS}>
                <img src={img} alt={title}></img>
            </div>
            <div className={"card-content " + contentCSS}>
                <span className="card-title">{title}</span>
                {texts.map((t, index) => <p key={index}>{t}</p>)}
            </div>
        </div>
    );
}


export default CardImage;