import { Routes , Route } from 'react-router-dom'
import Router from './constants/routes/index'
import ErrorPage from './pages/error/index'
import Admin from './pages/admin/index'
import Login from './pages/login/index'
import Home from './pages/home/index'
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
              path={Router.home} 
              element={<Home />} 
          />
      </Routes>
    </>
  )
}

export default App