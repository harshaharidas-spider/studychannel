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
            
            // Fix useSpring(rawX { ... })
            content = content.replace(/useSpring\((raw[XY])\s+\{/g, 'useSpring($1, {');
            
            // Fix map parameter missing comma: .map((item index) =>
            content = content.replace(/\.map\(\(([a-zA-Z]+)\s+([a-zA-Z]+)\)\s*=>/g, '.map(($1, $2) =>');
            
            fs.writeFileSync(file, content, 'utf8');
        }
    });
}
walk('app');
console.log("Done");
