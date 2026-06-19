const fs = require('fs');
const path = require('path');

const IGNORE = new Set(['node_modules', '.next', '.git', 'tree.js', 'package-lock.json']);

function tree(dir, prefix = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const filtered = entries.filter(e => !IGNORE.has(e.name));
  filtered.sort((a, b) => {
    if (a.isDirectory() && !b.isDirectory()) return -1;
    if (!a.isDirectory() && b.isDirectory()) return 1;
    return a.name.localeCompare(b.name);
  });

  filtered.forEach((entry, i) => {
    const isLast = i === filtered.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    console.log(prefix + connector + entry.name);
    if (entry.isDirectory()) {
      const extension = isLast ? '    ' : '│   ';
      tree(path.join(dir, entry.name), prefix + extension);
    }
  });
}

console.log('linktree');
tree('.');
