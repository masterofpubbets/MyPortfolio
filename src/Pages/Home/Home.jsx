import { React } from 'react';
import HomeSection from '../../Components/HomeSection/HomeSection';
import WhatIDo from '../../Components/WhatIDo/WhatiDo';
import UseCases from '../../Components/UseCases/UseCases';
import Certificates from '../../Components/Certificates/Certificates';
import Articles from '../../Components/Articles/Articles';
import Contact from '../../Components/Contacts/Contact';

function Home() {
    return (
        <div>
            <HomeSection />
            <WhatIDo />
            <UseCases />
            <Certificates />
            <Articles />
            <Contact />
        </div>
    )

};

export default Home;