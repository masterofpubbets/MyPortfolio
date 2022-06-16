import { React } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Components/Header/Header';
import SideNavBar from './Components/SideNavBar/SideNavBar';
import MesSended from './Components/Misc/MesSended';
import Skills from './Pages/Skills/Skills';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import UCUXMenu from './Pages/UseCases/UCUXMenu';
import UseCaseProject from './Pages/UseCases/UseCaseProject';
import ProManagementMenu from './Pages/UseCases/ProMangementMenu';
import ArticlePO from './Pages/Articles/ArticlePO';
import EAMenu from './Pages/UseCases/EAMenu';
import EicaProMan from './Pages/ProjectManagement/EicaProMan';

function App() {
    const css = "hide-on-med-and-up";
    return (
        <BrowserRouter>
            <div className='App' >
                <div className={css}>
                    <SideNavBar />
                </div>
                <Header />
                <Routes>
                    <Route path="/usecases/promanproject/eica" element={<EicaProMan />} />
                    <Route path="/ea" element={<EAMenu />} />
                    <Route path="/articlepo" element={<ArticlePO />} />
                    <Route path="/proman" element={<ProManagementMenu />} />
                    <Route path="/usecases/usecaseproject/:name" element={<UseCaseProject />} />
                    <Route path="/usecases" exact element={<UCUXMenu />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/sended" element={<MesSended />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/" exact element={<Home />} />
                </Routes>
                <Footer />
            </div >

        </BrowserRouter>
    );
}

export default App;