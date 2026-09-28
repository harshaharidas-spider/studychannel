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
            
            // Remove the corrupted powershell string lines
            content = content.replace(/ 'import \{ ', \+, \(import, \{, (.*?) \} from .*?\.Groups\[1\].*?' \} from'/g, 'import { $1 } from');
            
            // Also remove any remaining corrupted string like 'import { ' + (import { ...
            content = content.replace(/ 'import \{ ' \+ \(import \{ (.*?) \} from .*?\.Groups\[1\].*?' \} from'/g, 'import { $1 } from');
            
            // Fix commas in react import: import React, { useState useRef }
            content = content.replace(/import React, \{ (.*?) \} from/g, (match, p1) => {
                const words = p1.replace(/,/g, ' ').split(/\s+/).filter(w => w);
                return 'import React, { ' + words.join(', ') + ' } from';
            });
            
            // Fix commas in other imports
            content = content.replace(/import \{ (.*?) \} from/g, (match, p1) => {
                const words = p1.split(/[, ]+/).filter(w => w);
                return 'import { ' + words.join(', ') + ' } from';
            });
            
            fs.writeFileSync(file, content, 'utf8');
        }
    });
}
walk('app');
console.log("Done");
