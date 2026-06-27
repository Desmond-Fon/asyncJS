import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Product from './pages/product'
import Nav from './component/Nav'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from './pages/wine-detail'

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav />
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
