class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: rgba(254, 252, 245, 0.95);
                    backdrop-filter: blur(8px);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                }
                nav {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1.5rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-family: 'Playfair Display', serif;
                    font-weight: 700;
                    font-size: 1.5rem;
                    color: #14532d;
                    text-decoration: none;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                .nav-link {
                    font-weight: 500;
                    color: #374151;
                    text-decoration: none;
                    position: relative;
                    transition: color 0.3s;
                }
                .nav-link:hover {
                    color: #22c55e;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #22c55e;
                    transition: width 0.3s;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #374151;
                }
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            <nav>
                <a href="#" class="logo">Gamu Mhere</a>
                <div class="nav-links">
                    <a href="#about" class="nav-link">About</a>
                    <a href="#projects" class="nav-link">Projects</a>
                    <a href="#skills" class="nav-link">Skills</a>
                    <a href="#contact" class="nav-link">Contact</a>
                </div>
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);