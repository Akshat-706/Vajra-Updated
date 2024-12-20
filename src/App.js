import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import LoginPage from './LoginPage';

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Organization from "./Organization";
import Patient from "./Patient";
import Doctor from "./Doctor";

import Recommend from "./Recommend";

import Apollo from "./Apollo";
import Video1 from "./Video1";
import Video2 from "./Video2";
import Video3 from "./Video3";
import Video4 from "./Video4";
import Video5 from "./Video5";
import Video6 from "./Video6";
import Video7 from "./Video7";
import Video8 from "./Video8";

function AppLayout({ children }) {
    const location = useLocation();
    const excludePaths = ["/"]; // Paths where Header, Nav, and Footer should not appear

    const isExcluded = excludePaths.includes(location.pathname);

    return (
        <>
            {!isExcluded && <Header />}
            {!isExcluded && <Nav />}
            {children}
            {!isExcluded && <Footer />}
        </>
    );
}

function App() {
    return (
        <div className="App">
            <Router>
                <AppLayout>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/patient" element={<Patient />} />
                        <Route path="/organization" element={<Organization />} />
                        <Route path="/doctor" element={<Doctor />} />
                        <Route path="/consult" element={<Recommend />} />
                        <Route path="/video1" element={<Video1 />} />
                        <Route path="/video2" element={<Video2 />} />
                        <Route path="/video3" element={<Video3 />} />
                        <Route path="/video4" element={<Video4 />} />
                        <Route path="/video5" element={<Video5 />} />
                        <Route path="/video6" element={<Video6 />} />
                        <Route path="/video7" element={<Video7 />} />
                        <Route path="/video8" element={<Video8 />} />
                        <Route path="/First Aid" element={<Apollo />} />
                    </Routes>
                </AppLayout>
            </Router>
        </div>
    );
}

export default App;
