import Image from "next/image";
import styles from "./index.module.css";

export default function Hearer(){
    return(
        <header className={styles.header}>
            <a href="/" className={styles.logoLink}>
                <Image src="/logo.svg" alt="" className={styles.logo} width={248} height={133} priority></Image>
            </a>
        </header>
    );
};