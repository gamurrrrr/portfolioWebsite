class CustomFooter extends HTMLElement {
  connectedCallback() {
    // 1. We removed 'attachShadow' so global styles (Tailwind) and scripts (Feather) work.
    this.innerHTML = `
      <footer class="bg-primary-900 text-white py-8 text-center mt-auto">
        <div class="max-w-6xl mx-auto px-4 flex flex-col gap-6">
          
          <div class="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/gamuchiraimhere" target="_blank" class="hover:text-primary-300 transition-colors duration-300">
              <i data-feather="linkedin"></i>
            </a>
            <a href="https://github.com/gamurrrrr" target="_blank" class="hover:text-primary-300 transition-colors duration-300">
              <i data-feather="github"></i>
            </a>
            <a href="mailto:gamu.mhere@gmail.com" class="hover:text-primary-300 transition-colors duration-300">
              <i data-feather="mail"></i>
            </a>
          </div>

          <div class="text-sm opacity-80">
            &copy; ${new Date().getFullYear()} Gamu Mhere. All rights reserved.
          </div>
        </div>
      </footer>
    `;

    // 2. We must manually tell Feather to re-scan for icons 
    // because this component loads AFTER the initial page load.
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }
}

customElements.define('custom-footer', CustomFooter);