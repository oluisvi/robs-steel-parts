const form = document.querySelector('#fitment-form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const vehicle = String(data.get('vehicle') || '').trim();
  const year = String(data.get('year') || '').trim();
  const engine = String(data.get('engine') || '').trim();
  if (!vehicle) return;

  const details = [vehicle, year, engine].filter(Boolean).join(' · ');
  const message = `Oi! Vim pelo site da Robs Steel Parts e queria consultar um escapamento para: ${details}. Quais opções vocês indicam?`;
  const url = `https://wa.me/5541998155315?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});
