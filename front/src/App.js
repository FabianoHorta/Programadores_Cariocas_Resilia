import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AdminFuncionalidades from './components/admin/AdminFuncionalidades';
import AdminSobre from '../src/components/admin/AdminSobre';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path='/admin/funcionalidades' element={ <AdminFuncionalidades/> }/>
          <Route path='/admin/sobre' element={ <AdminSobre/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
