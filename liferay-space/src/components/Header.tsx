import styles from './Header.module.css';
import liferayLogo from '../assets/imgLogos/liferay-logo.png';
import { useNavigate } from 'react-router-dom'; //módulo para navegação do react-dom
import Index from '../pages/Index'
import {FaGlobe} from 'react-icons/fa';
import {FaLock} from 'react-icons/fa';


export function Header(){
    const navigate = useNavigate();
    const spacesPage = () => {
        navigate('./SpacesPage.tsx'); // Rota interna
      };
    const Home = () => {
        navigate('/'); // Rota interna
    };
    return(
        <header className={styles.header}>
            <div className={styles.upperHeader}>
                <div>
                    <p>Liferay Sites</p>
                    
                    <p><span><FaGlobe /></span>PT-BR</p>
                </div>
                <div>
                    <button onClick={spacesPage}>Espaços</button> 
                    <button>Reservar</button>
                    <button onClick={Index}>
                        Admin
                        <FaLock />
                    </button>
                
                </div>
            </div>
            <hr />
            <div className={styles.lowerHeader}>
                <button onClick={Home}><img src={liferayLogo} alt="Logotipo da liferay" /></button>
            </div>
        </header>
    );
}
