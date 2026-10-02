(function () {
  const trips = Array.isArray(window.JP_TRIPS) ? window.JP_TRIPS : [];
  const grid = document.getElementById('story-grid');
  const hero = document.getElementById('hero-image');

  document.getElementById('year').textContent = new Date().getFullYear();

  const socialLabels = { instagram: 'Instagram · @jprailexplores', facebook: 'Facebook · JourneyWithJR', youtube: 'YouTube · @jprailexplores' };
  const socialNav = document.getElementById('social-links');
  socialNav.innerHTML = Object.entries(window.JP_SOCIALS || {}).map(([name, url]) => {
    if (!socialLabels[name] || !url) return '';
    try {
      if (new URL(url).protocol !== 'https:') return '';
    } catch (_) { return ''; }
    return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${socialLabels[name]}</a>`;
  }).join('');

  const featured = [
    { place: 'COLORADO · HIGH COUNTRY', image: 'photos/colorado-maroon-bells.jpg', href: 'colorado.html', label: 'Explore the Colorado travel guide' },
    { place: 'ALASKA · THE WIDE NORTH', image: 'photos/alaska-denali-range.jpg', href: 'alaska.html', label: 'Explore the Alaska travel guide' },
    { place: 'YELLOWSTONE · WYOMING', image: 'photos/yellowstone-grand-prismatic.jpg', href: '#guide-yellowstone', label: 'Explore Yellowstone stories and guide' },
    { place: 'UTAH · RED-ROCK COUNTRY', image: 'photos/utah-delicate-arch.jpg', href: '#guide-utah', label: 'Explore Utah stories and guide' }
  ];
  const destinationLink = document.getElementById('hero-destination');
  const heroIndex = document.getElementById('hero-index');
  document.getElementById('hero-total').textContent = String(featured.length).padStart(2, '0');
  let activeSlide = 0;
  function showSlide(index) {
    activeSlide = (index + featured.length) % featured.length;
    const slide = featured[activeSlide];
    hero.style.backgroundImage = `url("${slide.image}")`;
    document.getElementById('hero-caption').textContent = slide.place;
    destinationLink.href = slide.href;
    destinationLink.setAttribute('aria-label', slide.label);
    heroIndex.textContent = String(activeSlide + 1).padStart(2, '0');
  }
  document.getElementById('hero-prev').addEventListener('click', () => showSlide(activeSlide - 1));
  document.getElementById('hero-next').addEventListener('click', () => showSlide(activeSlide + 1));
  showSlide(0);
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.setInterval(() => showSlide(activeSlide + 1), 7000);
  }

  grid.innerHTML = trips.map((trip) => `
    <article class="story-card">
      <div class="story-image" role="img" aria-label="${escapeHtml(trip.alt || trip.title)}" style="background-image:url('${escapeCssUrl(trip.image)}')"></div>
      <div class="story-meta"><span>${escapeHtml(trip.place)}</span><span>${escapeHtml(trip.date)}</span></div>
      <h3>${escapeHtml(trip.title)}</h3>
      <p>${escapeHtml(trip.note || '')}</p>
    </article>`).join('');

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  }
  function escapeCssUrl(value) {
    return String(value).replace(/[\\'"()\s]/g, (char) => `\\${char}`);
  }
})();
