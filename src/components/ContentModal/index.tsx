import { SlPeople } from "react-icons/sl";
import { AiFillCloseCircle } from "react-icons/ai";
import styles from "./ContentModal.module.css";
interface ModalProps {
    area: string;
    empresa: string;
    escola: string;
}

export function ContentModal({ area, empresa, escola}:ModalProps){
    return (
        <div className={styles.container}>
            <div className={styles.headermodal}>
                <span>{area}</span>
                <AiFillCloseCircle className={styles.iconClose}/>
            </div>
            <div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Empresa</th>
                            <th style={{'textAlign': 'left'}}></th>
                            <th style={{'textAlign': 'left'}}>Escola Responsável</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{'textAlign':'center'}}>
                            <SlPeople/>
                            </td>
                            <td>{empresa}</td>
                            <td>{escola}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}