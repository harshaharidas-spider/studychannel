import os, re

for root, dirs, files in os.walk('app'):
    for f in files:
        if f.endswith('.jsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Remove the corrupted powershell string lines
            content = re.sub(r" 'import \{ ', \+, \(import, \{, (.*?) \} from .*?\.Groups\[1\].*?' \} from'", r'import { \1 } from', content)
            
            # Also remove any remaining corrupted string like 'import { ' + (import { ...
            content = re.sub(r" 'import \{ ' \+ \(import \{ (.*?) \} from .*?\.Groups\[1\].*?' \} from'", r'import { \1 } from', content)
            
            # Fix commas in react import: import React, { useState useRef }
            content = re.sub(r'import React, \{ (.*?) \} from', lambda m: 'import React, { ' + ', '.join(m.group(1).replace(',', ' ').split()) + ' } from', content)
            
            # Fix commas in other imports: import { ArrowRight, GraduationCap, BarChart3,, Users }
            def repl(m):
                words = re.split(r'[, ]+', m.group(1).strip())
                words = [w for w in words if w]
                return 'import { ' + ', '.join(words) + ' } from'
            
            content = re.sub(r'import \{ (.*?) \} from', repl, content)
            
            with open(path, 'w', encoding='utf-8') as file:
                file.write(content)
print("Done")
