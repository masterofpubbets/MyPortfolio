import './UseCases.css';
import UXUIIcon from '../../Assets/uxui.svg';
import Icon from '../Icons/Icon';
import PageTitle from '../Header/PageTitle';


function UseCases() {
    return (
        <div className='UseCasesSection'>
            <PageTitle title="Use Cases" color="AppColorBlue" boxColor="AppBackgroundLightRed"/>
            <div className='IconsContainer row'>
                <div className='Icon col s12 m6 l3'><Icon title="UX Design" icon={UXUIIcon} /></div>
            </div>
        </div>
    );
};

export default UseCases;