import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mercado Livre - Teste Frontend</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href={
            "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/favicon.svg"
          }
        />
      </Head>
      <main className={styles.main}>
        <Header />
        <div>Batata</div>
      </main>
    </>
  );
}
