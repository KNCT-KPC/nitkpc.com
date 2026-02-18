import { useEffect, type ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import VisualImageSvg from '@site/src/components/svg/VisualImageSvg';
import Swiper from 'swiper';

import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';

import styles from './index.module.scss';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`ホーム`}>
      <div className={styles.global_root}>
        <div id={styles.main_visual}>
          <div id={styles.visual_title}>
            <h1 className={styles.large_title}><span>釧路高専</span> <span>プログラミング研究部</span></h1>
            <h3 className={styles.small_title}><span>National Institute of Technology</span> <span>Kushiro College</span> <span>Programming Club</span></h3>
            <h2 className={styles.catchphrase}>学ぶって、楽しい。</h2>
          </div>
          <div id={styles.visual_img}>
            <VisualImageSvg />
          </div>

        </div>
        <img className={styles.bottom_wave} src="img/toppage/mv_bottom.svg" />

        <div id={styles.wrapper}>
          {/* main */}
          <main>
            <article className={styles.flex_container} id={styles.article1}>
              <div className={styles.img_container}>
                <img src="img/toppage/active.jpg" />
              </div>
              <section id={styles.section1}>
                <h1>あなたも一緒に学びませんか？</h1>
                <p>プログラミング研究会では、プログラミングなどの興味を持った情報技術を、みんなで楽しく話し合いながら学んでいます。<br />色々な分野の仲間がいるので、普段の授業では学べないような幅広い知識を身につけることができます。</p>
              </section>
            </article>
            <article className={styles.flex_container} id={styles.article2}>
              <section id={styles.section2}>
                <p>主な活動は、4月に1年生対象のC言語の講習会や、オープンキャンパス・高専祭への出典、プログラミングコンテストへの参加・運営のお手伝いをしています。<br />昨年度は遠隔でしたが、3年生の情報や電子で学ぶC言語を、1年生が約3週間でマスターしました。また、U-16プログラミングコンテストでは、例年1年生が全道大会へ進出しています。</p>
              </section>
              <table id={styles.info_table}>
                <tr>
                  <th>研究会名</th>
                  <td>プログラミング研究会</td>
                </tr>
                <tr>
                  <th>会員数</th>
                  <td>34人　(2023年)</td>
                </tr>
                <tr>
                  <th>活動曜日</th>
                  <td>平日：月曜日 ~ 金曜日　(祝日は休み)</td>
                </tr>
                <tr>
                  <th>活動時間</th>
                  <td>16:20 ~ 18:00　(放課後)</td>
                </tr>
                <tr>
                  <th>活動場所</th>
                  <td>釧路高専 情報棟2F マルチワークラボラトリー</td>
                </tr>
                <tr>
                  <th>年会費</th>
                  <td>1,000 円(/年)<br />※会費は必要な機材の購入や、校外での活動費用に使用されます。</td>
                </tr>
              </table>

            </article>

            <img className={styles.wave} src="img/toppage/wave.svg" />
            <article id={styles.article3}>
              <section id={styles.section3}>
                <h1>なにを学べるの？</h1>
                <p>プログラミング研究会で学べるのは、プログラミング言語だけではありません。ゲーム作成やサーバー構築、Webサイトの制作、さらには情報の専門科目から数学・物理まで...<br />仲間が増えるほど、研究会全体の知識量が増えていきます。</p>
              </section>
              <div className={styles.img_container}>
                <img id={styles.text_mining} src="img/toppage/text_minings.png" />
              </div>
            </article>

            <article className={styles.flex_container} id={styles.article4}>
              <section id={styles.section4_left}>
                <h1>作品紹介</h1>
                <p>私たちのこれまでの作品はこちらからご覧になれます。</p>
                <div className={`${styles.github} ${styles.square_button}`}>
                  <a href="https://github.com/KNCT-KPC">
                    <FaGithub />
                    <span>これまでの作品を見る</span>
                  </a>
                </div>
              </section>
              <section id={styles.section4_right}>
                <h1>お気軽にご相談ください</h1>
                <p>プログラミング研究会は、あなたの入部をいつでも歓迎しております。もちろん、兼部していただいても構いません。<br />入部しようか迷っている方のために、DiscordのサーバーやTwitterのDMも解放しておりますので、ぜひ気軽にご相談ください。<br />私たちは、あなたと共に学べる日を楽しみにしています。</p>
                <div className={styles.flex_container}>
                  <div className={`${styles.discord} ${styles.square_button}`}>
                    <a href="https://discord.gg/s5PX3xjT">
                      <FaDiscord />
                      <span>Discordサーバーに参加</span>
                    </a>
                  </div>
                  <div className={`${styles.twitter} ${styles.square_button}`}>
                    <a href="https://twitter.com/messages/compose?recipient_id=1508526577549975552">
                      <FaTwitter />
                      <span>@nitkpc にDMを送信</span>
                    </a>
                  </div>
                </div>
              </section>
            </article>

            <article id={styles.article5}>
              <h1>活動紹介</h1>
              <div className={`swiper ${styles.swiper}`}>
                <div className={`swiper-wrapper ${styles.swiper_wrapper}`}>
                  <div className={`swiper-slide ${styles.swiper_slide}`}>
                    <div className={styles.img_container}>
                      <img src="img/toppage/active01.jpg" />
                    </div>
                    <section>
                      <h2>1. プログラミング学習</h2>
                      <p>実験室にはパソコンやホワイトボードなどがあり、それらを活用しながら授業の課題や大会に向けてプログラミングを行なっています。<br />自分のノートパソコンを持参する方が多いですが、持っていないという方もプロ研が所有しているものを利用することができるので心配ありません。</p>
                    </section>
                  </div>
                  <div className={`swiper-slide ${styles.swiper_slide}`}>
                    <div className={styles.img_container}>
                      <img src="img/toppage/active02.jpg" />
                    </div>
                    <section>
                      <h2>2. オープンキャンパス・高専祭</h2>
                      <p>プログラミング学習の一環として、毎年開催されるオープンキャンパス・高専祭に作品を展示しています。C言語で作られた作品や、Unityで制作した3Dゲームなど、他の仲間が作った個性あふれる作品をみることができます。自分の技術力を他の人に伝えられるとてもよい機会です。来場者の方々に自分の作品を発表しましょう。</p>
                    </section>
                  </div>
                  <div className={`swiper-slide ${styles.swiper_slide}`}>
                    <div className={styles.img_container}>
                      <img src="img/toppage/active03.jpg" />
                    </div>
                    <section>
                      <h2>3. 高専プロコン</h2>
                      <p>毎年10月に開催される「全国高等専門学校プログラミングコンテスト」に参加しています。高専プロコンでは3つの部門があり、与えられたテーマに従いながら、チームで約半年に渡って作品を制作します。チーム開発をすることの大変さや、新しい技術との出会いなど、確実に自分をスキルアップにつながります。</p>
                    </section>
                  </div>
                  <div className={`swiper-slide ${styles.swiper_slide}`}>
                    <div className={styles.img_container}>
                      <img src="img/toppage/active04.jpg" />
                    </div>
                    <section>
                      <h2>4. U-16プロコン 釧路大会</h2>
                      <p>新1年生(16歳以下)の会員の方には、毎年秋に行われる「U-16プログラミングコンテスト」に参加していただきます。数回にわたり大会に関する講習会なども実施していますので、自信がない方も安心してください。釧路大会で上位3位に入賞した方は全国大会に出場することができ、毎年プロ研からも1年生が進出しています。</p>
                    </section>
                  </div>
                </div>
                <div className={`swiper-pagination ${styles.swiper_pagination}`}></div>
                <div className={`swiper-button-prev ${styles.swiper_button_prev}`}></div>
                <div className={`swiper-button-next ${styles.swiper_button_next}`}></div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </Layout>
  );
}
