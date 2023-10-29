
import { useNavigate } from 'react-router-dom';
function Logout() {
    const navigate=useNavigate()
    localStorage.removeItem('token')
    navigate('/sign-in')
  
}

export default Logout