let pointsUsed = 0;
// Translations Dictionary
const translations = {
    cs: {
        "nav.why_us": "Proč my",
        "nav.portfolio": "Reference",
        "nav.pricing": "Ceník",
        "nav.addons": "Doplňky",
        "nav.cart": "Košík",
        "hero.title": "Tvoříme weby rychlostí<br><span class=\"text-gradient\">vašeho podnikání.</span>",
        "hero.desc": "Expressní webová prezentace & marketing. Plně funkční, moderní a responzivní řešení do jednoho dne od dodání podkladů.",
        "hero.btn_pkg": "Vybrat balíček",
        "hero.btn_portfolio": "Ukázky práce",
        "hero.badge": "⚡ Express webové řešení",
        "hero.trust1": "SSL Zabezpečení",
        "hero.trust2": "100% Responzivní",
        "hero.trust3": "Rychlé načítání",
        "feature.title": "Naše hlavní výhoda: Web už do 24 hodin",
        "feature.desc": "Víme, že v podnikání rozhoduje rychlost. Zatímco běžné agentury tvoří weby týdny, my díky optimalizovanému vývoji a agilnímu nasazení dodáváme plně funkční, moderní a responzivní řešení do jednoho dne od dodání podkladů.",
        "portfolio.title": "Naše Ukázky (Koncepty)",
        "portfolio.desc": "Tyto projekty jsou fiktivní koncepty vytvořené speciálně pro demonstraci našich designových schopností a rychlosti dodání.",
        "portfolio.btn": "Zobrazit web",
        "portfolio.p1_desc": "Moderní vícestránkový web pro bistro",
        "portfolio.p2_desc": "Elegantní prezentace kavárny",
        "portfolio.p3_desc": "Luxusní one-page (jednostránkový) web",
        "pricing.title": "Hlavní balíčky služeb",
        "pricing.desc": "Vyberte si řešení, které odpovídá vašim potřebám.",
        "pricing.badge_24": "DO 24 HODIN",
        "pricing.badge_48": "DO 48 HODIN",
        "pricing.badge_ind": "INDIVIDUÁLNÍ",
        "pricing.popular": "Nejprodávanější",
        "pkg.start.ideal": "Ideální pro: Restaurace, kavárny, řemeslníky a lokální služby, které potřebují okamžitou vizitku na internetu.",
        "pkg.start.f1": "Moderní jednostránkový web (One-page) pro mobilní telefony",
        "pkg.start.f2": "Důležité sekce: O nás, Nabídka, Ceník, Kontakt",
        "pkg.start.f3": "Propojení na Google Mapy a sociální sítě",
        "pkg.start.f4": "Základní technické SEO",
        "pkg.start.f5": "Spuštění projektu do 24 hodin od podkladů",
        "pkg.std.ideal": "Ideální pro: Rostoucí firmy a živnostníky, kteří chtějí detailně prezentovat více služeb nebo své reference.",
        "pkg.std.f1": "Vícestránkový web (rozsah až 5 samostatných podstránek)",
        "pkg.std.f2": "Pokročilý poptávkový či rezervační formulář",
        "pkg.std.f3": "Přehledná a logická navigace",
        "pkg.std.f4": "Nasazení analytických nástrojů (Google Analytics)",
        "pkg.std.f5": "Kompletní realizace a spuštění do 48 hodin",
        "pkg.prem.price": "od 18 900 Kč",
        "pkg.prem.ideal": "Ideální pro: Náročnější klienty, kteří vyžadují neomezený rozsah obsahu a nadstandardní interaktivní funkce.",
        "pkg.prem.f1": "Neomezené množství podstránek s architekturou na míru",
        "pkg.prem.f2": "Pokročilé dynamické prvky a animace pomocí JavaScriptu",
        "pkg.prem.f3": "Vícejazyčné mutace webu (přepínání jazyků)",
        "pkg.prem.f4": "Plné využití moderních technologií pro rychlost",
        "pkg.prem.f5": "Rozšířená technická podpora a prioritní úpravy",
        "pkg.btn_add": "Přidat do košíku",
        "addons.title": "Doplňkové služby a správa",
        "addons.desc": "Přizpůsobte si projekt svým potřebám.",
        "addon1.title": "Vlastní doména (.cz, .com)",
        "addon1.desc": "Zajištění prémiové domény pro vaši značku na 1 rok včetně SSL certifikátu.",
        "addon2.title": "Měsíční správa a podpora",
        "addon2.desc": "Pravidelné zálohování webu, aktualizace systému, zabezpečení a drobné úpravy obsahu na přání.",
        "addon3.title": "Tvorba vizuální identity",
        "addon3.desc": "Návrh minimalistického loga a definice firemních barev.",
        "addon4.title": "Hodinová sazba (Vícepráce)",
        "addon4.desc": "Práce nad rámec balíčků (rozšiřování webu, specifické animace a kódování). Uveďte počet hodin v košíku.",
        "addon.per_year": "/ rok",
        "addon.per_month": "/ měsíc",
        "addon.per_hour": "/ hod",
        "addon.btn_add": "Přidat",
        "test.title": "Testovací platba pro ověření karty",
        "test.desc": "Stojí pouze malou částku, abyste si mohli vyzkoušet reálný nákup na našem webu.",
        "footer.desc": "Expressní webová prezentace & marketing.",
        "footer.tax": "Ceny jsou konečné. Nejsme plátci DPH.",
        "footer.rights": "Všechna práva vyhrazena.",
        "cart.title": "Váš Košík",
        "cart.empty": "Váš košík je zatím prázdný.",
        "cart.total": "Celkem:",
        "cart.tax_info": "Nejsme plátci DPH. Ceny jsou konečné.",
        "cart.checkout": "Přejít k objednávce",
        "cart.remove": "Odstranit",
        "modal.title": "Dokončení objednávky",
        "modal.name": "Jméno a Příjmení / Firma",
        "modal.name_ph": "Např. Jan Novák",
        "modal.msg": "Zpráva / Vaše představa o webu",
        "modal.msg_ph": "Zde nám můžete popsat, co od webu očekáváte...",
        "modal.submit": "Zaplatit kartou",
        "modal.redirect": "Přesměrovávání na platbu...",
        "modal.empty_cart": "Váš košík je prázdný.",
        "modal.error": "Omlouváme se, došlo k chybě při inicializaci platby: ",
        "success.title": "Platba proběhla úspěšně!",
        "success.desc": "Děkujeme za vaši důvěru. Vaši objednávku jsme v pořádku přijali a brzy se vám ozveme na zadaný e-mail s dalšími kroky k vytvoření vašeho nového webu.",
        "success.btn": "Zpět na hlavní stránku",
        "cancel.desc": "Platba nebyla dokončena. Váš košík zůstal uložen a můžete se k objednávce kdykoliv vrátit.",
        "cancel.btn": "Zpět k objednávce",
        "stats.projects": "Dokončených projektů",
        "stats.delivery": "Průměrná doba dodání",
        "stats.satisfaction": "Spokojenost klientů",
        "stats.years": "Roky zkušeností",
        "feature.badge": "⚡ Naše výhoda",
        "feature.speed_title": "Bleskové dodání",
        "feature.speed_desc": "Váš web bude online už do 24 hodin od dodání podkladů.",
        "feature.responsive_title": "Plně responzivní",
        "feature.responsive_desc": "Perfektní zobrazení na všech zařízeních – mobil, tablet, desktop.",
        "feature.seo_title": "SEO optimalizace",
        "feature.seo_desc": "Váš web bude viditelný v Google díky moderním SEO technikám.",
        "feature.support_title": "Podpora",
        "feature.support_desc": "Profesionální zákaznická podpora a pravidelné aktualizace.",
        "process.badge": "🛠️ Postup",
        "process.title": "Jak to funguje?",
        "process.desc": "Jednoduché 4 kroky k vašemu novému webu.",
        "process.s1_title": "Výběr balíčku",
        "process.s1_desc": "Vyberte si z našich balíčků ten, který nejlépe odpovídá vašim potřebám a rozpočtu.",
        "process.s2_title": "Zaslání podkladů",
        "process.s2_desc": "Pošlete nám texty, obrázky a představu o vašem budoucím webu.",
        "process.s3_title": "Tvorba webu",
        "process.s3_desc": "Náš tým okamžitě začne pracovat na vašem profesionálním webu.",
        "process.s4_title": "Spuštění",
        "process.s4_desc": "Váš web nasadíme online a předáme vám přístupy. Vše do 24 hodin!",
        "portfolio.badge": "🖼️ Portfolio",
        "portfolio.multi": "Vícestránkový",
        "portfolio.onepage": "One-page",
        "pricing.badge": "💎 Ceník",
        "addons.badge": "🔧 Doplňky",
        "testimonials.badge": "⭐ Recenze",
        "testimonials.title": "Co říkají naši klienti",
        "testimonial.t1_text": "\"Web byl hotový za pouhý jeden den, přesně jak slíbili. Profesionální přístup a moderní design. Jedině doporučit!\"",
        "testimonial.t1_name": "Martin K.",
        "testimonial.t1_role": "Majitel restaurace",
        "testimonial.t2_text": "\"Nejrychlejší a nejprofesionálnější webovka, kterou jsem kdy objednal. Zákazníci nás díky ní konečně najdou online.\"",
        "testimonial.t2_name": "Jana P.",
        "testimonial.t2_role": "Kavárnice",
        "testimonial.t3_text": "\"Skvělá komunikace, přesně pochopili, co jsme potřebovali. Web vypadá luxusně a funguje bezchybně i na mobilu.\"",
        "testimonial.t3_name": "Petr V.",
        "testimonial.t3_role": "Živnostník",
        "faq.title": "Často kladené otázky",
        "faq.q1": "Opravdu dostanu web do 24 hodin?",
        "faq.a1": "Ano! Jakmile obdržíme všechny potřebné podklady (texty, obrázky, logo), začneme okamžitě pracovat. V naprosté většině případů je web hotový a nasazený online do 24 hodin.",
        "faq.q2": "Co když s webem nebudu spokojen?",
        "faq.a2": "Vaše spokojenost je pro nás prioritou. Provádíme bezplatné revize a úpravy, dokud nebudete s výsledkem naprosto spokojeni.",
        "faq.q3": "Jaké podklady od mě budete potřebovat?",
        "faq.a3": "Stačí nám texty, které chcete na webu zobrazit, fotky (produkty, interiér, tým), logo (pokud máte) a vaše barevné preference. S čímkoli dalším vám rádi pomůžeme.",
        "faq.q4": "Budu moct web sám upravovat?",
        "faq.a4": "Ano, předáme vám kompletní přístupy. Pro rozsáhlejší úpravy doporučujeme naši měsíční správu nebo hodinovou sazbu.",
        "cta.title": "Připraveni na nový web?",
        "cta.desc": "Neváhejte a objednejte si svůj profesionální web ještě dnes. Výsledky uvidíte už zítra!",
        "cta.btn": "Začít hned",
        "footer.nav_title": "Navigace",
        "footer.contact_title": "Kontakt"
    },
    en: {
        "nav.why_us": "Why Us",
        "nav.portfolio": "Portfolio",
        "nav.pricing": "Pricing",
        "nav.addons": "Add-ons",
        "nav.cart": "Cart",
        "hero.title": "Building websites at the speed of<br><span class=\"text-gradient\">your business.</span>",
        "hero.desc": "Express web presentation & marketing. Fully functional, modern, and responsive solutions within one day of receiving materials.",
        "hero.btn_pkg": "Choose a Package",
        "hero.btn_portfolio": "Our Work",
        "hero.badge": "⚡ Express web solution",
        "hero.trust1": "SSL Security",
        "hero.trust2": "100% Responsive",
        "hero.trust3": "Fast Loading",
        "feature.title": "Our Main Advantage: Website within 24 Hours",
        "feature.desc": "We know that speed is crucial in business. While regular agencies take weeks to build websites, thanks to optimized development and agile deployment, we deliver fully functional, modern, and responsive solutions within one day.",
        "portfolio.title": "Our Work (Concepts)",
        "portfolio.desc": "These projects are fictional concepts created specifically to demonstrate our design capabilities and delivery speed.",
        "portfolio.btn": "View Website",
        "portfolio.p1_desc": "Modern multi-page website for a bistro",
        "portfolio.p2_desc": "Elegant cafe presentation",
        "portfolio.p3_desc": "Luxury one-page website",
        "pricing.title": "Main Service Packages",
        "pricing.desc": "Choose the solution that fits your needs.",
        "pricing.badge_24": "WITHIN 24 HOURS",
        "pricing.badge_48": "WITHIN 48 HOURS",
        "pricing.badge_ind": "CUSTOM",
        "pricing.popular": "Best Seller",
        "pkg.start.ideal": "Ideal for: Restaurants, cafes, craftsmen, and local services needing an instant online presence.",
        "pkg.start.f1": "Modern one-page website for mobile phones",
        "pkg.start.f2": "Important sections: About Us, Menu, Pricing, Contact",
        "pkg.start.f3": "Integration with Google Maps and social networks",
        "pkg.start.f4": "Basic technical SEO",
        "pkg.start.f5": "Project launch within 24 hours of receiving materials",
        "pkg.std.ideal": "Ideal for: Growing companies and freelancers who want to present multiple services or references in detail.",
        "pkg.std.f1": "Multi-page website (up to 5 separate subpages)",
        "pkg.std.f2": "Advanced inquiry or booking form",
        "pkg.std.f3": "Clear and logical navigation",
        "pkg.std.f4": "Deployment of analytical tools (Google Analytics)",
        "pkg.std.f5": "Complete realization and launch within 48 hours",
        "pkg.prem.price": "from 18 900 CZK",
        "pkg.prem.ideal": "Ideal for: Demanding clients who require unlimited content scope and premium interactive features.",
        "pkg.prem.f1": "Unlimited subpages with custom architecture",
        "pkg.prem.f2": "Advanced dynamic elements and JavaScript animations",
        "pkg.prem.f3": "Multilingual website versions (language switching)",
        "pkg.prem.f4": "Full use of modern technologies for speed",
        "pkg.prem.f5": "Extended technical support and priority adjustments",
        "pkg.btn_add": "Add to Cart",
        "addons.title": "Additional Services & Support",
        "addons.desc": "Customize the project to your needs.",
        "addon1.title": "Custom Domain (.cz, .com)",
        "addon1.desc": "Securing a premium domain for your brand for 1 year, including SSL certificate.",
        "addon2.title": "Monthly Management & Support",
        "addon2.desc": "Regular website backups, system updates, security, and minor content adjustments on request.",
        "addon3.title": "Visual Identity Creation",
        "addon3.desc": "Design of a minimalist logo and definition of corporate colors.",
        "addon4.title": "Hourly Rate (Extra Work)",
        "addon4.desc": "Work beyond the packages (website expansion, specific animations, and coding). Specify hours in the cart.",
        "addon.per_year": "/ year",
        "addon.per_month": "/ month",
        "addon.per_hour": "/ hr",
        "addon.btn_add": "Add",
        "test.title": "Test Payment to verify cards",
        "test.desc": "Costs only a small amount so you can try a real purchase on our website.",
        "footer.desc": "Express web presentation & marketing.",
        "footer.tax": "Prices are final. We are not VAT payers.",
        "footer.rights": "All rights reserved.",
        "cart.title": "Your Cart",
        "cart.empty": "Your cart is currently empty.",
        "cart.total": "Total:",
        "cart.tax_info": "We are not VAT payers. Prices are final.",
        "cart.checkout": "Proceed to Checkout",
        "cart.remove": "Remove",
        "modal.title": "Complete Your Order",
        "modal.name": "Full Name / Company",
        "modal.name_ph": "e.g., John Doe",
        "modal.msg": "Message / Your vision for the website",
        "modal.msg_ph": "You can describe what you expect from the website here...",
        "modal.submit": "Pay by Card",
        "modal.redirect": "Redirecting to payment...",
        "modal.empty_cart": "Your cart is empty.",
        "modal.error": "Sorry, an error occurred while initializing the payment: ",
        "success.title": "Payment successful!",
        "success.desc": "Thank you for your trust. We have received your order and will contact you shortly at the provided e-mail with the next steps to create your new website.",
        "success.btn": "Back to Homepage",
        "cancel.title": "Payment cancelled",
        "cancel.desc": "The payment was not completed. Your cart remains saved and you can return to your order at any time.",
        "cancel.btn": "Back to Order",
        "stats.projects": "Completed Projects",
        "stats.delivery": "Average Delivery Time",
        "stats.satisfaction": "Client Satisfaction",
        "stats.years": "Years of Experience",
        "feature.badge": "⚡ Our Advantage",
        "feature.speed_title": "Lightning Delivery",
        "feature.speed_desc": "Your website will be online within 24 hours of providing materials.",
        "feature.responsive_title": "Fully Responsive",
        "feature.responsive_desc": "Perfect display on all devices – mobile, tablet, desktop.",
        "feature.seo_title": "SEO Optimization",
        "feature.seo_desc": "Your website will be visible on Google thanks to modern SEO techniques.",
        "feature.support_title": "Support",
        "feature.support_desc": "Professional customer support and regular updates.",
        "process.badge": "🛠️ Process",
        "process.title": "How does it work?",
        "process.desc": "Simple 4 steps to your new website.",
        "process.s1_title": "Package Selection",
        "process.s1_desc": "Choose the package from our offer that best suits your needs and budget.",
        "process.s2_title": "Sending Materials",
        "process.s2_desc": "Send us texts, images, and your vision for your future website.",
        "process.s3_title": "Website Creation",
        "process.s3_desc": "Our team will immediately start working on your professional website.",
        "process.s4_title": "Launch",
        "process.s4_desc": "We will deploy your website online and hand over access. All within 24 hours!",
        "portfolio.badge": "🖼️ Portfolio",
        "portfolio.multi": "Multi-page",
        "portfolio.onepage": "One-page",
        "pricing.badge": "💎 Pricing",
        "addons.badge": "🔧 Addons",
        "testimonials.badge": "⭐ Reviews",
        "testimonials.title": "What our clients say",
        "testimonial.t1_text": "\"The website was finished in just one day, exactly as promised. Professional approach and modern design. Highly recommended!\"",
        "testimonial.t1_name": "Martin K.",
        "testimonial.t1_role": "Restaurant Owner",
        "testimonial.t2_text": "\"The fastest and most professional website I have ever ordered. Customers can finally find us online.\"",
        "testimonial.t2_name": "Jana P.",
        "testimonial.t2_role": "Cafe Owner",
        "testimonial.t3_text": "\"Great communication, they understood exactly what we needed. The website looks luxurious and works flawlessly even on mobile.\"",
        "testimonial.t3_name": "Petr V.",
        "testimonial.t3_role": "Freelancer",
        "faq.title": "Frequently Asked Questions",
        "faq.q1": "Will I really get the website within 24 hours?",
        "faq.a1": "Yes! Once we receive all necessary materials (texts, images, logo), we start working immediately. In the vast majority of cases, the website is finished and deployed online within 24 hours.",
        "faq.q2": "What if I am not satisfied with the website?",
        "faq.a2": "Your satisfaction is our priority. We perform free revisions and adjustments until you are completely satisfied with the result.",
        "faq.q3": "What materials will you need from me?",
        "faq.a3": "We just need the texts you want to display on the website, photos (products, interior, team), logo (if you have one), and your color preferences. We will gladly help with anything else.",
        "faq.q4": "Will I be able to edit the website myself?",
        "faq.a4": "Yes, we will give you full access. For more extensive edits, we recommend our monthly support or hourly rate.",
        "cta.title": "Ready for a new website?",
        "cta.desc": "Do not hesitate and order your professional website today. You will see results tomorrow!",
        "cta.btn": "Start Now",
        "footer.nav_title": "Navigation",
        "footer.contact_title": "Contact"
    }
};

