import styles from './FirstContent.module.css';
import img1 from '../../assets/imgSalas/auditorio1.jpg';
import img2 from '../../assets/imgSalas/salaPangeia2.jpg';
import img3 from '../../assets/imgSalas/salaMontanha.jpg';
import {FaLongArrowAltRight} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; //módulo para navegação do react-dom

export const FirstContent = () => {
  const navigate = useNavigate();
  const spacesPage = () => {
      navigate('./SpacesPage.tsx'); // Rota interna
    };
  return (
    <section className={styles.firstContent}>
      <div className={styles.firstContentTextContainer}>
        <span className={styles.firstContentTag}>Nosso Projeto</span>
        <h1 className={styles.firstContentTitle}>
          Conheça o maior escritório da Liferay no mundo, no coração do Recife Antigo
        </h1>
        <p className={styles.firstContentDescription}>
          Mais que um espaço de trabalho, é um ambiente inspirador com salas modernas e confortáveis, 
          ideal para eventos e conexões comunitárias       
        </p>
        <button onClick={spacesPage}>
          Conheça nossos espaços <span><FaLongArrowAltRight /></span>
        </button>
      </div>
      <div className={styles.firstContentImagesGrid}>
        <div className={styles.firstContentImageWrapper1}>
          <img src={img1} alt="Espaço 1" className={styles.firstContentImage} />
        </div>
        <div className={styles.firstContentImageWrapper2}>
          <img src={img2} alt="Espaço 2" className={styles.firstContentImage} />
        </div>
        <div className={styles.firstContentImageWrapper3}>
          <img src={img3} alt="Espaço 3" className={styles.firstContentImage} />
        </div>
      </div>
    </section>
  );
};
