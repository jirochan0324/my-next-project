import Link from "next/link";
import styeles from "./index.module.css";

export default function Footer() {
    return(
        <footer className={styeles.footer}>
            <nav className={styeles.nav}>
                <ul className={styeles.items}>
                    <li className={styeles.item}>
                        <Link href="/news">ニュース</Link>
                    </li>
                    <li className={styeles.item}>
                        <Link href="/members">メンバー</Link>
                    </li>
                    <li className={styeles.item}>
                        <Link href="/contact">お問い合わせ</Link>
                    </li>
                </ul>
            </nav>
            <p className={styeles.cr}>&copy; SIMPLE All Rights Reseved 2025</p>
        </footer>
    )
}