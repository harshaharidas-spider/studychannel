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
            
            // Fix the broken string interpolation
            content = content.replace(/ 'import \{ ' \+ \(import \{ (.*?) \} from ".*?";\.Groups\[1\]\.Value -replace '\\\\s\+', ', '\) \+ ' \} from' /g, 'import { $1 } from');
            
            content = content.replace(/import React \{/g, 'import React, {');
            
            // Fix missing commas in import { ... }
            content = content.replace(/import\s+\{([^}]+)\}\s+from/g, (match, p1) => {
                const words = p1.trim().split(/\s+/).filter(w => w);
                return 'import { ' + words.join(', ') + ' } from';
            });
            
            fs.writeFileSync(file, content, 'utf8');
        }
    });
}
walk('app');
console.log("Done");
