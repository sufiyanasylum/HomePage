import './App.css';
import Nav from './Components/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';
import Partner from './Components/Partner';
import Services from './Components/Services';
function App() {
  return (
    <div className="App">
     <Nav />
     <Header />
     <Partner />
     <Services />
    </div>
  );
}

export default App;
