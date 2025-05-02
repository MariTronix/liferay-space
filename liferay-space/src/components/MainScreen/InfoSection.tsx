import styles from "./InfoSection.module.css";
import img1 from "../../assets/imgSalas/salaJogos1.jpg";
import img2 from "../../assets/imgSalas/varanda3.jpg";

export const InfoSection = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.textContent}>
          <h2>O QUE FAZEMOS</h2>
          <h3>
            Disponibilizamos espaços modernos e versáteis no maior escritório
            da Liferay no mundo, localizado no Recife Antigo.
          </h3>
          <p>
            Nossas salas são ideais para líderes de comunidades,
            empreendedores, coletivos e organizações que desejam realizar
            eventos, encontros, workshops ou reuniões com estrutura profissional
            e ambiente inspirador.
          </p>
          <p>
            Com tecnologia de ponta, conforto e um cenário histórico ao redor,
            oferecemos a combinação perfeita entre funcionalidade e acolhimento.
          </p>
          <a className={styles.button} href="#">Saiba mais sobre os espaços disponíveis</a>
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
          <h2>POR QUE FAZEMOS ISSO</h2>
          <h3>
            Acreditamos que boas ideias crescem melhor quando compartilhadas.
          </h3>
          <p>
            Criamos este espaço para apoiar quem movimenta ecossistemas locais,
            fortalece comunidades e impulsiona inovação. Ao abrir nossas portas,
            queremos conectar pessoas e histórias que transformam o mundo ao seu redor.
            Faça parte dessa rede!
          </p>
          <a className={styles.button} href="#">Consulte nosso calendário</a>
        </div>
      </section>
    </div>
  );
};