// Products & Pricing Dictionary
const productPrices = {
    'pkg-start': { czk: { val: 5900, str: '5 900 Kč' }, eur: { val: 239, str: '239 €' }, usd: { val: 259, str: '$259' } },
    'pkg-standard': { czk: { val: 12500, str: '12 500 Kč' }, eur: { val: 499, str: '499 €' }, usd: { val: 549, str: '$549' } },
    'pkg-premium': { czk: { val: 18900, str: 'od 18 900 Kč' }, eur: { val: 749, str: 'from 749 €' }, usd: { val: 799, str: 'from $799' } },
    'add-domain': { czk: { val: 1800, str: '1 800 Kč' }, eur: { val: 75, str: '75 €' }, usd: { val: 85, str: '$85' } },
    'add-support': { czk: { val: 600, str: '600 Kč' }, eur: { val: 25, str: '25 €' }, usd: { val: 29, str: '$29' } },
    'add-identity': { czk: { val: 2500, str: '2 500 Kč' }, eur: { val: 99, str: '99 €' }, usd: { val: 109, str: '$109' } },
    'add-hourly': { czk: { val: 700, str: '700 Kč' }, eur: { val: 29, str: '29 €' }, usd: { val: 35, str: '$35' } },
    'svc-webapp': { czk: { val: 49900, str: 'od 49 900 Kč' }, eur: { val: 1990, str: 'from 1990 €' }, usd: { val: 2190, str: 'from $2190' } },
    'svc-ai': { czk: { val: 19900, str: 'od 19 900 Kč' }, eur: { val: 790, str: 'from 790 €' }, usd: { val: 890, str: 'from $890' } },
    'svc-automation': { czk: { val: 9900, str: 'od 9 900 Kč' }, eur: { val: 390, str: 'from 390 €' }, usd: { val: 440, str: 'from $440' } },
    'svc-chrome': { czk: { val: 14900, str: 'od 14 900 Kč' }, eur: { val: 590, str: 'from 590 €' }, usd: { val: 650, str: 'from $650' } }
};

