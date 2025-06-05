import styles from './FirstContent.module.css';
import img1 from '../../assets/imgSalas/auditorio1.jpg';
import img2 from '../../assets/imgSalas/salaPangeia2.jpg';
import img3 from '../../assets/imgSalas/salaMontanha.jpg';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const carouselImages = [
  { src: img1, alt: "Visão do Auditório Liferay Spaces Recife" },
  { src: img2, alt: "Sala de Reunião Pangeia no Liferay Spaces" },
  { src: img3, alt: "Sala de Reunião Montanha no Liferay Spaces" },
];

export const FirstContent = () => {
  const navigate = useNavigate();
  const spacesPage = () => {
    navigate('/SpacesPage');
  };

  return (
    <section className={styles.firstContent}>
      <div className={styles.firstContentTextContainer}>
        <span className={styles.firstContentTag}>Nosso Projeto</span>
        <h1 className={styles.firstContentTitle}>
          Conheça o maior escritório da Liferay no mundo, no coração do Recife Antigo
        </h1>
        <p className={styles.firstContentDescription}>
          Mais que um espaço de trabalho, é um ambiente inspirador com salas modernas e confortáveis, 
          ideal para eventos e conexões comunitárias
        </p>
        <button onClick={spacesPage} className={styles.ctaButton}>
          Conheça nossos espaços <span className={styles.arrowIcon}><FaLongArrowAltRight /></span>
        </button>
      </div>

      <div className={styles.firstContentCarouselContainer}>
        <Carousel
          showArrows={true}      
          showThumbs={false}     
          showStatus={false}     
          infiniteLoop={true}    
          autoPlay={true}        
          interval={5000}        
          swipeable={true}       
          emulateTouch={true}    
          className={styles.mainCarouselWrapper} 
        >
          {carouselImages.map((image, index) => (
            <div key={index} className={styles.carouselSlideItem}>
              <img src={image.src} alt={image.alt} className={styles.carouselImageStyle} />
        </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};