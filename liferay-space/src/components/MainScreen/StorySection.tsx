import styles from './StorySection.module.css';
import picnicImage from '../../assets/imgSalas/auditorio2.jpg';

export const StorySection = () => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storySectionContent}>
        <div className={styles.storySectionTextBlock}>
          <h1 className={styles.storySectionTitle}>
            De mesas <span className={styles.storySectionSimples}>simples</span> a <span className={styles.storySectionIdeias}>GRANDES IDEIAS </span>
          </h1>
          <p className={styles.storySectionParagraph}>
            A Liferay começou com jovens empreendedores criando tecnologia com propósito. 
            Hoje, com presença global, mantém sua essência ao usar mesas semelhantes às do início na sede de Recife, 
            simbolizando suas raízes e compromisso com impacto positivo.
          </p>
        </div>
        <div className={styles.storySectionImageWrapper}>
          <img src={picnicImage} alt="Mesas compartilhadas" className={styles.storySectionImage} />
        </div>
      </div>
    </section>
  );
};
