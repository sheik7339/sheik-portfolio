const fs = require('fs');
const path = require('path');

let css = fs.readFileSync(path.join(__dirname, 'src', 'index.css'), 'utf8');

const vars = `
:root {
  --bg-base: #030712;
  --bg-card: rgba(255, 255, 255, 0.03);
  --border-card: rgba(255, 255, 255, 0.08);
  --hover-card: rgba(255, 255, 255, 0.06);
  --text-main: #cbd5e1;
  --text-title: #ffffff;
  --text-muted: #94a3b8;
  --text-desc: #64748b;
  --nav-bg: rgba(3, 7, 18, 0.75);
  --btn-secondary-bg: rgba(255, 255, 255, 0.05);
  --btn-secondary-border: rgba(255, 255, 255, 0.12);
  --orb-opacity: 0.15;
}

.light-mode {
  --bg-base: #f8fafc;
  --bg-card: #ffffff;
  --border-card: rgba(0, 0, 0, 0.1);
  --hover-card: #f1f5f9;
  --text-main: #475569;
  --text-title: #0f172a;
  --text-muted: #64748b;
  --text-desc: #334155;
  --nav-bg: rgba(248, 250, 252, 0.85);
  --btn-secondary-bg: rgba(0, 0, 0, 0.05);
  --btn-secondary-border: rgba(0, 0, 0, 0.2);
  --orb-opacity: 0.35;
}

body {
`;

// Inject Root Variables
css = css.replace(/body\s*\{/, vars);

// Replace Hardcoded Backgrounds & Texts in CSS
css = css.replace(/background:\s*#030712/g, 'background: var(--bg-base)');
css = css.replace(/color:\s*#cbd5e1/g, 'color: var(--text-main)');
css = css.replace(/color:\s*#fff/g, 'color: var(--text-title)');
css = css.replace(/color:\s*#ffffff/g, 'color: var(--text-title)');
css = css.replace(/color:\s*#e2e8f0/g, 'color: var(--text-title)');
css = css.replace(/color:\s*#94a3b8/g, 'color: var(--text-muted)');
css = css.replace(/color:\s*#64748b/g, 'color: var(--text-desc)');
css = css.replace(/opacity:\s*0\.15/g, 'opacity: var(--orb-opacity)');

css = css.replace(/background:\s*rgba\(255,\s*255,\s*255,\s*0\.03\)/g, 'background: var(--bg-card)');
css = css.replace(/border:\s*1px\s*solid\s*rgba\(255,\s*255,\s*255,\s*0\.08\)/g, 'border: 1px solid var(--border-card)');
css = css.replace(/background:\s*rgba\(255,\s*255,\s*255,\s*0\.06\)/g, 'background: var(--hover-card)');
css = css.replace(/background:\s*rgba\(255,\s*255,\s*255,\s*0\.055\)/g, 'background: var(--hover-card)');

css = css.replace(/background:\s*rgba\(3,\s*7,\s*18,\s*0\.8\)/g, 'background: var(--nav-bg)');

// Re-write to file
fs.writeFileSync(path.join(__dirname, 'src', 'index.css'), css);
console.log('CSS updated');
