import './Articles.css';
import { NavLink } from 'react-router-dom';
import PageTitle from '../Header/PageTitle';
import HomePageSlider from '../Misc/HomePageSlider';
import ArticleItem from './ArticleItem';
import poImage from '../../Assets/manager.png';


function Articles() {
    return (
        <div className='Articles' id='id-article'>
            <PageTitle title="My Articles" color="AppColorRed" boxColor="AppBackgroundLightRed" />
            <div className='IconsContainer row'>
                <div className='col s12 m6 l4'>
                    <NavLink to="/articlepo">
                        <ArticleItem icon={poImage} title="Product Owner Framework" color="brown-text text-darken-1" />
                    </NavLink>
                </div>
            </div>
            <div className='row'>
                <HomePageSlider css="silder-buttons" color="brown lighten-4" size="Tiny" foreColor="brown-text text-brown" cssSlider="silder-button" />
            </div>
        </div>
    );
};

export default Articles;