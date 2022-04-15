import Link from "../src/components/Link";

export default function HomePage() {
  return (
    <div>
      <h1>Alura case!</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/faq">faq page</Link>
      </nav>
    </div>
  );
}