// Current State
let currentLang = localStorage.getItem('venvioLang');
if (currentLang !== 'cs' && currentLang !== 'en') currentLang = 'cs';
let currentCurrency = localStorage.getItem('venvioCurr');
if (currentCurrency !== 'czk' && currentCurrency !== 'eur' && currentCurrency !== 'usd') currentCurrency = 'czk';
let discountMultiplier = 1;

// DOM Elements for Translation
const applyTranslations = () => {
    document.documentElement.lang = currentLang;
    // Translate text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.setAttribute('placeholder', translations[currentLang][key]);
        }
    });

    // Update prices in HTML based on currency
    document.querySelectorAll('[data-price-target]').forEach(el => {
        const key = el.getAttribute('data-price-target');
        if (productPrices[key] && productPrices[key][currentCurrency]) {
            let priceStr = productPrices[key][currentCurrency].str;
            if (currentLang === 'en' && currentCurrency === 'czk') {
                priceStr = priceStr.replace('Kč', 'CZK').replace('od ', 'from ');
            } else if (currentLang === 'cs' && currentCurrency !== 'czk') {
                priceStr = priceStr.replace('from ', 'od ');
            }
            el.innerText = priceStr;
        }
    });

    // Update active lang button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update active curr button
    document.querySelectorAll('.curr-btn').forEach(btn => {
        if (btn.getAttribute('data-curr') === currentCurrency) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

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

let cart = [];
try {
    cart = JSON.parse(localStorage.getItem('venvioCart')) || [];
} catch (e) {
    cart = [];
}

// DOM Elements
const cartBtn = document.getElementById('cart-btn');
const closeCart = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartCount = document.getElementById('cart-count');
const cartContainer = document.getElementById('cart-items-container');
const cartTotalPrice = document.getElementById('cart-total-price');
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const closeModal = document.getElementById('close-modal');
const checkoutForm = document.getElementById('checkout-form');
const applyDiscountBtn = document.getElementById('apply-discount-btn');
const discountCodeInput = document.getElementById('discount-code');
const discountMsg = document.getElementById('discount-msg');

if (applyDiscountBtn) {
    applyDiscountBtn.addEventListener('click', () => {
        const code = discountCodeInput.value.trim().toUpperCase();
        if (code === 'VENVIO10') {
            if (typeof window.currentUser !== 'undefined' && window.currentUser && window.currentUser.usedCodes.includes(code)) {
                discountMultiplier = 1;
                discountMsg.innerText = currentLang === 'en' ? 'Code already used!' : 'Tento kód jste již využili!';
                discountMsg.style.color = '#FF6B6B';
                discountMsg.style.display = 'block';
            } else {
                discountMultiplier = 0.9;
                discountMsg.innerText = currentLang === 'en' ? 'Discount 10% applied!' : 'Sleva 10% uplatněna!';
                discountMsg.style.color = '#00D2FF';
                discountMsg.style.display = 'block';
            }
            updateCartUI();
        } else {
            discountMultiplier = 1;
            discountMsg.innerText = currentLang === 'en' ? 'Invalid code.' : 'Neplatný kód.';
            discountMsg.style.color = '#FF6B6B';
            discountMsg.style.display = 'block';
            updateCartUI();
        }
    });
}

// Helper formatting based on currency
const formatPriceDynamic = (priceVal) => {
    if (currentCurrency === 'czk') return currentLang === 'en' ? priceVal + ' CZK' : priceVal + ' Kč';
    if (currentCurrency === 'eur') return priceVal + ' €';
    if (currentCurrency === 'usd') return '$' + priceVal;
    return priceVal;
};

// Update UI
const updateCartUI = () => {
    if (!cartCount) return; 
    cartCount.innerText = cart.length;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `<div class="empty-cart-msg">${translations[currentLang]['cart.empty']}</div>`;
        cartTotalPrice.innerText = '0';
        return;
    }

    let total = 0;
    cartContainer.innerHTML = '';
    
    cart.forEach((item, index) => {
        // Získání správné ceny podle měny
        const itemPrice = item.customPrice !== undefined ? item.customPrice : (productPrices[item.id] ? productPrices[item.id][currentCurrency].val : 0);
        total += itemPrice;
        
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <h5>${currentLang === 'en' && item.nameEn ? item.nameEn : item.nameCs}</h5>
                <p>${formatPriceDynamic(itemPrice)}</p>
            </div>
            <div class="cart-item-actions">
                <button class="remove-item" onclick="removeFromCart(${index})">${translations[currentLang]['cart.remove']}</button>
            </div>
        `;
        cartContainer.appendChild(div);
    });

    let finalTotal = total * discountMultiplier;
    if(typeof pointsUsed !== 'undefined' && pointsUsed > 0) {
        if (currentCurrency === 'eur') finalTotal -= Math.round(pointsUsed / 25);
        else if (currentCurrency === 'usd') finalTotal -= Math.round(pointsUsed / 22);
        else finalTotal -= pointsUsed;
        if (finalTotal < 0) finalTotal = 0;
    }
    
    if (discountMultiplier < 1) {
        cartTotalPrice.innerHTML = `<del style="font-size: 0.8rem; color: #94A3B8; margin-right: 8px;">${formatPriceDynamic(total)}</del><span style="color: #FF6B6B;">${formatPriceDynamic(finalTotal)}</span>`;
    } else {
        cartTotalPrice.innerText = formatPriceDynamic(finalTotal);
    }
    
    localStorage.setItem('venvioCart', JSON.stringify(cart));
};

const addToCart = (id, nameCs, nameEn) => {
    cart.push({ id, nameCs, nameEn });
    updateCartUI();
    openCart();
    // Show toast notification
    showToast();
};

// Remove from cart (Global function for onclick)
window.removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartUI();
};

// Open/Close Cart
const openCart = () => {
    if(!cartSidebar) return;
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeCartSidebar = () => {
    if(!cartSidebar) return;
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

// Event Listeners
if(cartBtn) cartBtn.addEventListener('click', openCart);
if(closeCart) closeCart.addEventListener('click', closeCartSidebar);
if(cartOverlay) cartOverlay.addEventListener('click', closeCartSidebar);

if(addToCartBtns) {
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const { id, nameCs, nameEn } = e.currentTarget.dataset;
            addToCart(id, nameCs, nameEn);
        });
    });
}

// Checkout logic
if(checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert(translations[currentLang]['modal.empty_cart']);
            return;
        }
        closeCartSidebar();
        checkoutModal.classList.add('active');
    });
}

if(closeModal) {
    closeModal.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });
}

if(checkoutForm) {
    checkoutForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Zabrání výchozímu odeslání stránky
        
        // Změna tlačítka na načítání
        const submitBtn = checkoutForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        
        // --- ANTI-SPAM OCHRANA ---
        // Zabránění uživateli odeslat více objednávek během 5 minut
        const lastOrderTime = localStorage.getItem('venvioLastOrderTime');
        if (lastOrderTime && (Date.now() - parseInt(lastOrderTime)) < 5 * 60 * 1000) {
            alert(currentLang === 'en' ? "Please wait 5 minutes before submitting another order." : "Z důvodu ochrany proti spamu můžete odeslat další objednávku až za 5 minut.");
            return;
        }

        submitBtn.innerText = translations[currentLang]['modal.redirect'] || "Odesílám...";
        submitBtn.disabled = true;
        
        // Sestavení informací z košíku
        let cartText = "PRÁZDNÝ KOŠÍK";
        if (cart.length > 0) {
            cartText = cart.map(item => {
                const price = item.customPrice !== undefined ? item.customPrice : (productPrices[item.id] ? productPrices[item.id][currentCurrency].val : 0);
                const name = currentLang === 'en' && item.nameEn ? item.nameEn : item.nameCs;
                const details = currentLang === 'en' && item.detailsEn ? ' ' + item.detailsEn : (item.detailsCs ? ' ' + item.detailsCs : '');
                return `${name}${details} (${formatPriceDynamic(price)})`;
            }).join(', ');
            let totalString = document.getElementById('cart-total-price').innerText;
            if (discountMultiplier < 1) {
                totalString += " (Sleva 10% s kódem VENVIO10 uplatněna)";
            }
            cartText += ` | CELKEM: ${totalString}`;
        }
        
        const formData = new FormData(checkoutForm);
        const requestData = {
              Jméno: formData.get('Jmeno'),
              Email: formData.get('Email'),
              email: formData.get('Email'),
              Zpráva: formData.get('Zprava'),
              Objednávka: cartText,
              _subject: "Nová objednávka webu Venvio!",
              _autoresponse: currentLang === 'en' 
                  ? "Thank you for your custom order! We have successfully received your request and will contact you immediately. \n\nBest regards, \nVenvio Team" 
                  : "Děkujeme za vaši objednávku! Váš požadavek jsme úspěšně přijali a brzy se vám ozveme. \n\nS pozdravem, \nTým Venvio"
          };

        try {
            // Odeslání přes AJAX
            const response = await fetch("https://formsubmit.co/ajax/info@venvio.dev", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(requestData)
            });
            
            if (response.ok) {
                // Zapsat čas úspěšné objednávky pro anti-spam (5 minut blokace)
                localStorage.setItem('venvioLastOrderTime', Date.now().toString());
                
                // SAVE ORDER TO DASHBOARD IF LOGGED IN
                if (window.currentUser) {
                    let allUsers = JSON.parse(localStorage.getItem('venvioAllUsers')) || {};
                    if (!allUsers[window.currentUser.email]) allUsers[window.currentUser.email] = { points: 500, usedCodes: [], orders: [] };
                    if (!allUsers[window.currentUser.email].orders) allUsers[window.currentUser.email].orders = [];
                    
                    const date = new Date().toLocaleDateString(currentLang === 'en' ? 'en-US' : 'cs-CZ');
                    const itemsStr = cart.map(i => i.title).join(', ');
                    
                    allUsers[window.currentUser.email].orders.push({
                        date: date,
                        items: itemsStr,
                        total: total
                    });
                    
                    localStorage.setItem('venvioAllUsers', JSON.stringify(allUsers));
                }
                
                // Vymažeme košík
                localStorage.removeItem('venvioCart');
                // Přesměrujeme klienta přímo na děkovací stránku s bankou
                window.location.href = "success.html";
            } else {
                throw new Error("Nepodařilo se odeslat.");
            }
        } catch (error) {
            console.error("Chyba:", error);
            alert(currentLang === 'en' ? "Sorry, an error occurred while submitting the order. Please try again." : "Omlouváme se, došlo k chybě při odesílání objednávky. Zkuste to prosím znovu.");
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }
    });
}


translations.cs['blog.title'] = "Případové studie & Tipy";
translations.en['blog.title'] = "Case Studies & Tips";
translations.cs['blog.desc'] = "Zajímavosti ze světa vývoje webů a online podnikání.";
translations.en['blog.desc'] = "Insights from web development and online business.";
translations.cs['blog.post1.title'] = "Jak moderní design zvyšuje konverze o 40%";
translations.en['blog.post1.title'] = "How modern design increases conversions by 40%";
translations.cs['blog.post1.desc'] = "Detailní pohled na to, proč vaši zákazníci odcházejí ke konkurenci kvůli zastaralému vzhledu a pomalému načítání.";
translations.en['blog.post1.desc'] = "A detailed look at why your customers leave for competitors due to outdated design and slow loading.";
translations.cs['blog.post2.title'] = "Proč se vyplatí investovat do rychlosti webu?";
translations.en['blog.post2.title'] = "Why invest in website speed?";
translations.cs['blog.post2.desc'] = "Každá sekunda načítání navíc vás připravuje o 7 % tržeb. Zjistěte, jak optimalizovat vaše stránky pro vyhledávače.";
translations.en['blog.post2.desc'] = "Every extra second of loading costs you 7% of revenue. Find out how to optimize your pages for search engines.";
translations.cs['blog.post3.title'] = "5 trendů ve web designu pro rok 2026";
translations.en['blog.post3.title'] = "5 web design trends for 2026";
translations.cs['blog.post3.desc'] = "Glassmorphism, dark mode, mikto-animace. Přehled trendů, které dominují a které by váš web neměl postrádat.";
translations.en['blog.post3.desc'] = "Glassmorphism, dark mode, micro-animations. Overview of trends that dominate and which your website shouldn't miss.";
translations.cs['blog.read_more'] = "Číst více";
translations.en['blog.read_more'] = "Read more";
translations.cs['dash.orders'] = "Historie objednávek";
translations.en['dash.orders'] = "Order History";
translations.cs['dash.no_orders'] = "Zatím nemáte žádné objednávky.";
translations.en['dash.no_orders'] = "You have no orders yet.";

// Translations Dictionary (update modal submit text)
translations.cs['modal.submit'] = "Odeslat objednávku";
translations.en['modal.submit'] = "Submit Order";
translations.cs['modal.redirect'] = "Odesílám...";
translations.en['modal.redirect'] = "Sending...";

// Translation additions for new elements
translations.cs['modal.phone'] = 'Telefon (volitelné)';
translations.en['modal.phone'] = 'Phone (optional)';
translations.cs['toast.added'] = 'Přidáno do košíku!';
translations.en['toast.added'] = 'Added to cart!';
translations.cs['floating.contact'] = 'Napište nám';
translations.en['floating.contact'] = 'Contact Us';
translations.cs['pricing.popular_ribbon'] = 'Doporučujeme';
translations.en['pricing.popular_ribbon'] = 'Best Value';

// Translation additions for new Služby
translations.cs['nav.services'] = 'Služby';
translations.en['nav.services'] = 'Services';
translations.cs['services.badge'] = '💎 Premium';
translations.en['services.badge'] = '💎 Premium';
translations.cs['services.title'] = 'Softwarové služby na míru';
translations.en['services.title'] = 'Custom Software Services';
translations.cs['services.desc'] = 'Od jednoduchých webů po komplexní interní systémy a umělou inteligenci.';
translations.en['services.desc'] = 'From simple websites to complex internal systems and AI.';

translations.cs['svc1.title'] = 'Webové Aplikace & SaaS';
translations.en['svc1.title'] = 'Web Applications & SaaS';
translations.cs['svc1.desc'] = 'Vývoj plnohodnotných aplikací (React, Node.js), rezervačních systémů a klientských portálů na míru.';
translations.en['svc1.desc'] = 'Development of full-featured applications (React, Node.js), booking systems, and custom client portals.';
translations.cs['svc1.price'] = 'Od 49 900 Kč';
translations.en['svc1.price'] = 'From 49,900 CZK';

translations.cs['svc2.title'] = 'Inteligentní AI Chatboti';
translations.en['svc2.title'] = 'Intelligent AI Chatbots';
translations.cs['svc2.desc'] = 'Chytrý asistent napojený na ChatGPT, který zná vaše produkty, odpovídá 24/7 a zvyšuje prodeje.';
translations.en['svc2.desc'] = 'A smart assistant connected to ChatGPT that knows your products, replies 24/7, and boosts sales.';
translations.cs['svc2.price'] = 'Od 19 900 Kč';
translations.en['svc2.price'] = 'From 19,900 CZK';

translations.cs['svc3.title'] = 'Automatizace Procesů';
translations.en['svc3.title'] = 'Process Automation';
translations.cs['svc3.desc'] = 'Propojení systémů přes API (účetnictví, e-shopy). Zbavíme vás rutinní ruční práce a ušetříme čas.';
translations.en['svc3.desc'] = 'API integrations between systems (accounting, e-shops). We eliminate routine manual work and save time.';
translations.cs['svc3.price'] = 'Od 9 900 Kč';
translations.en['svc3.price'] = 'From 9,900 CZK';

translations.cs['svc4.title'] = 'Chrome Doplňky';
translations.en['svc4.title'] = 'Chrome Extensions';
translations.cs['svc4.desc'] = 'Vývoj privátních rozšíření do prohlížeče pro usnadnění práce vašich obchodníků a zaměstnanců.';
translations.en['svc4.desc'] = 'Development of private browser extensions to streamline the work of your sales reps and employees.';
translations.cs['svc4.price'] = 'Od 14 900 Kč';
translations.en['svc4.price'] = 'From 14,900 CZK';

// Initialize Language & Cart
applyTranslations();

// Scroll Animations (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

// === NEW INTERACTIVE FEATURES ===

// Floating Particles
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 3 + 1) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particlesContainer.appendChild(particle);
    }
}

// Navbar scroll effect + smart hide/show
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (navbar) {
                const currentScroll = window.scrollY;
                // Scrolled state
                if (currentScroll > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                    navbar.classList.remove('nav-hidden');
                }
                // Hide on scroll down, show on scroll up
                if (currentScroll > lastScrollY && currentScroll > 300) {
                    navbar.classList.add('nav-hidden');
                } else {
                    navbar.classList.remove('nav-hidden');
                }
                lastScrollY = currentScroll;
            }

            // Back to top button visibility
            const backToTop = document.getElementById('back-to-top');
            if (backToTop) {
                if (window.scrollY > 600) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            }

            ticking = false;
        });
        ticking = true;
    }
});

// Animated Stats Counter
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'));
            let current = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                el.innerText = Math.floor(current);
            }, 25);
            statsObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });
statNumbers.forEach(el => statsObserver.observe(el));

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    }
});

// Toast Notification
let toastTimeout;
window.showToast = (customMsg) => {
    const toast = document.getElementById('toast');
    if(toast) {
        if (customMsg) {
            const msgEl = document.getElementById('toast-message');
            if (msgEl) msgEl.innerText = customMsg;
        }
        toast.classList.remove('show');
        void toast.offsetWidth;
        toast.classList.add('show');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
            const msgEl = document.getElementById('toast-message');
            if (msgEl) msgEl.innerText = translations[currentLang]['toast.added'] || 'Přidáno do košíku!';
        }, 3000);
    }
};

// Smooth Anchor Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Close mobile menu if open
        const navLinks = document.getElementById('nav-links');
        if (navLinks) navLinks.classList.remove('mobile-open');
    });
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-menu-toggle');
const navLinksEl = document.getElementById('nav-links');
if (mobileToggle && navLinksEl) {
    mobileToggle.addEventListener('click', () => {
        navLinksEl.classList.toggle('mobile-open');
    });
}

// === PREMIUM FEATURES ===

// Preloader
document.body.classList.add('loading');
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) preloader.classList.add('hidden');
        document.body.classList.remove('loading');
    }, 1400);
});

// Cursor Glow (desktop only)
const cursorGlow = document.getElementById('cursor-glow');
if (cursorGlow && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

// Back to Top
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// === SCROLL PROGRESS BAR ===
const scrollProgress = document.getElementById('scroll-progress');
if (scrollProgress) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }, { passive: true });
}

// === PARALLAX HERO ===
const heroContent = document.querySelector('.hero-content');
const heroBgGlow = document.querySelector('.hero-bg-glow');
if (heroContent && window.matchMedia('(hover: hover)').matches) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrollY / (window.innerHeight * 0.8));
            if (heroBgGlow) {
                heroBgGlow.style.transform = `translate(-50%, -50%) scale(${1 + scrollY * 0.001})`;
            }
        }
    }, { passive: true });
}

// === ACTIVE NAV LINK HIGHLIGHTING ===
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinksAll.forEach(link => {
                link.classList.remove('nav-active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('nav-active');
                }
            });
        }
    });
}, { threshold: 0.3 });
sections.forEach(s => navObserver.observe(s));

// === OPTION B UPGRADES ===

// 1. Theme Toggle (Light/Dark Mode)
const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
const currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggles.forEach(t => {
        if(t) t.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    });
}

themeToggles.forEach(toggleBtn => {
    if (!toggleBtn) return;
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        let theme = 'dark';
        if (document.body.classList.contains('light-mode')) {
            theme = 'light';
            themeToggles.forEach(t => t.querySelector('i').classList.replace('fa-moon', 'fa-sun'));
        } else {
            themeToggles.forEach(t => t.querySelector('i').classList.replace('fa-sun', 'fa-moon'));
        }
        localStorage.setItem('theme', theme);
    });
});

// 2. Dynamic Hero Glow Tracking
const heroHeader = document.querySelector('.hero');
const heroGlow1 = document.querySelector('.hero-bg-glow');
const heroGlow2 = document.querySelector('.hero-bg-glow-2');

if (heroHeader && heroGlow1 && heroGlow2 && window.matchMedia('(hover: hover)').matches) {
    heroHeader.addEventListener('mousemove', (e) => {
        const rect = heroHeader.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Move glow 1 towards mouse
        heroGlow1.style.left = `${x}px`;
        heroGlow1.style.top = `${y}px`;
        
        // Move glow 2 in opposite direction for parallax depth
        heroGlow2.style.left = `${rect.width - x}px`;
        heroGlow2.style.top = `${rect.height - y}px`;
    });
}

// End of script


// Preloader Logic
const hidePreloader = () => {
    const preloader = document.getElementById('preloader');
    if(preloader && !preloader.classList.contains('fade-out')) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            document.body.classList.remove('loading');
            preloader.style.display = 'none';
        }, 800);
    }
};

if (document.readyState === 'complete') {
    setTimeout(hidePreloader, 200);
} else {
    window.addEventListener('load', () => setTimeout(hidePreloader, 200));
    // Fallback in case load event gets stuck (e.g., slow image or ad blocker)
    setTimeout(hidePreloader, 2000);
}


// Easter Egg
window.revealSecret = () => {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toast-message');
    if(toast && msg) {
        msg.innerText = currentLang === 'en' ? 'Secret found! Promo code: VENVIO10' : 'Tajn� sleva 10%! K�d: VENVIO10';
        toast.classList.add('show');
        setTimeout(() => { 
            toast.classList.remove('show'); 
            setTimeout(() => applyTranslations(), 500); // restore original text
        }, 5000);
    }
};


// Calculator Logic
const calcPages = document.getElementById('calc-pages');
const calcPagesVal = document.getElementById('calc-pages-val');
const calcTotal = document.getElementById('calc-total');
const calcCheckboxes = document.querySelectorAll('.calc-checkboxes input');

const updateCalculator = () => {
    if(!calcPages || !calcTotal) return;
    let basePrice = 5900;
    let pages = parseInt(calcPages.value);
    calcPagesVal.innerText = pages;
    let total = basePrice + ((pages - 1) * 1500);
    calcCheckboxes.forEach(cb => {
        if(cb.checked) total += parseInt(cb.value);
    });
    if(currentCurrency === 'eur') total = Math.round(total / 25);
    if(currentCurrency === 'usd') total = Math.round(total / 22);
    calcTotal.innerText = currentLang === 'en' ? total.toLocaleString() : total.toLocaleString('cs-CZ');
};

if(calcPages) calcPages.addEventListener('input', updateCalculator);
if(calcCheckboxes) calcCheckboxes.forEach(cb => cb.addEventListener('change', updateCalculator));

// Re-run calc on lang/currency change inside applyTranslations


// Calc Translations
translations.cs['calc.badge'] = '💡 Odhad ceny';
translations.en['calc.badge'] = '💡 Price Estimate';
translations.cs['calc.title'] = 'Interaktivní� kalkula�ka';
translations.en['calc.title'] = 'Interactive Calculator';
translations.cs['calc.desc'] = 'Spo��tejte si hrubý� odhad va�eho projektu na m�ru.';
translations.en['calc.desc'] = 'Calculate a rough estimate for your custom project.';
translations.cs['calc.pages'] = 'Po�et str�nek/podstr�nek: ';
translations.en['calc.pages'] = 'Number of pages: ';
translations.cs['calc.opt_cms'] = 'Vlastn� Administrace (CMS)';
translations.en['calc.opt_cms'] = 'Custom Admin (CMS)';
translations.cs['calc.opt_chat'] = 'AI Chatbot Asistent';
translations.en['calc.opt_chat'] = 'AI Chatbot Assistant';
translations.cs['calc.opt_eshop'] = 'E-shop Modul (Platby)';
translations.en['calc.opt_eshop'] = 'E-commerce Module';
translations.cs['calc.total_est'] = 'Odhadovan� cena:';
translations.en['calc.total_est'] = 'Estimated Price:';
translations.cs['fab.tooltip'] = 'Napi�te n�m!';
translations.en['fab.tooltip'] = 'Message Us!';


// Calculator ETA and Cart Logic
let currentCalcTotalRaw = 0;
const calcEtaVal = document.getElementById('calc-eta-val');
const calcAddToCartBtn = document.getElementById('calc-add-to-cart');

const calculateEta = (days) => {
    if (currentLang === 'en') {
        if (days === 1) return 'under 24 hours';
        if (days === 2) return 'under 48 hours';
        if (days <= 6) return `${days} days`;
        if (days <= 10) return '1-2 weeks';
        if (days <= 14) return '2 weeks';
        return `${Math.ceil(days / 7)} weeks`;
    } else {
        if (days === 1) return 'do 24 hodin!';
        if (days === 2) return 'do 48 hodin!';
        if (days > 2 && days <= 4) return `${days} dny`;
        if (days > 4 && days <= 6) return `${days} dní`;
        if (days > 6 && days <= 10) return '1-2 týdny';
        if (days > 10 && days <= 14) return '2 týdny';
        let weeks = Math.ceil(days / 7);
        if (weeks >= 2 && weeks <= 4) return `${weeks} týdny`;
        return `${weeks} týdnů`;
    }
};

const updateCalculatorWithEta = () => {
    const calcPagesEl = document.getElementById('calc-pages');
    const calcTotalEl = document.getElementById('calc-total');
    if(!calcPagesEl || !calcTotalEl) return;
    
    let pages = parseInt(calcPagesEl.value);
    document.getElementById('calc-pages-val').innerText = pages;
    
    let basePrice = 0;
    let days = 0;
    
    if (pages === 1) {
        basePrice = 5900;
        days = 1;
    } else if (pages <= 5) {
        basePrice = 12500;
        days = 2;
    } else {
        basePrice = 18900 + ((pages - 6) * 1500);
        days = 5 + (pages - 5);
    }
    
    let total = basePrice;
    
    document.querySelectorAll('.calc-checkboxes input').forEach(cb => {
        if(cb.checked) {
            total += parseInt(cb.value);
            if(cb.id === 'calc-cms') days += 3;
            if(cb.id === 'calc-eshop') days += 7;
            if(cb.id === 'calc-chat') days += 2;
        }
    });
    currentCalcTotalRaw = total;
    
    if(calcEtaVal) {
        calcEtaVal.innerText = calculateEta(days);
    }
    
    if(currentCurrency === 'eur') total = Math.round(total / 25);
    if(currentCurrency === 'usd') total = Math.round(total / 22);
    calcTotalEl.innerText = currentLang === 'en' ? total.toLocaleString() : total.toLocaleString('cs-CZ');
};

if(document.getElementById('calc-pages')) {
    document.getElementById('calc-pages').addEventListener('input', updateCalculatorWithEta);
}
document.querySelectorAll('.calc-checkboxes input').forEach(cb => cb.addEventListener('change', updateCalculatorWithEta));

if(calcAddToCartBtn) {
    calcAddToCartBtn.addEventListener('click', () => {
        cart.push({
            id: 'pkg-calc',
            customPrice: currentCalcTotalRaw,
            nameCs: 'Projekt na míru (Kalkulačka)',
            nameEn: 'Custom Project (Calculator)'
        });
        updateCartUI();
        showToast(currentLang === 'en' ? 'Added to cart!' : 'Přidáno do košíku!');
        const cartSidebar = document.getElementById('cart-sidebar');
        const cartOverlay = document.getElementById('cart-overlay');
        if(cartSidebar) cartSidebar.classList.add('active');
        if(cartOverlay) cartOverlay.classList.add('active');
    });
}

translations.cs['calc.eta'] = 'Odhadovaný čas dodání:';
translations.en['calc.eta'] = 'Estimated Delivery Time:';
translations.cs['calc.add_to_cart'] = '<i class="fa-solid fa-cart-plus"></i> Přidat do košíku';
translations.en['calc.add_to_cart'] = '<i class="fa-solid fa-cart-plus"></i> Add to Cart';

setTimeout(updateCalculatorWithEta, 100);

// ==========================================
// Auth & Points System
// ==========================================
// ==========================================
// Auth & Points System (with Password & Social Login)
// ==========================================
window.window.currentUser = null; // Managed by Firebase

const authBtn = document.getElementById('auth-btn');
const authIcon = document.getElementById('auth-icon');
const authModal = document.getElementById('auth-modal');
const closeAuthModal = document.getElementById('close-auth-modal');
const authBodyLogin = document.getElementById('auth-body-login');
const authBodyProfile = document.getElementById('auth-body-profile');
const authForm = document.getElementById('auth-form');
const authProfileName = document.getElementById('auth-profile-name');
const authProfileEmail = document.getElementById('auth-profile-email');
const authProfilePoints = document.getElementById('auth-profile-points');
const authLogoutBtn = document.getElementById('auth-logout-btn');

const cartPointsSection = document.getElementById('cart-points-section');
const cartAvailPoints = document.getElementById('cart-avail-points');
const applyPointsBtn = document.getElementById('apply-points-btn');
const pointsMsg = document.getElementById('points-msg');

window.authMode = "login";
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const groupName = document.getElementById('group-name');
const groupPasswordConfirm = document.getElementById('group-password-confirm');
const authDesc = document.getElementById('auth-desc');
const authSubmitBtn = document.getElementById('auth-submit-btn');
const authError = document.getElementById('auth-error');
const togglePasswordBtn = document.getElementById('toggle-password');

const btnGoogle = document.getElementById('btn-google');
const btnFacebook = document.getElementById('btn-facebook');

// Simple hash function for passwords (client-side only)
const simpleHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return 'h' + Math.abs(hash).toString(36);
};

const showAuthError = (msg) => {
    if (authError) {
        authError.innerText = msg;
        authError.style.display = 'block';
        setTimeout(() => { authError.style.display = 'none'; }, 4000);
    }
};

// Toggle password visibility
if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
        const pwInput = document.getElementById('auth-password');
        const icon = togglePasswordBtn.querySelector('i');
        if (pwInput.type === 'password') {
            pwInput.type = 'text';
            icon.className = 'fa-regular fa-eye-slash';
        } else {
            pwInput.type = 'password';
            icon.className = 'fa-regular fa-eye';
        }
    });
}

window.updateAuthModeUI = () => {
    if (!tabLogin) return;
    if (authError) authError.style.display = 'none';
    const authOptions = document.getElementById('auth-options');
    
    if (window.authMode === "login") {
        tabLogin.style.borderBottomColor = 'var(--color-primary)';
        tabLogin.style.color = '#fff';
        tabRegister.style.borderBottomColor = 'transparent';
        tabRegister.style.color = 'var(--color-text-muted)';
        if(groupName) groupName.style.display = 'none';
        if(groupPasswordConfirm) groupPasswordConfirm.style.display = 'none';
        document.getElementById('auth-name').removeAttribute('required');
        document.getElementById('auth-password-confirm').removeAttribute('required');
        authDesc.innerText = currentLang === 'en' ? 'Log in to your account to use loyalty discounts.' : 'Přihlaste se ke svému účtu pro využití věrnostních slev.';
        authSubmitBtn.innerText = currentLang === 'en' ? 'Log In' : 'Přihlásit se';
        if(authOptions) authOptions.style.display = 'flex';
    } else {
        tabRegister.style.borderBottomColor = 'var(--color-primary)';
        tabRegister.style.color = '#fff';
        tabLogin.style.borderBottomColor = 'transparent';
        tabLogin.style.color = 'var(--color-text-muted)';
        groupName.style.display = 'block';
        groupPasswordConfirm.style.display = 'block';
        document.getElementById('auth-name').setAttribute('required', 'true');
        document.getElementById('auth-password-confirm').setAttribute('required', 'true');
        authDesc.innerText = currentLang === 'en' ? 'Create an account and earn Venvio Coins for discounts on your next order.' : 'Vytvořte si účet a sbírejte Venvio Coins pro slevy na příští objednávky.';
        authSubmitBtn.innerText = currentLang === 'en' ? 'Create Account' : 'Vytvořit účet';
        if(authOptions) authOptions.style.display = 'none';
    }
};

if (tabLogin) tabLogin.addEventListener('click', () => { window.authMode = "login"; updateAuthModeUI(); });
if (tabRegister) tabRegister.addEventListener('click', () => { window.authMode = "register"; updateAuthModeUI(); });

// Social Login — opens a mini-form inside the modal instead of ugly prompt()




window.updateAuthUI = () => {
    if (window.currentUser) {
        if(authIcon) {
            authIcon.className = 'fa-solid fa-circle-user';
            authIcon.style.color = 'var(--color-primary)';
        }
        if(cartPointsSection) {
            cartPointsSection.style.display = 'block';
            cartAvailPoints.innerText = window.currentUser.points;
            if(window.currentUser.points > 0) {
                applyPointsBtn.style.display = 'block';
            } else {
                applyPointsBtn.style.display = 'none';
            }
        }
    } else {
        if(authIcon) {
            authIcon.className = 'fa-regular fa-user';
            authIcon.style.color = 'var(--color-text)';
        }
        if(cartPointsSection) {
            cartPointsSection.style.display = 'none';
        }
        pointsUsed = 0;
        if(pointsMsg) pointsMsg.style.display = 'none';
        if(applyPointsBtn) applyPointsBtn.style.display = 'block';
    }
    if(typeof updateCartUI === 'function') updateCartUI();
};

if (authBtn) {
    authBtn.addEventListener('click', () => {
        authModal.classList.add('active');
        if (window.currentUser) {
            authBodyLogin.style.display = 'none';
            authBodyProfile.style.display = 'block';
            authProfileName.innerText = window.currentUser.name;
            authProfileEmail.innerText = window.currentUser.email;
            authProfilePoints.innerText = window.currentUser.points;
            
            // Populate orders
            const ordersList = document.getElementById('dashboard-orders-list');
            if (ordersList) {
                let allUsers = JSON.parse(localStorage.getItem('venvioAllUsers')) || {};
                let userOrders = [];
                if (allUsers[window.currentUser.email] && allUsers[window.currentUser.email].orders) {
                    userOrders = allUsers[window.currentUser.email].orders;
                }
                
                if (userOrders.length === 0) {
                    ordersList.innerHTML = `<p style="color: var(--color-text-muted); font-style: italic; text-align: center; margin-top: 1rem;" data-i18n="dash.no_orders">${currentLang === 'en' ? 'You have no orders yet.' : 'Zatím nemáte žádné objednávky.'}</p>`;
                } else {
                    let html = '';
                    userOrders.forEach(o => {
                        html += `
                        <div style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 1rem; margin-bottom: 0.5rem; display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <div style="font-weight: 600; color: #fff;">${o.date}</div>
                                <div style="color: var(--color-text-muted); font-size: 0.8rem; margin-top: 4px;">${o.items}</div>
                            </div>
                            <div style="background: rgba(0, 210, 255, 0.1); color: var(--color-primary); padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 800;">
                                ${currentLang === 'en' ? 'PROCESSING' : 'VE ZPRACOVÁNÍ'}
                            </div>
                        </div>`;
                    });
                    ordersList.innerHTML = html;
                }
            }
        } else {
            window.authMode = "login";
            updateAuthModeUI();
            authBodyLogin.style.display = 'block';
            authBodyProfile.style.display = 'none';
        }
    });
}

if (closeAuthModal) closeAuthModal.addEventListener('click', () => authModal.classList.remove('active'));



if (applyPointsBtn) {
    applyPointsBtn.addEventListener('click', () => {
        if (window.currentUser && window.currentUser.points > 0) {
            pointsUsed = window.currentUser.points;
            applyPointsBtn.style.display = 'none';
            let formattedPoints = pointsUsed;
            if (currentCurrency === 'eur') formattedPoints = Math.round(pointsUsed / 25) + ' €';
            else if (currentCurrency === 'usd') formattedPoints = '$' + Math.round(pointsUsed / 22);
            else formattedPoints += ' Kč';
            
            pointsMsg.innerText = currentLang === 'en' ? `Applied ${formattedPoints} discount!` : `Uplatněna sleva ${formattedPoints}!`;
            pointsMsg.style.display = 'block';
            updateCartUI();
        }
    });
}

// Checkout button logic override to save used code & points
const checkoutBtnRef = document.getElementById('checkout-btn');
if (checkoutBtnRef) {
    const newCheckoutBtn = checkoutBtnRef.cloneNode(true);
    checkoutBtnRef.parentNode.replaceChild(newCheckoutBtn, checkoutBtnRef);
    
    newCheckoutBtn.addEventListener('click', async () => {
        if(cart.length === 0) {
            window.showToast(currentLang === 'en' ? 'Cart is empty.' : 'Košík je prázdný.');
            return;
        }
        
        if (!window.currentUser) {
            alert(currentLang === 'en' ? "You must be logged in to make a purchase." : "Pro dokončení nákupu se musíte přihlásit.");
            const authModal = document.getElementById('auth-modal');
            if (authModal) authModal.classList.add('active');
            return;
        }
        
        // Dynamicky obnovíme stav uživatele z Firebase (pokud zrovna potvrdil e-mail v jiné záložce)
        if (!window.currentUser.emailVerified && window.firebaseAuth && window.firebaseAuth.currentUser) {
            try {
                const checkoutSpinner = document.getElementById('preloader');
                if(checkoutSpinner) checkoutSpinner.classList.remove('fade-out'); // Zobrazíme na chvíli načítání
                
                await window.firebaseAuth.currentUser.reload();
                window.currentUser.emailVerified = window.firebaseAuth.currentUser.emailVerified;
                
                if(checkoutSpinner) checkoutSpinner.classList.add('fade-out');
            } catch (e) {
                console.error("Chyba při obnově uživatele:", e);
            }
        }
        
        if (!window.currentUser.emailVerified) {
            alert(currentLang === 'en' ? "Please verify your email address before making a purchase. Check your inbox (or SPAM folder)." : "Před nákupem prosím ověřte svůj e-mail (zkontrolujte doručenou poštu i složku SPAM). Po potvrzení klikněte znovu na Pokračovat.");
            return;
        }
        
        // Save used discount code
        if (window.currentUser && discountMultiplier < 1) {
            const code = document.getElementById('discount-code') ? document.getElementById('discount-code').value.trim().toUpperCase() : '';
            if (code && !window.currentUser.usedCodes.includes(code)) {
                window.currentUser.usedCodes.push(code);
            }
        }
        
        // Deduct points
        if (window.currentUser && pointsUsed > 0) {
            window.currentUser.points -= pointsUsed;
            pointsUsed = 0;
            let allUsers = JSON.parse(localStorage.getItem('venvioAllUsers')) || {};
            allUsers[window.currentUser.email] = window.currentUser;
            localStorage.setItem('venvioAllUsers', JSON.stringify(allUsers));
            localStorage.setItem('venvioUser', JSON.stringify(window.currentUser));
        }
        
        // Pre-fill email and make it readonly
        const checkoutEmail = document.querySelector('#checkout-form input[name="Email"]');
        if (checkoutEmail && window.currentUser) {
            checkoutEmail.value = window.currentUser.email;
            checkoutEmail.readOnly = true;
            checkoutEmail.style.opacity = '0.7';
            checkoutEmail.style.cursor = 'not-allowed';
        }
        
        const cModal = document.getElementById('checkout-modal');
        if(cModal) cModal.classList.add('active');
        updateAuthUI();
    });
}

// Auth UI Init
setTimeout(updateAuthUI, 100);

// Translation keys
translations.cs['auth.tab_login'] = 'Přihlásit se';
translations.en['auth.tab_login'] = 'Log In';
translations.cs['auth.tab_register'] = 'Zaregistrovat';
translations.en['auth.tab_register'] = 'Register';
translations.cs['auth.desc_login'] = 'Přihlaste se ke svému účtu pro využití věrnostních slev.';
translations.en['auth.desc_login'] = 'Log in to your account to use loyalty discounts.';
translations.cs['auth.submit_login'] = 'Přihlásit se';
translations.en['auth.submit_login'] = 'Log In';
translations.cs['auth.title'] = 'Klientská sekce';
translations.en['auth.title'] = 'Client Area';
translations.cs['auth.name'] = 'Jméno';
translations.en['auth.name'] = 'Name';
translations.cs['auth.email'] = 'E-mail';
translations.en['auth.email'] = 'Email';
translations.cs['auth.points_label'] = 'Venvio Coins';
translations.en['auth.points_label'] = 'Venvio Coins';
translations.cs['auth.points_val'] = '1 bod = 1 Kč sleva';
translations.en['auth.points_val'] = '1 coin = 1 CZK discount';
translations.cs['auth.logout'] = 'Odhlásit se';
translations.en['auth.logout'] = 'Log Out';
translations.cs['auth.remember'] = 'Zapamatovat si mě';
translations.en['auth.remember'] = 'Remember me';
translations.cs['auth.forgot_pwd'] = 'Zapomněli jste heslo?';
translations.en['auth.forgot_pwd'] = 'Forgot password?';
translations.cs['auth.or'] = 'Nebo';
translations.en['auth.or'] = 'Or';
translations.cs['auth.google'] = 'Pokračovat přes Google';
translations.en['auth.google'] = 'Continue with Google';
translations.cs['auth.facebook'] = 'Pokračovat přes Facebook';
translations.en['auth.facebook'] = 'Continue with Facebook';
translations.cs['auth.password'] = 'Heslo';
translations.en['auth.password'] = 'Password';
translations.cs['auth.password_ph'] = 'Vaše heslo';
translations.en['auth.password_ph'] = 'Your password';
translations.cs['auth.password_confirm'] = 'Heslo znovu';
translations.en['auth.password_confirm'] = 'Confirm password';
translations.cs['auth.password_confirm_ph'] = 'Zopakujte heslo';
translations.en['auth.password_confirm_ph'] = 'Repeat your password';
translations.cs['auth.points_info'] = 'Za každou dokončenou objednávku získáte 1000 Venvio Coins. Body připisujeme po ověření.';
translations.en['auth.points_info'] = 'You earn 1000 Venvio Coins for every completed order. Points are assigned after verification.';
translations.cs['auth.name'] = 'Jméno';
translations.en['auth.name'] = 'Name';
translations.cs['auth.email'] = 'E-mail';
translations.en['auth.email'] = 'Email';
translations.cs['auth.points_label'] = 'Venvio Coins';
translations.en['auth.points_label'] = 'Venvio Coins';
translations.cs['auth.points_val'] = '1 bod = 1 Kč sleva';
translations.en['auth.points_val'] = '1 coin = 1 CZK discount';
translations.cs['auth.logout'] = 'Odhlásit se';
translations.en['auth.logout'] = 'Log out';
translations.cs['cart.points_avail'] = 'Máte k dispozici:';
translations.en['cart.points_avail'] = 'You have:';
translations.cs['cart.use_points'] = 'Uplatnit body jako slevu';
translations.en['cart.use_points'] = 'Use coins for discount';

// Sync cart across multiple tabs
window.addEventListener('storage', (e) => {
    if (e.key === 'venvioCart') {
        try {
            const newCart = JSON.parse(e.newValue) || [];
            cart.length = 0;
            cart.push(...newCart);
            updateCartUI();
        } catch(err) {
            console.error('Error syncing cart:', err);
        }
    }
});
// Live Chat Mockup Logic
document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatSend = document.getElementById('chat-send');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    if (chatToggle && chatWindow) {
        chatToggle.addEventListener('click', () => {
            chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
        });

        chatClose.addEventListener('click', () => {
            chatWindow.style.display = 'none';
        });

        const sendMessage = () => {
            const text = chatInput.value.trim();
            if (text) {
                // Add user message
                chatMessages.innerHTML += \
                <div style="background: var(--color-primary); color: white; padding: 10px; border-radius: 12px 12px 0 12px; max-width: 85%; font-size: 0.9rem; align-self: flex-end;">
                    \
                </div>\;
                chatInput.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;

                // Simulate reply
                setTimeout(() => {
                    const reply = currentLang === 'en' ? 
                        "Our operators are currently offline. Please leave us a message or contact us via email." : 
                        "Na�i oper�to�i jsou moment�ln� offline. Zanechte n�m pros�m zpr�vu nebo n�s kontaktujte e-mailem.";
                    
                    chatMessages.innerHTML += \
                    <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 12px 12px 12px 0; max-width: 85%; font-size: 0.9rem;">
                        \
                    </div>\;
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
            }
        };

        if(chatSend) chatSend.addEventListener('click', sendMessage);
        if(chatInput) chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
});
