import { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/layout/Header";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body className="bg-zinc-800 text-white tracking-normal">
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
