const fs = require('fs');
let content = fs.readFileSync('app/components/FooterSection.jsx', 'utf8');

content = content.replace('university partnerships', 'university partnerships worldwide');
content = content.replace('Com – Bachelor of Commerce', 'B.Com Bachelor of Commerce');
content = content.replace('BA – Bachelor of Arts', 'BA Bachelor of Arts');
content = content.replace('BCA – Computer Applications', 'BCA Computer Applications');
content = content.replace('Sc – Bachelor of Science', 'B.Sc Bachelor of Science');
content = content.replace('Tech – Civil CS Electrical', 'B.Tech Civil CS Electrical');
content = content.replace('Master Degrees (MBA MCA Com)', 'Master Degrees MBA MCA M.Com');
content = content.replace('Sat – Thu: 9:00 AM – 7:00 PM', 'Sat to Thu 9:00 AM to 7:00 PM');
content = content.replace('© {new Date().getFullYear()} Indian Study  All rights', '© {new Date().getFullYear()} Indian Study Channel All rights reserved');

fs.writeFileSync('app/components/FooterSection.jsx', content, 'utf8');
console.log('Restored FooterSection.jsx');
