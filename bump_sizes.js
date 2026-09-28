const fs = require('fs');
const path = require('path');

const dir = 'app/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Bump sizes in paragraph tags (short detailed text)
    content = content.replace(/<p className="([^"]*)text-xs sm:text-sm([^"]*)">/g, '<p className="$1text-sm sm:text-base$2">');
    content = content.replace(/<p className="([^"]*)text-xs([^"]*)">/g, '<p className="$1text-sm$2">');
    content = content.replace(/<p className="([^"]*)text-\[11px\] sm:text-xs([^"]*)">/g, '<p className="$1text-xs sm:text-sm$2">');
    content = content.replace(/<p className="([^"]*)text-\[11px\]([^"]*)">/g, '<p className="$1text-xs$2">');
    content = content.replace(/<p className="([^"]*)text-\[10px\] sm:text-\[11px\]([^"]*)">/g, '<p className="$1text-[11px] sm:text-xs$2">');
    
    // Bump sizes in checklists (divs)
    content = content.replace(/className="([^"]*)text-\[11px\] sm:text-xs([^"]*)"/g, 'className="$1text-xs sm:text-sm$2"');
    
    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});
console.log('Bumped paragraph text sizes');
