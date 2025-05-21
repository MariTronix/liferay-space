import styles from './Footer.module.css';
import logo from '../assets/imgLogos/liferay-logo.png';

export function Footer(){
    const simbolo = ">";
    return(
        <div className={styles.footer}>
            <div className={styles['footer-content']}>
                <div className={styles['footer__info-Company']}>
                    <img src={logo} alt="Liferay logo" />
                    <p>Liferay Spaces é uma iniciativa para fortalecer o ecossistema de tecnologia de Recife e promover a colaboração entre comunidades, 
                        universidades e projetos sociais.
                    </p>
                    <p>www.liferay.com</p>
                </div>

                <div className={styles['footer-navigation']}>
                    <h3>Navegação</h3>
                    <a href="/">{simbolo} Home</a>
                    <a href="../SpacesPage.tsx">{simbolo} Espaços</a>
                    <a href="#">{simbolo} Reserva</a>
                </div>

                <div className={styles['footer-contact']}>
                    <h3 className={styles['footer-contact__item']}>Contato</h3>
                    <div className={styles['footer-contact__item']}>
                        <p>Rua Alfândega, Nº 35, Sala 0401 </p>
                        <p>Paço Alfândega - Recife, PE, </p>
                        <p>CEP: 50030-030</p>
                    </div>
                    <div className={styles['footer-contact__item']}>
                        <p>Email: espacos@liferay.com</p>
                        <p>Telefone: +55 81 2121-6000</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles['footer-rights']}>
                <p>@ 2025 Liferay, inc. Todos os direitos reservados.</p>
            </div>
        </div>
    );
}