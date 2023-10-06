import './App.css';
import Cards from './components/cards';
import Cart from './components/Cart';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
function App() {

  return (
    <Router>
      <div className="App">
        <Link to="/cart">To Cart</Link>
        <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart" element={<Cart/>} />
        </Routes>
    </div>
    </Router>
    
  );
}
export default App;
