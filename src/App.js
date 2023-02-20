import './App.css';
import Add from './components/Add';
import Edit from './components/Edit';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/edit' element={<Edit></Edit>}></Route>
          <Route path='/add'element={<Add></Add>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
