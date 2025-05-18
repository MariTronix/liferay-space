import styles from './BodySpacesPage.module.css';
import { SubTitle } from './SubTitle.tsx';
import { ContentBodySpaces } from './ContentBodySpaces.tsx';

export const BodySpacesPage = () =>{
    return (
        <div className={styles.bodySpace}>
            <SubTitle />
            <ContentBodySpaces />
        
        </div>
    );
}