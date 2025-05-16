import styles from './Room.module.css'
import {FaUser, FaLongArrowAltRight} from 'react-icons/fa'

import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/react'

interface RoomProps {
  img: string[];
  name: string;
  description: string;
  capacity: number;
}


export const Room = ({img, name, description, capacity}: RoomProps) => {
      return(
        <div className={styles.room}>
        <Swiper 
          slidesPerView={1}
          pagination={{clickable: true}}
          navigation
          >
          {img.map((imgUrl) => (
            <SwiperSlide className={styles.swiperSlide}>
              <img src={imgUrl}  alt='Foto da sala'/>
            </SwiperSlide>
          ))}
        </Swiper>
          <div className={styles.roomDivSuport}>
          <h1>{name}</h1>
          </div>
          <p className={styles.roomDescription}>{description}</p>
          <div className={styles.roomDivSuport}>
          <p><span><FaUser /></span> Capacidade: {capacity} Pessoas</p>
          </div>
          <div className={styles.roomDivSuport}>
          <h4>Recursos</h4>
          </div>
          {/*Lembrete:  colocar recursos!!!!! */}
          <div className={styles.roomDivButtons}>
            <button className={styles.roomReserve}>Reservar <span><FaLongArrowAltRight/></span> </button>
          </div>
        </div>
      );
    
}