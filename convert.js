const fs = require('fs');
let html = fs.readFileSync('_legacy/index.html', 'utf8');

// Extract body innerHTML
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (!bodyMatch) { console.error('No body found'); process.exit(1); }
let jsx = bodyMatch[1];

// Remove script tags at the bottom
jsx = jsx.replace(/<script[\s\S]*?<\/script>/gi, '');

// Convert class to className
jsx = jsx.replace(/class=/g, 'className=');
// Convert for to htmlFor
jsx = jsx.replace(/for=/g, 'htmlFor=');
// Convert inline styles to objects (basic support)
jsx = jsx.replace(/style="([^"]*)"/g, (match, styles) => {
    const obj = {};
    styles.split(';').forEach(style => {
        if (!style.trim()) return;
        let [key, val] = style.split(':');
        if (!key || !val) return;
        key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        obj[key] = val.trim();
    });
    return 'style={' + JSON.stringify(obj) + '}';
});

// Self close void tags
['img', 'input', 'br', 'hr', 'source', 'link', 'meta'].forEach(tag => {
    const regex = new RegExp('<' + tag + '([^>]*?)(?<!/)>', 'gi');
    jsx = jsx.replace(regex, '<' + tag + ' />');
});

// Fix some specific HTML attributes
jsx = jsx.replace(/onclick="([^"]*)"/gi, 'onClick={() => {}}'); // Stub out onclicks for now
jsx = jsx.replace(/onsubmit="([^"]*)"/gi, 'onSubmit={(e) => e.preventDefault()}');

// Create the page.tsx
const pageContent = "export default function Home() {\n  return (\n    <main>\n" + jsx + "\n    </main>\n  );\n}\n";
fs.writeFileSync('src/app/page.tsx', pageContent);
console.log('Converted to page.tsx');