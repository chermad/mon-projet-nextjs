import Link from 'next/link';
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            background: "#222",
            color: "white",
            padding: "10px",
            zIndex: 1000
          }}
        >
          <h1>Mon Site 🚀</h1>
          <nav>
            <Link href="/" className="mr-4 hover:underline">Accueil</Link>
            <Link href="/about" className="hover:underline">À propos</Link>
          </nav>
        </header>

        <main className="pt-16 px-5">
          {children} {/* Le contenu de chaque page */}
        </main>

        <footer style={{ background: "#eee", padding: "10px" }}>
          <p>© 2025 - Tous droits réservés</p>
        </footer>
      </body>
    </html>
  );
}
