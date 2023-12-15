import { Routes , Route } from 'react-router-dom'
import Router from './constants/routes/index'
import ErrorPage from './pages/error/index'
import Admin from './pages/admin/index'
import Login from './pages/login/index'
import Catalog from './pages/catalog/index'
import Product from './pages/product/index'
import './assets/css/reset.css'
const App = () => {
  return (
    <>
      <Routes>
          <Route 
              path={Router.error} 
              element={<ErrorPage />} 
          />
          <Route 
              path={Router.admin} 
              element={<Admin />} 
          />
          <Route 
              path={Router.login} 
              element={<Login />} 
          />
          <Route 
              path={Router.catalog} 
              element={<Catalog />} 
          />
           <Route 
              path={Router.product} 
              element={<Product />} 
          />
      </Routes>
    </>
  )
}

export default App