import {FirstContent} from './components/MainScreen/FirstContent';
import {StorySection} from './components/MainScreen/StorySection';
import {InfoSection} from './components/MainScreen/InfoSection';
import {Testimonials} from './components/MainScreen/Testimonials';
import {WhySection} from './components/MainScreen/WhySection';

export const Home = () => {
  return (
    <>
      <FirstContent />
      <StorySection />
      <InfoSection />
      <Testimonials />
      <WhySection />
    </>
  );
}