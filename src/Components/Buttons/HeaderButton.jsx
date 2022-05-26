import './HeaderButton.css';

function HeaderButton(params) {
    const title = params.title;
    const link = params.link;
    const external = params.external;

    return (
        <div className='MainButtonStyle'>
            {external && <a href={link} target="_blank" rel="noopener noreferrer"><p className='HeaderButton'>{title}</p></a>}
            {!external && <p className='HeaderButton'>{title}</p>}
        </div>
        
    );
};

export default HeaderButton;