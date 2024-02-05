import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth.js'
import { logout } from '../../store/authSlice.js'


function LogoutBtn() {

    // o "despachante" é quem chama os serviços da STORE REDUX
    const dispatch = useDispatch()

    // Quem vai lidar com a operação?
    const logoutHandler = () => {
        // Pegamos o serviço criando no outro arquivo e, com PROMESSA,
        // criamos a flecha para a VERDADEIRA AÇÃO: o despachante chama 
        // o EVENTO DESEJADO (logout...)
        authService.logout().then(() => {
            dispatch(logout());
        })
    }

  return (
    <button
        className='inline-block px-6 py-2 duration-200
        hover:bg-blue-100 rounded-null'
        onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn