import './App.css';
import HomeSection from './Components/HomeSection/HomeSection';
import WhatIDo from './Components/WhatIDo/WhatiDo';
import UseCases from './Components/UseCases/UseCases';
import Certificates from './Components/Certificates/Certificates';
import Articles from './Components/Articles/Articles';
import Contact from './Components/Contacts/Contact';
import Footer from './Components/Footer/Footer';
import 'materialize-css/dist/css/materialize.min.css';
import SideNavBar from './Components/SideNavBar/SIdeNavBar';


function App() {
    return (
        <div className='App' >
            <div className='hide-on-med-and-up'>
                <SideNavBar />
            </div>
            <HomeSection />
            <WhatIDo />
            <UseCases />
            <Certificates />
            <Articles />
            <Contact />
            <Footer />
        </div >
    );
}

export default App;