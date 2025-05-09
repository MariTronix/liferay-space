import { SubTitle } from './components/SpacesScreem/SubTitle.tsx';
import { BodySpaces } from './components/SpacesScreem/BodySpaces.tsx';
import {Testimonials} from './components/MainScreen/Testimonials.tsx';
import {WhySection} from './components/MainScreen/WhySection.tsx';

export const SpacesPage = () =>{
    return (
        <>
            <SubTitle />
            <BodySpaces />
            <Testimonials />
            <WhySection />

        </>
    );
}