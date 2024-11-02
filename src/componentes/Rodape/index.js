import styles from './Rodape.module.css';
import {Link} from "react-router-dom";

function Rodape(props) {


    return (
        <footer className={styles.rodape}>

            <p>&copy; 2024 Cine Tag. Todos os direitos reservados.</p>
            <p>Contato: <a href="mailto: cinetag@contato.com"> nossoContato@cinetag.com | (11) 9999-9999</a></p>

        </footer>
    )


}

export default Rodape;