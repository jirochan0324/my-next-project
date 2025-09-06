import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";


const data:{contents:News[]}={
  contents:[
    {
      id:"1",
      title:"渋谷にオフィスを移転しました",
      category:{name:"更新情報"},
      publishedAt:"2025/09/05",
      createdAt:"2025/09/05",
    },
    {
      id:"2",
      title:"新卒採用を開始しました",
      category:{name:"更新情報"},
      publishedAt:"2025/09/05",
      createdAt:"2025/09/05",
    },
    {
      id:"3",
      title:"テストの記事です",
      category:{name:"更新情報"},
      publishedAt:"2025/09/05",
      createdAt:"2025/09/05",
    },
  ],
};

const sliceData = data.contents.slice(0,2);

export default function Home() {
  // Jsの定数や数式を記述できる
  const name="世界";
  return(
    <>
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>テクノロジーで{name}を変える</h1>
        <p className={styles.description}>私たちは市場をリードしているグローバルカンパニーです。</p>
      </div>
      <Image className={styles.bgimg} src="/img-mv.jpg" alt="" width={4000} height={1200}/>
    </section>
    <section className={styles.news}>
      <h2 className={styles.newsTitle}>News</h2>
      <NewsList news={sliceData}/>
      <div className={styles.newsLink}>
        <ButtonLink href="/news" >もっとみる</ButtonLink>
      </div>

    </section>
    </>
  )
}
