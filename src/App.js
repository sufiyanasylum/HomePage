import './App.css';
import Nav from './Components/Nav';
import Header from './Components/header';
import Partner from './Components/Partner';
import Services from './Components/Services';
import Billingsystem from './Components/Billingsystem'
import Experince from './Components/Experince';
import Portfolio from './Components/Portfolio';
import Cunsultation from './Components/Cunsultation';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
     <Nav />
     <Header />
     <Partner />
     <Services />
     <Billingsystem/>
     <Experince />
     <Portfolio />
     <Cunsultation />
     <Testimonial />
     <Footer />
    </div>
  );
}

export default App;
