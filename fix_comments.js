const fs = require('fs');
let jsx = fs.readFileSync('src/app/page.tsx', 'utf8');
jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*  */}');
fs.writeFileSync('src/app/page.tsx', jsx);
console.log('Fixed comments in page.tsx');