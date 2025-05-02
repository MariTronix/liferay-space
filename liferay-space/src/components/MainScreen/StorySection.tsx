import styles from './StorySection.module.css';
import picnicImage from '../../assets/imgSalas/auditorio2.jpg';

export const StorySection = () => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storySectionContent}>
        <div className={styles.storySectionTextBlock}>
          <h1 className={styles.storySectionTitle}>
            De mesas <span className={styles.storySectionSimples}> simples</span> a  <span className={styles.storySectionIdeias}> <h1> GRANDES IDEIAS </h1> </span>
          </h1>
          <p className={styles.storySectionParagraph}>
            A Liferay começou com um grupo de jovens empreendedores determinados a criar tecnologia com propósito.
            Em vez de um escritório tradicional, as primeiras reuniões aconteceram em mesas de piquenique doadas por
            uma igreja — símbolo de um começo simples, colaborativo e cheio de intenção.
          </p>
          <p className={styles.storySectionParagraph}>
            Hoje, com presença global e uma plataforma reconhecida, essa essência continua viva. No auditório da sede
            em Recife, mesas iguais às daquela época foram escolhidas para lembrar diariamente das nossas raízes e do
            compromisso com impacto positivo.
          </p>
        </div>
        <div className={styles.storySectionImageWrapper}>
          <img src={picnicImage} alt="Mesas compartilhadas" className={styles.storySectionImage} />
        </div>
      </div>
    </section>
  );
};
