import styles from './WhySection.module.css';
import { FaBuilding, FaCogs, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: <FaBuilding />,
    title: 'Localização Estratégica',
    description: 'Nosso escritório está localizado no coração do Recife, com fácil acesso por transporte público, próximo ao ecossistema tecnológico.'
  },
  {
    icon: <FaCogs />,
    title: 'Infraestrutura Moderna',
    description: 'Ambientes equipados com tecnologia de ponta, mobiliário confortável e versátil, atendendo a diversos formatos de eventos.'
  },
  {
    icon: <FaUsers />,
    title: 'Suporte à Comunidade',
    description: 'Dedicamos nossos espaços a comunidades tecnológicas, universidades e projetos sociais, fomentando a inovação e o conhecimento em Recife.'
  }
];

export const WhySection = () => {
  return (
    <section className={styles.whySection}>
      <h2 className={styles.title}>Porque escolher a Liferay Spaces?</h2>
      <div className={styles.cardContainer}>
        {features.map((feature, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
