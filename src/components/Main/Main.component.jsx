import AboutMe from '../AboutMe/AboutMe.component';
import Navbar from '../Navbar/Navbar.component';
import Projects from '../Projects/Projects.component';
import Contact from '../Contact/Contact.component';

const Main = () => {
    return (
        <main id='main'>
            <Navbar />
            <AboutMe />
            <Projects />
            <Contact />
        </main>
    );
};

export default Main;
