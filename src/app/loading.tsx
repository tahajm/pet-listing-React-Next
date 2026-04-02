export default function Loading() {
  return (
    <main className="main">
      <p role="status" aria-live="polite" aria-busy="true">
        Loading pets…
      </p>
    </main>
  );
}
