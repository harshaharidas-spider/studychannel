const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'app', 'components');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Find all buttons or links that use bg-[#ff5a00]
  // We want to replace their rounded-* classes with rounded-full
  // and add our nice hover effects if they don't have it.

  // Regex to match className="..." containing bg-[#ff5a00]
  const classRegex = /className=(["'`])(.*?bg-\[#ff5a00\].*?)\1/g;
  
  content = content.replace(classRegex, (match, quote, classes) => {
    // If it's a pill/button, let's standardize it.
    // Replace rounded, rounded-md, rounded-lg, rounded-xl, rounded-2xl with rounded-full
    let newClasses = classes.replace(/\brounded(-(?:sm|md|lg|xl|2xl|3xl))?\b/g, 'rounded-full');
    
    // Add nice natural hover effects if it doesn't have them
    if (!newClasses.includes('hover:-translate-y-0.5')) {
      newClasses += ' hover:-translate-y-0.5';
    }
    if (!newClasses.includes('hover:shadow-lg')) {
      newClasses = newClasses.replace(/shadow-(sm|md|xs)/g, ''); // remove old small shadows
      newClasses += ' shadow-md hover:shadow-lg';
    }
    if (!newClasses.includes('transition-all')) {
      newClasses = newClasses.replace(/\btransition-colors\b/g, ''); // upgrade transition
      newClasses += ' transition-all duration-300 ease-out';
    }

    // Clean up duplicate spaces
    newClasses = newClasses.replace(/\s+/g, ' ').trim();

    return `className=${quote}${newClasses}${quote}`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${path.basename(filePath)}`);
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
console.log('Done standardizing buttons!');
