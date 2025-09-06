import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Hearer(){
    return(
        <header className={styles.header}>
            <Link href="/" className={styles.logoLink}>
                <Image src="/logo.svg" alt="" className={styles.logo} width={248} height={133} priority></Image>
            </Link>
            <Menu/>
        </header>
    );
};