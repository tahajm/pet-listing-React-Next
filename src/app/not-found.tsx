import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="main">
      <h1>404 — Page not found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <p>
        <Link href="/">Go to home page</Link>
      </p>
    </main>
  );
}
