import styles from './ContentBodySpaces.module.css';
import { Room } from './Room';
import auditorio01 from '../../assets/imgSalas/auditorio1.jpg'
import auditorio02 from '../../assets/imgSalas/auditorio2.jpg'
import arcoIris from '../../assets/imgSalas/salaArcoIris.jpg'
import elementos1 from '../../assets/imgSalas/salaElementos1.jpg'
import elementos2 from '../../assets/imgSalas/salaElementos2.jpg'
import elementos3 from '../../assets/imgSalas/salaElementos3.jpg'
import jogos1 from '../../assets/imgSalas/salaJogos1.jpg'
import jogos2 from '../../assets/imgSalas/salaJogos2.jpg'
import joker from '../../assets/imgSalas/salaJoker.jpg'
import montanha from '../../assets/imgSalas/salaMontanha.jpg'
import pangeia1 from '../../assets/imgSalas/salaPangeia1.jpg'
import pangeia2 from '../../assets/imgSalas/salaPangeia2.jpg'
import varanda1 from '../../assets/imgSalas/varanda1.jpg'
import varanda2 from '../../assets/imgSalas/varanda2.jpg'
import varanda3 from '../../assets/imgSalas/varanda3.jpg'
import varanda4 from '../../assets/imgSalas/varanda4.jpg'


export const ContentBodySpaces = () =>{
  const Rooms = [
    {
      id:1,
      img: [auditorio01, auditorio02],
      name: "Auditório",
      description: "Nosso maior espaço para eventos, perfeito para palestras, conferências e treinamentos. Ambiente amplo com iluminação natural.",
      capacity: 200,
      resources: ["TV", "Wi-fi", "Ar-condicionado", "Som"],
    },
    {
      id:2,
      img: [arcoIris],
      name: "Arco-íris",
      description: "Espaço moderno e criativo, com luz natural, multimídia e um arco-íris na parede guiando boas ideias.",
      capacity: 40,
      resources: ["TV", "Wi-fi", "Ar-condicionado", "Som"],
    },
    {
      id:3,
      img: [elementos1, elementos2, elementos3],
      name: "Elementos",
      description: "Sala tech com parede de elementos e código — só faltou o elemento “Café” pra aguentar a reunião!",
      capacity: 35,
      resources: ["TV", "Wi-fi", "Ar-condicionado", "Som"],
    },
    {
      id:4,
      img: [jogos1, jogos2],
      name: "Jogos",
      description: "Área gamer com cara de TED Talk: dá pra jogar, relaxar e discutir um assunto importante, como por que o Sonic nunca para de correr.",
      capacity: 90,
      resources: ["TV", "Wi-fi", "Ar-condicionado", "Som"],
    },
    {
      id:5,
      img: [joker],
      name: "Joker",
      description: "Sala moderna com TV para suas grandes ideias e uma parede com um bebê de peruca arco-íris que já chegou mais criativo que todo mundo.",
      capacity: 50,
      resources: ["TV", "Wi-fi", "Ar-condicionado", "Som"],
    },
    {
      id:6,
      img: [montanha],
      name: "Montanha",
      description: "Reunião com vista para a cidade e alma nas montanhas. Um espaço iluminado, inspirador e com clima de brainstorming zen — sem precisar sair do centro.",
      capacity: 30,
      resources: ["TV", "Wi-fi", "Ar-condicionado", "Som"],
    },
    {
      id:7,
      img: [pangeia1, pangeia2],
      name: "Pangeia",
      description: "Nesta sala, onde a Pangeia marca presença, até os continentes já entenderam o valor de uma boa reunião. O lugar ideal para unir ideias que movem o mundo.",
      capacity: 180,
      resources: ["TV", "Wi-fi", "Ar-condicionado", "Som"],
    },
    {
      id:8,
      img: [varanda2, varanda4, varanda3, varanda1],
      name: "Varanda",
      description: "Varanda espaçosa com vista para o Rio Capibaribe, perfeita para pausas e momentos de descontração, reservada às sextas para confraternização dos funcionários.",
      capacity: 80,
      resources: ["TV", "Wi-fi", "Ar-condicionado", "Som"],
    }
  ];
    return(
        <div className={styles.contentBodySpaces}>
            {Rooms.map(rooms =>
            {
              return(
                <Room 
                  img={rooms.img}
                  name={rooms.name}
                  description={rooms.description}
                  capacity={rooms.capacity}
                />

              );
            }
            )}
            
        </div>
    );
}