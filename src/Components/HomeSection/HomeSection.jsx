import { React } from 'react';
import './HomeSection.css';
import Media from '../Media/Media';
import eslam from '../../Assets/eslam.svg';

function HomeSection() {
    return (
        <div className='HomeSection' id='id-home'>
            

            <div className='row home-elements'>

                <div className='col s12 m6 l4 media'>
                    <Media />
                </div>
                <div className='col s12 m6 l4 eslamPic'><img src={eslam} alt='Eslam Aly'></img></div>
                <div className='col s12 m12 l4 MyWord'>
                    <p className='fWord'>I am always say</p>
                    <p className='sWord tracking-in-expand'>Product Management</p>
                    <p className='tWord'>Is like playing puzzle. And you have to take a wide look in order to find the correct piece that add value to the big picture.</p>
                </div>


            </div>
        </div>
    );
};

export default HomeSection;