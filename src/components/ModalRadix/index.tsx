import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { RiPlantFill } from "react-icons/ri";
import { ContentModal } from "../ContentModal";
import styles from "./Modal.module.css";

export function ModalRadix(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dialog.Root defaultOpen open={isOpen} onOpenChange={setIsOpen} modal >
            <Dialog.Trigger asChild>
                <button className={styles.card} onClick={() => setIsOpen(true)}>
                    <RiPlantFill className={styles.icon}/>
                    <p>Agronegocio</p>
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Content>
                    <ContentModal area="Agronegocio" empresa="Nokia" escola="Senai - Instituto Anchieta"/>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}