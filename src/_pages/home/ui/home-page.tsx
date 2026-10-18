import site from '@/shared/config/site.json';

export function HomePage() {
  return (
    <main>
      <h1>{site.title}</h1>
      <p>{site.setupMessage}</p>
    </main>
  );
}
