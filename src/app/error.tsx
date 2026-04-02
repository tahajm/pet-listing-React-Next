'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="main">
      <h1>Something went wrong</h1>
      <p>We couldn&apos;t load the pets. Please try again.</p>
      <button onClick={reset}>Try again</button>
    </main>
  );
}
