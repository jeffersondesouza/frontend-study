import Link from "../src/components/Link";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found - 404</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/faq">faq page</Link>
      </nav>
    </div>
  );
}
