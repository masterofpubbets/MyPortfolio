import { React } from 'react';

function AvatarListImage({items}) {

    return (
        <div>
            <ul className="collection">

                {items.map((item, index) => {
                    return (
                    <li key={index} className={"collection-item avatar " + item.backColor}>
                        <img src={item.image} alt={item.title} className="circle"></img>
                        <span className="title fontWeight-bold">{item.title}</span>
                        <p>{item.text}</p>
                        {item.text2 && <p><br></br>{item.text2}</p>}
                    </li>
                    )
                })}
                
            </ul>
        </div>
    );

}

export default AvatarListImage;