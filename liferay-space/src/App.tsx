import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { FirstContent } from './components/MainScreen/FirstContent.tsx';
import { StorySection } from './components/MainScreen/StorySection.tsx';
import { InfoSection } from './components/MainScreen/InfoSection.tsx';
import { Testimonials } from './components/MainScreen/Testimonials.tsx';
import { WhySection } from './components/MainScreen/WhySection.tsx';

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div className={styles.wrapper}>
    <Header />

    <FirstContent/>
    <StorySection/>
    <InfoSection/>
    <Testimonials/>
    <WhySection/>
  

    <Footer />
    </div>
    
  )
}


