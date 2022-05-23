import './App.css';
import HomeSection from './Components/HomeSection/HomeSection';
import WhatIDo from './Components/WhatIDo/WhatiDo';
import UseCases from './Components/UseCases/UseCases';
import Certificates from './Components/Certificates/Certificates';
import Articles from './Components/Articles/Articles';

function App() {
    return (
        <div className='App' >
            <HomeSection />
            <WhatIDo />
            <UseCases />
            <Certificates />
            <Articles />
        </div >
    );
}

export default App;