const fs = require('fs');
const path = require('path');

function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            walk(file);
        } else if (file.endsWith('.jsx')) {
            let content = fs.readFileSync(file, 'utf8');
            
            // Fix ...prev x: latestX
            content = content.replace(/\.\.\.prev\s+x:/g, '...prev, x:');
            content = content.replace(/\.\.\.prev\s+y:/g, '...prev, y:');
            
            fs.writeFileSync(file, content, 'utf8');
        }
    });
}
walk('app');
console.log("Done");
