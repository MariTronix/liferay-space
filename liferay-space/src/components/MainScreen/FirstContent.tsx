import styles from './FirstContent.module.css';
import img1 from '../../assets/imgSalas/auditorio1.jpg';
import img2 from '../../assets/imgSalas/salaPangeia2.jpg';
import img3 from '../../assets/imgSalas/salaMontanha.jpg';

export const FirstContent = () => {
  return (
    <section className={styles.firstContent}>
      <div className={styles.firstContentTextContainer}>
        <span className={styles.firstContentTag}>Nosso Projeto</span>
        <h1 className={styles.firstContentTitle}>
          Conheça o maior escritório da Liferay no mundo, no coração do Recife Antigo.
        </h1>
        <p className={styles.firstContentDescription}>
          Mais do que um espaço de trabalho, é um ambiente pensado para inspirar conexões. Com salas modernas, confortáveis e bem equipadas, é o lugar ideal para eventos, encontros e iniciativas que fortalecem a comunidade.
        </p>
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
