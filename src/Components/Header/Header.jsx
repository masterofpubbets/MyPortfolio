import './Header.css';
import EslamMark from '../Misc/EslamMark';
import HeaderButton from '../Buttons/HeaderButton';

function Header() {
    return (
        <div className="Header">
            <EslamMark />
            <div className='ButtonsSection hide-on-small-only'>
                <HeaderButton title="SKILLS" link="#" external={false}/>
                <HeaderButton title="WORK" link="#" external={false}/>
                <HeaderButton title="RESUME" link="#" external={true}/>
                <HeaderButton title="ABOUT" link="#" external={false}/>
                <HeaderButton title="CONTACT" link="#" external={false}/>
            </div>
        </div>
    );

};

export default Header;