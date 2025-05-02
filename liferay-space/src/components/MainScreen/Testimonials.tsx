import styles from './Testimonials.module.css';
import { FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "Python Recife",
    subtitle: "Encontro de programação",
    rating: 5,
    text: "Realizamos nosso encontro mensal no auditório e foi perfeito. O projetor e a acústica são excelentes!"
  },
  {
    name: "Startup PE",
    subtitle: "Workshop de inovação",
    rating: 4,
    text: "Espaço moderno e bem equipado. Tivemos pequenos problemas com o Wi-Fi no início, mas foram rapidamente resolvidos."
  },
  {
    name: "UX Girls",
    subtitle: "Evento de design inclusivo",
    rating: 3,
    text: "A localização é ótima e o ambiente é acolhedor, mas sentimos falta de um espaço de apoio para networking entre as palestras."
  },
  {
    name: "React Brasil",
    subtitle: "Meetup de desenvolvedores",
    rating: 5,
    text: "Ambiente inspirador e super organizado. A equipe foi atenciosa e o suporte técnico excelente. Pretendemos voltar em breve!"
  },
  {
    name: "Data Girls",
    subtitle: "Workshop de dados e IA",
    rating: 5,
    text: "As salas são bem climatizadas, com equipamentos de ponta. Nossas participantes se sentiram acolhidas e empoderadas."
  }
];

export const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.title}>Depoimentos</h2>
      <p className={styles.subtitle}>
        Veja o que as comunidades e organizações estão falando sobre nossos espaços
      </p>
      <div className={styles.cardsContainer}>
        {testimonials.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.header}>
              <div>
                <h3>{item.name}</h3>
                <p className={styles.small}>{item.subtitle}</p>
              </div>
              <FaQuoteRight className={styles.icon} />
            </div>
            <div className={styles.stars}>
              {'★'.repeat(item.rating)}
              {'☆'.repeat(5 - item.rating)}
            </div>
            <p className={styles.comment}>"{item.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
