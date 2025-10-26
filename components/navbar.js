class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(17, 24, 39, 0.8);
          backdrop-filter: blur(8px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(55, 65, 81, 0.5);
        }
        .logo {
          color: #10b981;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: #e5e7eb;
          text-decoration: none;
          transition: color 0.2s;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        a:hover {
          color: #10b981;
        }
        .nav-icon {
          width: 20px;
          height: 20px;
        }
      </style>
      <nav>
        <div class="logo">
          <i data-feather="cpu" class="nav-icon"></i>
          <span>Mark-08</span>
        </div>
        <ul>
          <li><a href="/"><i data-feather="home" class="nav-icon"></i> Home</a></li>
          <li><a href="#"><i data-feather="book" class="nav-icon"></i> Subjects</a></li>
          <li><a href="#"><i data-feather="settings" class="nav-icon"></i> Settings</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
