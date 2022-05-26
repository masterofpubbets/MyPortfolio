import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/HomeSection/Home';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Components/Header/Header';
import SideNavBar from './Components/SideNavBar/SideNavBar';
import MesSended from './Components/Misc/MesSended';
import Skills from './Components/Skills/Skills';


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
                    <Route path="/sended" element={ <MesSended />} />
                    <Route path="/skills" element={ <Skills />} />
                    <Route path="/" exact element={ <Home /> } />
                </Routes>
                <Footer />
            </div >

        </BrowserRouter>
    );
}

export default App;