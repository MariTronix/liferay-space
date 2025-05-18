import styles from './Header.module.css';
import liferayLogo from '../assets/imgLogos/liferay-logo.png';
import { useNavigate } from 'react-router-dom'; //módulo para navegação do react-dom
import Index from '../pages/Index'


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
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#6b6c7e' viewBox="0 0 256 256"><path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z"></path></svg>
                    </span>
                    <p>PT-BR</p>
                </div>
                <div>
                    <button onClick={spacesPage}>Espaços</button> 
                    <button>Reservar</button>
                    <button onClick={Index}>
                        Admin
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2eb7ff" viewBox="0 0 256 256"><path d="M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Z"></path></svg>
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
