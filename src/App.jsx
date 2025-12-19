import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import './themes.css';
import './App.css';

function App() {
  return (
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
          <ThemeSwitcher />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
