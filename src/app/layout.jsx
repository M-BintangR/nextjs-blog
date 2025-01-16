import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
        <nav>Nav</nav>
      </header>
      <body className="">
        <main>{children}</main>

        <footer>footer</footer>
      </body>
    </html>
  );
}
