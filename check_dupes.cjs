const fs = require('fs');

function walk(dir) {
  let results = [];
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = dir + '/' + f.name;
    if (f.isDirectory() && !f.name.startsWith('.') && f.name !== 'node_modules') {
      results = results.concat(walk(fullPath));
    } else if (f.name.endsWith('.vue')) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = walk('app');

for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  // Find all opening tags
  const lines = c.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Count class attributes on lines that have an opening tag
    const classMatches = line.match(/class="/g);
    if (classMatches && classMatches.length > 1 && line.includes('<')) {
      console.log(f + ':' + (i + 1) + ': ' + line.trim().substring(0, 100));
    }
  }
}
console.log('Done checking ' + files.length + ' files');
