import {FirstContent} from './components/MainScreen/FirstContent';
import {StorySection} from './components/MainScreen/StorySection';
import {InfoSection} from './components/MainScreen/InfoSection';
import {Testimonials} from './components/MainScreen/Testimonials';
import {WhySection} from './components/MainScreen/WhySection';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const Home = () => {
  return (
    <>
      <Header/>
      <FirstContent />
      <StorySection />
      <InfoSection />
      <Testimonials />
      <WhySection />
      <Footer/>
    </>
  );
}