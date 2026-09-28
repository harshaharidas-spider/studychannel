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
            
            // Fix useTransform(scrollYProgress [0, 1], [-40, 40])
            content = content.replace(/scrollYProgress\s+\[/g, 'scrollYProgress, [');
            
            // Just to be sure, any other missing commas?
            // "useTransform(scrollYProgress [0, 1]" -> "useTransform(scrollYProgress, [0, 1]"
            
            fs.writeFileSync(file, content, 'utf8');
        }
    });
}
walk('app');
console.log("Done");
