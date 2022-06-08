import './UseCases.css';
import { NavLink } from 'react-router-dom';
import UXUIIcon from '../../Assets/uxui.svg';
import eaIcon from '../../Assets/enterprisearchitecture.svg';
import pmIcon from '../../Assets/pms128.png';
import Icon from '../Icons/Icon';
import PageTitle from '../Header/PageTitle';
import HomePageSlider from '../Misc/HomePageSlider';


function UseCases() {
    return (
        <div className='UseCasesSection' id='id-use-case'>
            <PageTitle title="Use Cases" color="AppColorBrown" boxColor="AppBackgroundBrown" />
            <div className='IconsContainer row'>
                <NavLink to="/usecases">
                    <div className='Icon col s12 m6 l3'><Icon title="UX Design" icon={UXUIIcon} color="brown-text text-darken-4" /></div>
                </NavLink>
                <NavLink to="/ea">
                    <div className='Icon col s12 m6 l3'><Icon title="Enterprise Architecture" icon={eaIcon} color="brown-text text-darken-4" /></div>
                </NavLink>
                <NavLink to="/proman">
                    <div className='Icon col s12 m6 l3'><Icon title="Product Management" icon={pmIcon} color="brown-text text-darken-4" /></div>
                </NavLink>
            </div>
            <div className='row'>
                <HomePageSlider css="silder-buttons" color="amber lighten-2" size="Tiny" foreColor="black-text" cssSlider="silder-button" />
            </div>
        </div>
    );
};

export default UseCases;