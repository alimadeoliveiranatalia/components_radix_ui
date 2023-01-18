import * as Popover from "@radix-ui/react-popover";
import styles from "./Popover.module.css";

export function PopoverRadix(){
    return (<Popover.Root>
        <Popover.Trigger className={styles.PopoverTrigger}>More info</Popover.Trigger>
        <Popover.Portal>
            <Popover.Content className={styles.PopoverContent} sideOffset={5}>
                Some more info...
                <Popover.Arrow className={styles.PopoverArrow}/>
            </Popover.Content>
        </Popover.Portal>
    </Popover.Root>)
}