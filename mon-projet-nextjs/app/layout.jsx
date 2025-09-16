export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header style={{ background: "#222", color: "white", padding: "10px" }}>
          <h1>Mon Site 🚀</h1>
          <nav>
            <a href="/">Accueil</a> | <a href="/about">À propos</a>
          </nav>
        </header>

        <main style={{ padding: "20px" }}>
          {children} {/* Ici, Next.js va injecter le contenu de la page */}
        </main>

        <footer style={{ background: "#eee", padding: "10px" }}>
          <p>© 2025 - Tous droits réservés</p>
        </footer>
      </body>
    </html>
  );
}
