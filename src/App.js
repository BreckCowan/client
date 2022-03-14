import Profile from './MainContainer/Home/Profile/Profile';
import Projects from './MainContainer/Projects/Projects';
import AboutMe from './MainContainer/AboutMe/AboutMe'
import ContactMe from './MainContainer/ContactMe/ContactMe';
import Footer from './MainContainer/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Profile />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
