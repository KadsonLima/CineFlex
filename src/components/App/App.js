import './App.css';
import Header from '../Header/index';
import Home from '../Home/home';
import Movie from '../Movie/movie';
import Seat from '../Movie/seat';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/filme/:filme' element={<Movie/>} />
        <Route path='/sessao/:sessao' element={<Seat/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
