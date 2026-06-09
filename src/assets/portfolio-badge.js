(function () {
  function set(el, props) {
    Object.keys(props).forEach(function (k) {
      el.style.setProperty(k, props[k], 'important');
    });
  }

  var dot = document.createElement('span');
  set(dot, {
    display: 'inline-block',
    width: '6px',
    height: '6px',
    'border-radius': '50%',
    background: '#39FF87',
    'flex-shrink': '0',
    'margin-right': '2px',
  });

  var label = document.createElement('span');
  set(label, {
    color: 'rgba(250,250,250,0.55)',
    'font-weight': '500',
    'font-size': '0.78rem',
    'font-family': "'Inter',system-ui,sans-serif",
  });
  label.textContent = 'Built by ';

  var name = document.createElement('span');
  set(name, {
    color: '#39FF87',
    'font-weight': '700',
    'font-size': '0.78rem',
    'font-family': "'Inter',system-ui,sans-serif",
  });
  name.textContent = 'GrowthOS';

  var badge = document.createElement('a');
  badge.href = 'https://growthos.com.br';
  badge.target = '_blank';
  badge.rel = 'noopener noreferrer';
  badge.appendChild(dot);
  badge.appendChild(label);
  badge.appendChild(name);

  set(badge, {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    left: 'auto',
    top: 'auto',
    'z-index': '2147483647',
    display: 'inline-flex',
    'align-items': 'center',
    gap: '6px',
    padding: '10px 16px',
    background: 'rgba(10,10,11,0.92)',
    border: '1px solid rgba(57,255,135,0.28)',
    'border-radius': '100px',
    'backdrop-filter': 'blur(20px)',
    '-webkit-backdrop-filter': 'blur(20px)',
    'box-shadow': '0 4px 24px rgba(0,0,0,0.5)',
    'font-family': "'Inter',system-ui,sans-serif",
    'font-size': '0.78rem',
    'font-weight': '600',
    color: '#FAFAFA',
    'text-decoration': 'none',
    'letter-spacing': '0.01em',
    'white-space': 'nowrap',
    'line-height': '1',
    margin: '0',
    'max-width': 'none',
    width: 'auto',
    transform: 'none',
    opacity: '1',
    visibility: 'visible',
    'pointer-events': 'auto',
    overflow: 'visible',
  });

  document.body.appendChild(badge);
})();
