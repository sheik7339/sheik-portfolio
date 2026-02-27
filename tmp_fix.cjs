const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let mod = false;

    // Common Colors Replace to Variables
    const rules = [
        { from: /color:\s*'#fff'/g, to: "color: 'var(--text-title)'" },
        { from: /color:\s*'#ffffff'/g, to: "color: 'var(--text-title)'" },
        { from: /color:\s*'#e2e8f0'/g, to: "color: 'var(--text-title)'" },
        { from: /color:\s*'#64748b'/g, to: "color: 'var(--text-desc)'" },
        { from: /color:\s*'#94a3b8'/g, to: "color: 'var(--text-muted)'" },
        { from: /color:\s*'#475569'/g, to: "color: 'var(--text-main)'" },
        { from: /color:\s*'#334155'/g, to: "color: 'var(--text-title)'" },
        { from: /color:\s*'#0f172a'/g, to: "color: 'var(--text-title)'" },

        { from: /background:\s*'#030712'/g, to: "background: 'var(--bg-base)'" },
        { from: /background:\s*'rgba\(59,130,246,0.06\)'/g, to: "background: 'var(--btn-secondary-bg)'" }
    ];

    rules.forEach(r => {
        if (r.from.test(content)) {
            content = content.replace(r.from, r.to);
            mod = true;
        }
    });

    if (mod) fs.writeFileSync(filePath, content);
}

function processDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            replaceInFile(fullPath);
        }
    });
}

processDir(path.join(__dirname, 'src'));

// Handle tailwind classes specifically in About.jsx
const aboutPath = path.join(__dirname, 'src', 'sections', 'About.jsx');
if (fs.existsSync(aboutPath)) {
    let about = fs.readFileSync(aboutPath, 'utf8');
    about = about.replace(/bg-\[#030712\]/g, 'bg-[var(--bg-base)]');
    about = about.replace(/bg-white\/\[0.02\]/g, 'bg-[var(--bg-card)]');
    about = about.replace(/text-white/g, 'text-[var(--text-title)]');
    about = about.replace(/text-slate-400/g, 'text-[var(--text-desc)]');
    about = about.replace(/text-slate-500/g, 'text-[var(--text-muted)]');
    about = about.replace(/border-white\/5/g, 'border-[length:var(--border-card)]'); // approximation
    fs.writeFileSync(aboutPath, about);
}
console.log('Update finished');
