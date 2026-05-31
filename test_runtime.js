const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: "dangerously", url: "http://localhost/" });
dom.window.IntersectionObserver = class IntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
};
dom.window.matchMedia = () => ({ matches: false, addEventListener: () => {}, removeEventListener: () => {} });

// We need to wait for DOM to load, but JSDOM does this synchronously if scripts are inline.
// Since script.js is external, we need to load it manually into the JSDOM context.

const scriptContent = fs.readFileSync('script.js', 'utf8');
const scriptEl = dom.window.document.createElement("script");
scriptEl.textContent = scriptContent;

try {
    dom.window.document.body.appendChild(scriptEl);
    console.log("Script executed without top-level errors.");
    
    // Simulate DOMContentLoaded
    dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
    console.log("DOMContentLoaded event fired.");
    
    // Simulate window load
    dom.window.dispatchEvent(new dom.window.Event('load'));
    setTimeout(() => {
        console.log("Preloader hidden?", dom.window.document.getElementById('preloader').classList.contains('hidden'));
        console.log("Preloader fade-out?", dom.window.document.getElementById('preloader').classList.contains('fade-out'));
    }, 2500);
} catch(e) {
    console.error("Runtime error:", e);
}
