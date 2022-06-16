import { React } from 'react';
import './Certificates.css';
import UXUIIcon from '../../Assets/google_ux_design.png';
import GooglePMIcon from '../../Assets/google_pm.svg';
import PMSIcon from '../../Assets/PSM1.png';
import PMPIcon from '../../Assets/PSP.png';
import JiraIcon from '../../Assets/jira.png';
import AgileIcon from '../../Assets/agile.png';
import Icon from '../Icons/Icon';
import PageTitle from '../Header/PageTitle';
import HomePageSlider from '../Misc/HomePageSlider';

function Certificates() {
    return (
        <div className='Certificates' id='id-certificate'>
            <PageTitle title="Certificates" color="AppColorBlack" boxColor="AppBackgroundBlack" />
            <div className='IconsContainer row'>
                <div className='Icon col s12 m6 l4'><Icon title="Google UX Design" icon={UXUIIcon} color="black-text" link="https://www.credly.com/badges/9cf17cfe-62af-4995-b4d8-87a20ae8703e/public_url" /></div>
                <div className='Icon col s12 m6 l4'><Icon title="Google Project Management Professional" icon={GooglePMIcon} color="black-text" link="https://www.credly.com/badges/84428432-b244-472f-a0c6-1c0f461e48cf/public_url" /></div>
                <div className='Icon col s12 m6 l4'><Icon title="Professional Scrum Product Owner™ I (PSPO I)" icon={PMPIcon} color="black-text" link="https://www.credly.com/badges/f58f070d-da9e-4804-99f8-38c79c1a69f9/public_url" /></div>
                <div className='Icon col s12 m6 l4'><Icon title="Professional Scrum Master™ I (PSM I)" icon={PMSIcon} color="black-text" link="https://www.credly.com/badges/c8b4eb1f-2238-4743-af69-bc106c8f36d2/public_url" /></div>
                <div className='Icon col s12 m6 l4'><Icon title="Agile with Atlassian Jira" icon={JiraIcon} color="black-text" link="https://www.coursera.org/account/accomplishments/certificate/Z92PEWGL8M8N" /></div>
                <div className='Icon col s12 m6 l4'><Icon title="Agile with Atlassian Jira" icon={AgileIcon} color="black-text" link="https://www.coursera.org/account/accomplishments/certificate/THA2K64FYY9J" /></div>
            </div>
            <div className='row'>
                <HomePageSlider css="silder-buttons" color="grey lighten-2" size="Tiny" foreColor="light-blue-text text-darken-4" cssSlider="silder-button" />
            </div>
        </div>
    );
};

export default Certificates;