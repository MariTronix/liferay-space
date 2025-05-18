import {BodySpacesPage} from './components/SpacesScreem/BodySpacesPage.tsx';
import {Testimonials} from './components/MainScreen/Testimonials.tsx';
import {WhySection} from './components/MainScreen/WhySection.tsx';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';

export const SpacesPage = () =>{
    return (
        <>
            <Header/>
            <SubTitle />
            <BodySpaces />
            <Testimonials />
            <WhySection />
            <Footer/>
        </>
    );
}