import Link from "next/link";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  return {
    props: {
      hello: "Hello world",
    },
  };
}

export default function HomePage(props) {
  console.log(props)
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    const FAQ_API_URL =
      "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

    fetch(FAQ_API_URL)
      .then((res) => res.json())
      .then((res) => setFaq(res));
  }, []);
  return (
    <div>
      <h1>FAQ!</h1>
      <div>
        <ul>
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
