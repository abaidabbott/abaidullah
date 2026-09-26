// Progressive enhancement: address and mail link work without JavaScript.
document.querySelectorAll('[data-email-contact]').forEach((contact) => {
  const button = contact.querySelector('[data-copy-email]');
  const address = contact.querySelector('.email-address');
  const status = contact.querySelector('.email-status');
  button.hidden = false;
  button.addEventListener('click', async () => {
    button.disabled = true;
    status.textContent = '';
    try {
      await navigator.clipboard.writeText(address.value);
      status.textContent = 'Email copied. Paste it into your email app.';
    } catch {
      address.focus();
      address.select();
      status.textContent = 'Select and copy the email address, or choose Open email app.';
    } finally {
      button.disabled = false;
    }
  });
});

// Give every article a consistent, verified route back to the portfolio owner.
const articleMain = document.querySelector('main');
if (articleMain && !document.querySelector('[data-article-contact]')) {
  const contactPanel = document.createElement('aside');
  contactPanel.className = 'article-contact';
  contactPanel.dataset.articleContact = '';
  contactPanel.setAttribute('aria-labelledby', 'article-contact-title');
  contactPanel.innerHTML = `
    <h2 id="article-contact-title">Work with Abaid Ullah</h2>
    <p>Available for AI, web and mobile development, e-commerce systems, data solutions, CRM integrations and business automation.</p>
    <div class="article-contact-links">
      <a href="mailto:bestabaidullahbutt@gmail.com?subject=Project%20inquiry%20from%20your%20website">Email Abaid</a>
      <a href="tel:+447473943919">Call +44 7473 943919</a>
      <a href="https://wa.me/447473943919">WhatsApp</a>
      <a href="https://www.linkedin.com/in/abaidabbott">LinkedIn</a>
      <a href="https://calendly.com/bestabaidullahbutt">Book a call</a>
      <a href="/#contact">Contact form</a>
    </div>`;
  articleMain.append(contactPanel);
}
