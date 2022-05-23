import './HomeSection.css';
import Media from '../Media/Media';
import eslam from '../../Assets/eslam.svg';
import Header from '../Header/Header';


function HomeSection() {
    return (
        <div className='HomeSection'>
            <Header />
            <Media />
            <div className='eslamPic'><img src={eslam} alt='Eslam Aly'></img></div>
            <div className='MyWord'>
                <p className='fWord'>I am always say</p>
                <p className='sWord'>Product Management</p>
                <p className='tWord'>Is like playing puzzle. And you have to take a wide look in order to find the correct piece that add value to the big picture.</p>
            </div>
        </div>
    );
};

export default HomeSection;