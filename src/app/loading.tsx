import { Container } from '@/components/Container';

export default function Loading() {
  return (
    <main className="main">
      <Container>
        <p role="status" aria-live="polite" aria-busy="true">
          Loading pets…
        </p>
      </Container>
    </main>
  );
}
