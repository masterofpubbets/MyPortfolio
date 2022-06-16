import { React } from 'react';
import './Header.css';

function PageTitle(params) {
    const title = params.title;
    const color = params.color;
    const Boxcolor = 'TitleBox ' + params.boxColor;

    return (
        <div className='PageTitle'>
            <div className={color}><p>{title}</p></div>
            <div className={Boxcolor}></div>
        </div>
    );
};

export default PageTitle;