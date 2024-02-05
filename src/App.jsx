import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice.js'

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService
          .getCurrentUser()
          .then((userData) => {
            if (userData) dispatch(login({userData}));
            else dispatch(logout());
          })
          .finally(() => setLoading(false))
  }, [dispatch])


  // '!loading' = se não estiver mais carregando
  return !loading ? (
    
      <div className='min-h-screen flex flex-wrap content-between bg-white'>
        <div className="w-full block">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
        <div className="w-full block">
          <Footer />
        </div>
      </div>
  ) : <h1 className='text-center'>carregando...</h1>;
}

export default App
