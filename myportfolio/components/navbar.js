class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="bg-white shadow-sm border-b border-gray-100 py-4">
        <div class="container mx-auto px-4 flex justify-between items-center">
          <a href="index.html" class="text-xl font-serif font-bold text-primary-700 hover:text-primary-900 transition-colors">
            Gamu Mhere
          </a>
          
          <div class="hidden md:flex space-x-8">
            <a href="index.html#about" class="text-gray-600 hover:text-primary-600 font-medium transition-colors">About</a>
            <a href="index.html#projects" class="text-gray-600 hover:text-primary-600 font-medium transition-colors">Projects</a>
            <a href="index.html#skills" class="text-gray-600 hover:text-primary-600 font-medium transition-colors">Skills</a>
            <a href="index.html#contact" class="text-gray-600 hover:text-primary-600 font-medium transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', Navbar);