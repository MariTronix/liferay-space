import styles from "./InfoSection.module.css";
import img1 from "../../assets/imgSalas/salaJogos1.jpg";
import img2 from "../../assets/imgSalas/varanda3.jpg";
import {FaLongArrowAltRight} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const InfoSection = () => {
  const navigate = useNavigate();
  const spacesPage = () => {
      navigate('./SpacesPage.tsx'); // Rota interna
    };
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.textContent}>
          <h2>O QUE FAZEMOS <span>?</span></h2>
          <h3>
            Disponibilizamos os espaços mais modernos e versáteis 
            da Liferay no mundo.
          </h3>
          <p>
            Oferecemos salas ideais para líderes, empreendedores e organizações realizarem eventos com estrutura profissional, 
            tecnologia de ponta e ambiente inspirador em um cenário histórico.
          </p>
          <button className={styles.button} onClick={spacesPage}>
            Saiba mais sobre nossos espaços<span><FaLongArrowAltRight /></span>
          </button>
        </div>
        <img
          className={styles.image}
          src={img1}
          alt="Espaço Liferay"
        />
      </section>

      <section className={styles.section}>
        <img
          className={styles.image}
          src={img2}
          alt="Palestra no espaço"
        />
        <div className={styles.textContent}>
          <h2>POR QUE FAZEMOS ISSO<span>?</span></h2>
          <h3>
            Acreditamos que boas ideias crescem melhor quando compartilhadas.
          </h3>
          <p>
            Criamos este espaço para apoiar quem movimenta ecossistemas locais,
            fortalece comunidades e impulsiona inovação. Ao abrir nossas portas,
            queremos conectar pessoas e histórias que transformam o mundo ao seu redor.
            Faça parte dessa rede!
          </p>
          <button className={styles.button}>Consulte nosso calendário <span><FaLongArrowAltRight /></span></button>
        </div>
      </section>
    </div>
  );
};