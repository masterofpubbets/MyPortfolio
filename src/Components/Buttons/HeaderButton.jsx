import { React } from 'react';
import './HeaderButton.css';

function HeaderButton(params) {
    const title = params.title;
    const link = params.link;
    const external = params.external;

    return (
        <div className='MainButtonStyle  roll-in-left'>
            {external && <a href={link} target="_blank" rel="noopener noreferrer"><p className='HeaderButton'>{title}</p></a>}
            {!external && <p className='HeaderButton'>{title}</p>}
        </div>
        
    );
};

export default HeaderButton;