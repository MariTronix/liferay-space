import styles from './Room.module.css'
import {FaAddressBook} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'
import {FaLongArrowAltRight} from 'react-icons/fa';


interface RoomProps {
  img: string;
  name: string;
  description: string;
  capacity: number;
}

export const Room = ({img, name, description, capacity}: RoomProps) => {
      return(
        <div className={styles.room}>
          <img  src={img} alt="Foto da Sala" />
          <div className={styles.roomDivSuport}>
          <h3>{name}</h3>
          </div>
          <p className={styles.roomDescription}>{description}</p>
          <div className={styles.roomDivSuport}>
          <p><span><FaAddressBook /></span> Capacidade: {capacity} Pessoas</p>
          </div>
          <div className={styles.roomDivSuport}>
          <h4>Recursos</h4>
          </div>
          {/*Lembrete:  colocar recursos!!!!! */}
          <div className={styles.roomDivButtons}>
            <button className={styles.roomDetails}>Detalhes <span><FaFolderOpen/></span></button>
            <button className={styles.roomReserve}>Reservar <span><FaLongArrowAltRight/></span> </button>
          </div>
        </div>
      );
    
}