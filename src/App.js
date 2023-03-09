import './App.css';
import Add from './components/Add';
import Edit from './components/Edit';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>

      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/edit' element={<Edit></Edit>}></Route>
          <Route path='/add'element={<Add></Add>}></Route>
        </Routes>
      </Router>

      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
}

export default App;
