import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import Borrow from './components/Borrow';
import Eligibility from './components/Eligibility';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/borrowingrules' element={<Borrow />}/>
            <Route path='/finalseligibility' element={<Eligibility />} />
            <Route path='/QualifiedPlayers' />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
