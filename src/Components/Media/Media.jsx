import './Media.css';
import '../../Css/animation.css';
import LinkedIn from '../Misc/LinkedIn';

function Media() {
    return (
        <div className='Media'>
            <div className='mainAniImage'></div>
            <div className='mainAniImage2'></div>
            <div className='p_Texts'>
                <p className='p_hi'>Hi</p>
                <p className='p_iam'>I am Eslam Aly</p>
                <p className='p_proowner'>Product Owner</p>
                <LinkedIn />
            </div>
        </div>
    );
};

export default Media;