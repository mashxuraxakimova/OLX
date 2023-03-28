import './App.css';
import Home from '././router/home/Home'
import Navbar from '././components/navbar/Navbar'
import Login from './router/login/Login'
import About from './router/about/About'
import {Routes, Route} from 'react-router-dom'
import UniquePage from './router/unique-page/UniquePage'
import Product from './router/unique/Unique';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/products/:id' element={<Product/>} />
        <Route path='/product/:id' element={<UniquePage/>} />
      </Routes>
    </div>
  );
}

export default App;
