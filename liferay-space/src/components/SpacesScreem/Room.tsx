import styles from './Room.module.css'
import {FaUser, FaLongArrowAltRight} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/react'

interface RoomProps {
  img: string[];
  name: string;
  description: string;
  capacity: number;
  resources: string[];
}


export const Room = ({img, name, description, capacity, resources}: RoomProps) => {
      const navigate = useNavigate();
      const formPage = () => {
        navigate('/forms'); // Rota interna
      };
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
          
          {/*Lembrete:  colocar recursos!!!!! */}
          <div className={styles.roomDivFooter}>
            <div className={styles.roomDivSuport}>
              <p><span><FaUser /></span> Capacidade: {capacity} Pessoas</p>
            </div>
            <div className={styles.roomResources}>
                {resources.map((nome) => (
                <p>{nome}</p> 
             ))}
            </div>
            <button className={styles.roomReserve} onClick={formPage}>Reservar <span><FaLongArrowAltRight/></span></button>
          </div>
        </div>
      );
    
}