
import Home from './pages/Home';
import './App.css';
import { Route, Routes } from 'react-router';
import Manuall from './pages/Manuall';
import Breakie from './pages/Breakie';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manuall' element={<Manuall />} />
        {/* <Route  path="/input"   element={<InputBreakie/>}/> */}
        <Route path='/breakie' element={<Breakie />} />
      </Routes>
    </div>
  );
}

export default App;
