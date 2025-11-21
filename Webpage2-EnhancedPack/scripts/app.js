(function(){
  const html = document.documentElement;
  const saved = localStorage.getItem('dg_theme');
  if(saved) html.setAttribute('data-theme', saved);
})();
function toggleTheme(){
  const html = document.documentElement;
  const current = html.getAttribute('data-theme') || '';
  const next = current === 'light' ? '' : 'light';
  if(next) html.setAttribute('data-theme', next);
  else html.removeAttribute('data-theme');
  localStorage.setItem('dg_theme', next);
}
