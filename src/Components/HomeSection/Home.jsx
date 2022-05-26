import HomeSection from '../HomeSection/HomeSection';
import WhatIDo from '../WhatIDo/WhatiDo';
import UseCases from '../UseCases/UseCases';
import Certificates from '../Certificates/Certificates';
import Articles from '../Articles/Articles';
import Contact from '../Contacts/Contact';

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