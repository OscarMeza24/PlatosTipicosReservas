import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>🍽️ Ruta Gastronómica</h3>
        <p>Explora los sabores del mar y la costa ecuatoriana.</p>
        <p>
          <strong>Ubicación:</strong> Costa del Pacífico, 🇪🇨 Ecuador
        </p>
      </div>

      <div className="footer-center">
        <p>
          <strong>Contáctanos:</strong>
        </p>
        <p>Email: info@rutagastro.com</p>
        <p>Tel: +593 978601829</p>
      </div>

      <div className="footer-right">
        <p>
          <strong>Síguenos:</strong>
        </p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            🌐 Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            📷 Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            🐦 Twitter
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Ruta Gastronómica. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}
