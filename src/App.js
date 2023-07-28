import Navbar from './Components/Navbar/Navbar';
import Herosection from './Components/Herosection/Herosection';
import Benefits from './Components/Benefits/Benefits';
import Clients from './Components/Clients-Animation/Clients';
import Kit from './Components/Kit/Kit';
import Features from './Components/Features/Features';
import Who from './Components/Who/Who';
import Pricing from './Components/Pricing/Pricing';
import FAQ from './Components/FAQ/FAQ';
import Tagline from './Components/Tagline/Tagline';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (    
  <>
  <Navbar/>
  <Herosection/>
  <Benefits/>
  <Clients/>
  <Kit/>
  <Features/>
  <Who/>
  <Pricing/>
  <FAQ/>
  </>
  );
}

export default App;
