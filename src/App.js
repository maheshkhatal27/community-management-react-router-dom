import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Services from "./components/Services"
import LoginRegister from "./components/LoginRegister";
import NotFound from './components/NotFound';
import './App.css';

const App=()=>{
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/loginregister" element={<LoginRegister />} />
      <Route path="/services" element={<Services />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>)
}

export default App;
