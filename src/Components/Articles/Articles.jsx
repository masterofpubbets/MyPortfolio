import './Articles.css';
import PageTitle from '../Header/PageTitle';
import HomePageSlider from '../Misc/HomePageSlider';


function Articles() {
    return (
        <div className='Articles' id='id-article'>
            <PageTitle title="Articles" color="AppColorRed" boxColor="AppBackgroundLightRed"/>
            <div className='IconsContainer row'>

            </div>
            <div className='row'>
            <HomePageSlider css="silder-buttons" color="brown lighten-4" size = "Tiny" foreColor = "brown-text text-brown" cssSlider = "silder-button"/>
            </div>
        </div>
    );
};

export default Articles;