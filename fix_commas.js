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
            
            // Fix useState array destructuring
            content = content.replace(/const \[([a-zA-Z]+)\s+([a-zA-Z]+)\]/g, 'const [$1, $2]');
            
            // Fix viewport object
            content = content.replace(/once:\s+true\s+margin:/g, 'once: true, margin:');
            content = content.replace(/once:\s+true\s+amount:/g, 'once: true, amount:');
            
            fs.writeFileSync(file, content, 'utf8');
        }
    });
}
walk('app');
console.log("Done");
