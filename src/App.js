import { NavBar } from './components/NavBar';
import { HeaderDisplay } from './components/HeaderDisplay';
import { AllProduct } from './components/AllProduct';
import { NewArrival } from './components/NewArrival';
import { MenProducts } from './components/MenProducts';
import './App.css';

function App() {
  return (
    <div className="body">
    <div className="bodyContent">
      <NavBar />
      <HeaderDisplay />
    </div>
      <AllProduct/>
      <div className="cartItems">

      <div className="newArrival">
        <h3 style={{marginTop: "1.25rem", display: "inline-block", borderBottom: "5px solid red"}}>NEW ARRIVAL</h3>
        <NewArrival />
      </div>

      <div className="newArrival">
        <h3 style={{marginTop: "0", display: "inline-block", borderBottom: "5px solid red"}}>MEN</h3>
        <MenProducts />
      </div>
      </div>
    </div>
  );
}

export default App;
