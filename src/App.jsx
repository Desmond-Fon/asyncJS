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
import { AuthProvider } from './context/AuthContext'
import Login from './pages/login'
import ProtectedRoutes from './component/ProtectedRoute'
import ProductLayout from './component/ProductLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <DataProvider>
            <ThemeProvider>
              <Nav />
              <ToastContainer />
              <Routes>
                <Route path="/" element={<Home />} />


                <Route path="/product" element={<ProductLayout />}>

                  <Route index element={<Product />} />
                  <Route path="hooks" element={<Hooks />} />
                  <Route path="login" element={<Login />} />
                </Route>



                <Route path="/product" element={<ProtectedRoutes><Product /></ProtectedRoutes>} />


                <Route path="/details/:id" element={<Details />} />
                <Route path="/hooks" element={<Hooks />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </ThemeProvider>
          </DataProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
