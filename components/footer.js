class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: rgba(17, 24, 39, 0.8);
          backdrop-filter: blur(8px);
          color: #9ca3af;
          padding: 2rem;
          text-align: center;
          border-top: 1px solid rgba(55, 65, 81, 0.5);
          margin-top: 3rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 1rem;
        }
        .footer-links a {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.2s;
          font-size: 0.9rem;
        }
        .footer-links a:hover {
          color: #10b981;
        }
        .copyright {
          font-size: 0.8rem;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </div>
          <p class="copyright">&copy; ${new Date().getFullYear()} Mark-08. All rights reserved. Probably.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
