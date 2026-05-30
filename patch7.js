const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

const missingLogic = `
    updateCartUI(); // Re-render cart with new language & currency
};

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentLang = e.currentTarget.getAttribute('data-lang');
        localStorage.setItem('venvioLang', currentLang);
        applyTranslations();
    });
});

document.querySelectorAll('.curr-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentCurrency = e.currentTarget.getAttribute('data-curr');
        localStorage.setItem('venvioCurr', currentCurrency);
        applyTranslations();
    });
});
`;

code = code.replace(/    \}\);\n\n\/\/ State \(Cart stores only item ID, names, and we calculate price on the fly\)/m, 
    "    });\n" + missingLogic + "\n// State (Cart stores only item ID, names, and we calculate price on the fly)"
);

fs.writeFileSync('script.js', code, 'utf8');
