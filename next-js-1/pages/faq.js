import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>FAQ!</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/faq">faq page</Link>
      </nav>
    </div>
  );
}
