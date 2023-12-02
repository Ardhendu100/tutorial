
import { useNavigate } from 'react-router-dom';
function Logout(props) {
    const navigate=useNavigate()
    props.setToken(null);
    localStorage.removeItem('token')
    navigate('/login')
  
}

export default Logout