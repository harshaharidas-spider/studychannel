const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'app', 'components');

const targetH2Class = 'text-3xl sm:text-4xl lg:text-[44px] font-light text-slate-900 leading-[1.15] tracking-tight';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Regex to match <h2 ... className="<any_h2_classes>"> or <motion.h2 ... className="<classes>">
  // We'll replace just the text sizes, font weights, text colors, and leading/tracking.
  // Actually, let's replace the whole className if it matches certain patterns, or just carefully replace the typography classes.

  // A simpler way: Find <h2 className="..."> and replace the class string.
  // We want to remove text-\dxl, text-\[.*?px\], font-(bold|semibold|extrabold|medium|normal|light), text-(slate|#0b132a|#111).*?, leading-.*?, tracking-.*?
  
  const classRegex = /className=(["'`])(.*?)\1/g;
  
  content = content.replace(/<(h2|motion\.h2)([^>]*?)>/g, (match, tag, rest) => {
    return `<${tag}${rest}>`.replace(classRegex, (matchClass, quote, classes) => {
      let newClasses = classes
        .replace(/\b(text-\w+xl|text-\[\d+px\])\b/g, '') // remove text-3xl, etc
        .replace(/\bfont-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)\b/g, '')
        .replace(/\btext-(slate-\d+|\[#0b132a\]|\[#111\]|\[#0f2c42\])\b/g, '')
        .replace(/\bleading-[-\w\.\[\]]+\b/g, '')
        .replace(/\btracking-[-\w]+\b/g, '');

      // Append standard classes
      newClasses = `${targetH2Class} ${newClasses}`.replace(/\s+/g, ' ').trim();
      
      return `className=${quote}${newClasses}${quote}`;
    });
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated H2s in: ${path.basename(filePath)}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      processFile(fullPath);
    }
  }
}

walkDir(componentsDir);
console.log('Done standardizing h2 typography!');
