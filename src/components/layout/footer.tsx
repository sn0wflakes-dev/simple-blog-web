export function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} RenderFlow Blog. A demonstration of Next.js rendering strategies.</p>
      </div>
    </footer>
  );
}
