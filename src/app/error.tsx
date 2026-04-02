'use client';

export default function Error({ unstable_retry }: { unstable_retry: () => void }) {
  return (
    <main className="main">
      <h1>Something went wrong</h1>
      <p>We could not load the pets. Please try again.</p>
      <button onClick={unstable_retry}>Try again</button>
    </main>
  );
}
