import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import mainimage from "./images/tourgirl.png";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Visa Consult - Shengen</title>
        <meta name="description" content="  Консультация, запись и помощь в оформлении статуса резидента Армении и шенген виз для Германии и Франции" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            <a href="https://wa.me/+79253807313"> Связь с нами по WhatsApp</a>
          </p>
          <div>
            <a href="tel:+37495389339" className={styles.button}>Позвонить</a>
          </div>
        </div>

        <h1 className={styles.title}>
          Консультация, запись и помощь в оформлении ВНЖ Армении и шенген виз для Германии и Франции
        </h1>

        {/* <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div> */}
        <div className={styles.mainImg}>
          <Image
            src={mainimage}
            alt="main image"
            width="100%"
              height="100%"
        
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://wa.me/+79253807313"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Консультация <span>-&gt;</span>
            </h2>
            <p>
              Первичное обсуждение целей, оснований и оказание помощи.
            </p>
          </a>

          <a
            href="tel:+37495389339"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Запись<span>-&gt;</span>
            </h2>
            <p>
              После консультации оказываем поддержку для записи.
            </p>
          </a>

          <a
            href="tel:+37495389339"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Оформление кейса  <span>-&gt;</span>
            </h2>
            <p>
              Сбор документов и оформление полноценного кейса.
            </p>
          </a>

          <a
            href="tel:+37495389339"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
            Подача <span>-&gt;</span>
            </h2>
            <p>
              Помощь и соровождение для подачи документов.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
