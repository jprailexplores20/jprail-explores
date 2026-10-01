(function () {
  const trips = Array.isArray(window.JP_TRIPS) ? window.JP_TRIPS : [];
  const grid = document.getElementById('story-grid');
  const hero = document.getElementById('hero-image');
  const first = trips[0];

  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('story-count').textContent = String(trips.length).padStart(2, '0');

  if (first) {
    hero.style.backgroundImage = `url("${first.image}")`;
    document.getElementById('hero-caption').textContent = first.place.toUpperCase();
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
