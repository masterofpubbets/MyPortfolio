import './UseCases.css';
import UXUIIcon from '../../Assets/uxui.svg';
import Icon from '../Icons/Icon';
import PageTitle from '../Header/PageTitle';
import HomePageSlider from '../Misc/HomePageSlider';


function UseCases() {
    return (
        <div className='UseCasesSection' id='id-use-case'>
            <PageTitle title="Use Cases" color="AppColorBrown" boxColor="AppBackgroundBrown"/>
            <div className='IconsContainer row'>
                <div className='Icon col s12 m6 l3'><Icon title="UX Design" icon={UXUIIcon} color="brown-text text-darken-4" /></div>
            </div>
            <div className='row'>
                <HomePageSlider css="silder-buttons" color="amber lighten-2" size = "Tiny" foreColor = "black-text" cssSlider = "silder-button"/>
            </div>
        </div>
    );
};

export default UseCases;