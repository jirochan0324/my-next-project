import styeles from "./index.module.css";

export default function Footer() {
    return(
        <footer className={styeles.footer}>
            <nav className={styeles.nav}>
                <ul className={styeles.items}>
                    <li className={styeles.item}>
                        <a href="/news">ニュース</a>
                    </li>
                    <li className={styeles.item}>
                        <a href="/members">メンバー</a>
                    </li>
                    <li className={styeles.item}>
                        <a href="/contact">お問い合わせ</a>
                    </li>
                </ul>
            </nav>
            <p className={styeles.cr}>&copy; SIMPLE All Rights Reseved 2025</p>
        </footer>
    )
}