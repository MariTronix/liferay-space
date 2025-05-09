import styles from './BodySpaces.module.css';
import { Room } from './Room';
import auditorio01 from '../../assets/imgSalas/auditorio1.jpg'
import arcoIris from '../../assets/imgSalas/salaArcoIris.jpg'
import elementos from '../../assets/imgSalas/salaElementos2.jpg'
import jogos from '../../assets/imgSalas/salaJogos1.jpg'
import joker from '../../assets/imgSalas/salaJoker.jpg'
import montanha from '../../assets/imgSalas/salaMontanha.jpg'
import pangeia from '../../assets/imgSalas/salaPangeia1.jpg'
import varanda from '../../assets/imgSalas/varanda3.jpg'


export const BodySpaces = () =>{
  const Rooms = [
    {
      id:1,
      img: auditorio01,
      name: "Auditório",
      description: "Nosso maior espaço para eventos, perfeito para palestras, conferências e treinamentos. Ambiente amplo com iluminação natural.",
      capacity: 200,
      resources: ["TV", "Wi-fi", "Ar-condicionado", "Som"],
    },
    {
      id:2,
      img: arcoIris,
      name: "Arco-íris",
      description: "texto",
      capacity: 40,
      resources: ["TV", "Wi-fi", "Ar-condicionado", "Som"],
    },
    {
      id:3,
      img: elementos,
      name: "Elementos",
      description: "texto",
      capacity: 35,
      resources: ["TV", "Wi-fi", "Ar-condicionado", "Som"],
    },
    {
      id:4,
      img: jogos,
      name: "Jogos",
      description: "texto",
      capacity: 90,
      resources: ["TV", "Wi-fi", "Ar-condicionado", "Som"],
    },
    {
      id:5,
      img: joker,
      name: "Joker",
      description: "texto",
      capacity: 50,
      resources: ["TV", "Wi-fi", "Ar-condicionado", "Som"],
    },
    {
      id:6,
      img: montanha,
      name: "Montanha",
      description: "texto",
      capacity: 30,
      resources: ["TV", "Wi-fi", "Ar-condicionado", "Som"],
    },
    {
      id:7,
      img: pangeia,
      name: "Pangeia",
      description: "texto",
      capacity: 180,
      resources: ["TV", "Wi-fi", "Ar-condicionado", "Som"],
    },
    {
      id:8,
      img: varanda,
      name: "Varanda",
      description: "texto",
      capacity: 80,
      resources: ["TV", "Wi-fi", "Ar-condicionado", "Som"],
    }
  ];
    return(
        <div className={styles.bodySpaces}>
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