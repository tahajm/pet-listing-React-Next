'use client';

import { Container } from '@/components/Container';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="main">
      <Container>
        <h1>Something went wrong</h1>
        <p>We couldn&apos;t load the pets. Please try again.</p>
        <button onClick={reset}>Try again</button>
      </Container>
    </main>
  );
}
