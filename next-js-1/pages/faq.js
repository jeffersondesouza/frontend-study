import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

// getStaticProps: essa função roda apenas no momento do build
// recomentdada para pegar dados literalmete staticos
// se os dados forem atualizados na fonte, um novo build deve ser rodado
// para api dinamica é o getSerSideProps
/* 
export async function getStaticProps() {
  console.log("######### getStaticProps #########");
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

  const faq = await fetch(FAQ_API_URL)
    .then((res) => res.json())
    .then((res) => res);

  return {
    props: {
      faqStatic: faq,
    },
  };
}
 */
// Roda a cada a acesso que recebe
// Não seta os dados no html da do source, ou seja, 
// se queremos o dado ja preenchido, sempre ir pelo Static PROPS
export async function getServerSideProps() {
  console.log("######### getServerSideProps #########");
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

  const faq = await fetch(FAQ_API_URL)
    .then((res) => res.json())
    .then((res) => res);

  return {
    props: {
      faq,
    },
  };
}

export default function HomePage({ faq }) {
  return (
    <div>
       <Head>
        <title>Alura Campanha</title>
      </Head>
      <h1>FAQ!</h1>
      <div>
        <ul id="lista-faq">
          {faq.map((item) => (
            <li key={item.question}>
              <article>
                <div>
                  <strong>{item.question}</strong>
                </div>
                <div>{item.answer}</div>
              </article>
            </li>
          ))}
        </ul>
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/faq">faq page</Link>
      </nav>
    </div>
  );
}
