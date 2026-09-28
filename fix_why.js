const fs = require('fs');
let content = fs.readFileSync('app/components/WhyChooseUsSection.jsx', 'utf8');

content = content.replace('for what&apos;s', 'for what&apos;s next');
content = content.replace(/We make quality education accessible flexible and future-focused\s*— so you can achieve your goals on your/, 'We make quality education accessible flexible and future-focused so you can achieve your goals on your terms');
content = content.replace('Study at your own pace anytime', 'Study at your own pace anytime anywhere');
content = content.replace('Globally recognised degrees from trusted', 'Globally recognised degrees from trusted universities');
content = content.replace('Get support from admission to', 'Get support from admission to graduation');
content = content.replace('Easy payment options with Tamara &amp;', 'Easy payment options with Tamara &amp; Tabby');

fs.writeFileSync('app/components/WhyChooseUsSection.jsx', content, 'utf8');
console.log('Restored WhyChooseUsSection.jsx');
