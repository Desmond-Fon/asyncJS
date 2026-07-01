import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Product from './pages/product'
import Nav from './component/Nav'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from './pages/wine-detail'
import Hooks from './pages/hooks'
import DataProvider from './context/DataContext'
import ThemeProvider from './context/ThemeContext'

function App() {

  return (
    <>
      <BrowserRouter>
        <DataProvider>
          <ThemeProvider>
            <Nav />
            <ToastContainer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/hooks" element={<Hooks />} />
            </Routes>
          </ThemeProvider>
        </DataProvider>
      </BrowserRouter>
    </>
  )
}

export default App
