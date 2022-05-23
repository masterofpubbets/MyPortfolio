import './WhatIDo.css';
import ProductManagementIcon from '../../Assets/pms128.png';
import BusinessDeveloperIcon from '../../Assets/business100.png';
import AnalyticsIcon from '../../Assets/analytics.svg';
import UXUIIcon from '../../Assets/uxui.svg';
import EAIcon from '../../Assets/enterprisearchitecture.svg';
import DeveloperIcon from '../../Assets/developer.svg';
import DBIcon from '../../Assets/db.svg';
import CloudIcon from '../../Assets/cloud.svg';
import Icon from '../Icons/Icon';
import PageTitle from '../Header/PageTitle';


function WhatIDo() {
    return (
        <div className='WhatIDoSection'>
            <PageTitle title="What I Do" color="AppColorBlue" boxColor="AppBackgroundLightRed"/>
            <div className='IconsContainer row'>
                <div className='Icon col s12 m6 l3'><Icon title="Product Management" icon={ProductManagementIcon} /></div>
                <div className='Icon col s12 m6 l3'><Icon title="Business Developer" icon={BusinessDeveloperIcon} /></div>
                <div className='Icon col s12 m6 l3'><Icon title="UX Design" icon={UXUIIcon} /></div>
                <div className='Icon col s12 m6 l3'><Icon title="Data Analytics" icon={AnalyticsIcon} /></div>
                <div className='Icon col s12 m6 l3'><Icon title="Enterprise Architecture" icon={EAIcon} /></div>
                <div className='Icon col s12 m6 l3'><Icon title="Developing" icon={DeveloperIcon} /></div>
                <div className='Icon col s12 m6 l3'><Icon title="DBMS & SQL" icon={DBIcon} /></div>
                <div className='Icon col s12 m6 l3'><Icon title="Cloudification" icon={CloudIcon} /></div>
                
            </div>
        </div>
    );
};

export default WhatIDo;