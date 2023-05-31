import './App.css';
import Admin from './components/Admin';
import Add from './components/Add';
import Edit from './components/Edit';
import Viewemployee from './components/Viewemployee';
import { Route,Routes } from 'react-router-dom';
import PagenotFound from './components/PagenotFound';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Admin/>} ></Route>
        <Route path='add' element={<Add/>}  ></Route>
        <Route path='edit/:id' element={<Edit/>} ></Route>
        <Route path='view/:id' element={<Viewemployee/>} ></Route>
        <Route path={'*'} element={<PagenotFound/>} ></Route>

      </Routes>

    </div>
  );
}

export default App;
