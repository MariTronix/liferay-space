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
      capacity: 180,
      resources: ["Cabo HDMI", "Eqp. de som", "Telão LED", "Microfones"],
    },
    {
      id:2,
      img: [arcoIris],
      name: "Arco-íris",
      description: "Sala de reunião para grupos pequenos, ideal para reuniões remotas ou sessões rápidas com sua equipe.",
      capacity: 6,
      resources: ["TV", "cabo HDMI", "Eqp. de Transmissão"],
    },
    {
      id:3,
      img: [elementos1, elementos2, elementos3],
      name: "Elementos",
      description: "Sala de reunião ampla, com mesas e cadeiras que podem ser dispostas em formato auditório, escolar ou espinha de peixe. Iluminação natural com vista para o Capibaribe.",
      capacity: 25,
      resources: ["TV", "cabo HDMI", "Eqp. de Transmissão"],
    },
    {
      id:4,
      img: [jogos1, jogos2],
      name: "Jogos",
      description: "Espaço multiuso com cadeiras que podem ser dispostas em formato auditório ou escolar. Perfeito para palestras de médio porte ou mesas redondas.",
      capacity: 45,
      resources: ["TV", "cabo HDMI", "Eqp. de Transmissão"],
    },
    {
      id:5,
      img: [joker],
      name: "Joker",
      description: "Sala de reunião para grupos pequenos, ideal para reuniões remotas ou sessões rápidas com sua equipe.",
      capacity: 5,
      resources: ["TV", "cabo HDMI", "Eqp. de Transmissão"],
    },
    {
      id:6,
      img: [montanha],
      name: "Montanha",
      description: "Sala de reunião para grupos pequenos, ideal para reuniões remotas ou sessões rápidas com sua equipe.",
      capacity: 5,
      resources: ["TV", "cabo HDMI", "Eqp. de Transmissão"],
    },
    {
      id:7,
      img: [pangeia1, pangeia2],
      name: "Pangeia",
      description: "Sala de reunião para grupos, mesa em formato circular.",
      capacity: 10,
      resources: ["TV", "cabo HDMI", "Eqp. de Transmissão"],
    },
    {
      id:8,
      img: [varanda2, varanda4, varanda3, varanda1],
      name: "Varanda",
      description: "Espaço ideal para eventos como coquetéis e confraternizações, com vista privilegiada do Recife Antigo, ao lado do Rio Capibaribe.",
      capacity: 400,
      resources: ["Mesas de piquenique", "Sistema de som Integrado"],
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
                  resources={rooms.resources}
                />

              );
            }
            )}
            
        </div>
    );
}