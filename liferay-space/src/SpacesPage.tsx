import {BodySpacesPage} from './components/SpacesScreem/BodySpacesPage.tsx';
import {Testimonials} from './components/MainScreen/Testimonials.tsx';
import {WhySection} from './components/MainScreen/WhySection.tsx';

export const SpacesPage = () =>{
    return (
        <>
            <BodySpacesPage />
            <Testimonials />
            <WhySection />
        </>
    );
}