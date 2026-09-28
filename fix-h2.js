const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'app', 'components');
const correctClass = 'text-3xl sm:text-4xl lg:text-[44px] font-light text-slate-900 leading-[1.15] tracking-tight';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // For each <h2, we capture className="..." and replace the string.
  // Actually, since I have the grep output, I can just fix the specific garbage left behind.
  content = content.replace(/sm:\s+lg:.*?]/g, '');
  content = content.replace(/sm:\s+lg:\s+]/g, '');
  content = content.replace(/text-\[#0b132a\]/g, ''); // forum discussion

  // Let's do a robust fix.
  content = content.replace(/className="[^"]*font-light text-slate-900 leading-\[1\.15\] tracking-tight[^"]*"/g, (match) => {
    // Keep max-w, mb, text-center etc
    let newMatch = match.replace(/sm:\s*lg:[^\s"]+/g, '');
    newMatch = newMatch.replace(/sm:\s*lg:\s*]/g, '');
    newMatch = newMatch.replace(/]\s*]/g, ']'); // remove double brackets if any
    newMatch = newMatch.replace(/text-\[#0b132a\]/g, '');
    return newMatch.replace(/\s+/g, ' ');
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${path.basename(filePath)}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

walkDir(componentsDir);
