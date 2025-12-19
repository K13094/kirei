import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { DesignProvider } from './context/DesignContext';
import Navbar from './components/Navbar';
import Hero from './components/heroes';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import DesignSwitcher from './components/DesignSwitcher';
import './themes.css';
import './App.css';

function App() {
  return (
    <DesignProvider>
      <ThemeProvider>
        <LanguageProvider>
          <div className="app">
            <Navbar />
            <main>
              <Hero />
              <Services />
              <Gallery />
              <About />
              <Contact />
            </main>
            <Footer />
            <DesignSwitcher />
            <ThemeSwitcher />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </DesignProvider>
  );
}

export default App;
