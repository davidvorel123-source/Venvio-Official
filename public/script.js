// Helper: Safe JSON parse with fallback
const safeJsonParse = (str, fallback) => {
    try { return JSON.parse(str) || fallback; } catch(e) { return fallback; }
};

let pointsUsed = 0;

// Legal Modal
const legalModal = document.getElementById('legal-modal');
const closeLegalModal = document.getElementById('close-legal-modal');
const legalTitle = document.getElementById('legal-title');
const legalContent = document.getElementById('legal-content');

const legalTexts = {
    terms: {
        cs: {
            title: "Obchodní podmínky",
            content: "<h4>1. Úvodní ustanovení</h4><p>Tyto obchodní podmínky upravují vzájemná práva a povinnosti mezi poskytovatelem (Venvio) a klientem při vývoji webových stránek, SaaS aplikací, AI chatbotů a poskytování souvisejících služeb.</p><h4>2. Objednávka a uzavření smlouvy</h4><p>Smlouva o dílo je uzavřena potvrzením objednávky klientem (elektronicky přes formulář či e-mail). Po uzavření smlouvy může poskytovatel požadovat úhradu zálohy ve výši až 50 % z celkové ceny díla.</p><h4>3. Realizace díla a předání</h4><p>Poskytovatel se zavazuje dodat dílo v dohodnutém termínu. Klient je povinen poskytnout potřebnou součinnost (dodání textů, přístupů apod.). Při prodlení klienta s dodáním podkladů se termín dokončení adekvátně prodlužuje.</p><h4>4. Platební podmínky</h4><p>Doplatek celkové ceny je splatný po předání a schválení hotového díla klientem. Splatnost faktur je standardně 14 dní, není-li dohodnuto jinak.</p><h4>5. Autorská práva a licence</h4><p>Až do úplného zaplacení ceny díla zůstává dílo i veškerá majetková práva k němu majetkem poskytovatele. Po úplném zaplacení přechází na klienta výhradní a neomezená licence k užívání díla pro jeho účely.</p><h4>6. Odpovědnost za vady a záruka</h4><p>Poskytovatel poskytuje na své dílo záruku 6 měsíců na skryté softwarové chyby. Záruka se nevztahuje na chyby způsobené pozdějším zásahem klienta nebo třetí strany do zdrojového kódu či administrace.</p>"
        },
        en: {
            title: "Terms of Service",
            content: "<h4>1. Introductory Provisions</h4><p>These terms govern the mutual rights and obligations between the provider (Venvio) and the client in the development of websites, SaaS applications, AI chatbots, and the provision of related services.</p><h4>2. Order and Contract Conclusion</h4><p>The contract for work is concluded upon the client\'s confirmation of the order (electronically via form or email). Upon conclusion of the contract, the provider may request an advance payment of up to 50% of the total price.</p><h4>3. Project Execution and Delivery</h4><p>The provider commits to delivering the work within the agreed timeframe. The client is obliged to provide necessary cooperation (supplying texts, access, etc.). If the client delays providing materials, the completion deadline is proportionally extended.</p><h4>4. Payment Terms</h4><p>The remaining balance is due upon delivery and approval of the completed work by the client. The standard invoice maturity is 14 days unless agreed otherwise.</p><h4>5. Copyright and Licensing</h4><p>Until full payment of the project price, the work and all property rights remain the property of the provider. Upon full payment, the client receives an exclusive and unlimited license to use the work.</p><h4>6. Warranty and Liability</h4><p>The provider offers a 6-month warranty on hidden software defects. The warranty does not cover defects caused by subsequent interference by the client or third parties with the source code or administration.</p>"
        }
    },
    privacy: {
        cs: {
            title: "Ochrana osobních údajů (GDPR)",
            content: "<h4>1. Správce osobních údajů</h4><p>Správcem vašich osobních údajů je agentura Venvio. Vaše soukromí bereme vážně a s daty nakládáme v souladu s nařízením GDPR a platnými zákony ČR.</p><h4>2. Jaké údaje zpracováváme</h4><p>Zpracováváme pouze údaje, které nám sami poskytnete při odeslání poptávky, registraci nebo uzavření smlouvy. Jedná se zejména o: Jméno a příjmení (nebo název firmy), e-mailovou adresu, telefonní číslo, IČO/DIČ a fakturační adresu.</p><h4>3. Účel zpracování údajů</h4><p>Vaše údaje používáme výhradně za účelem: <br>- Zpracování vaší poptávky a nacenění projektu<br>- Plnění smlouvy a realizace vývoje softwaru<br>- Vystavení faktur a plnění zákonných účetních povinností<br>- Komunikace týkající se podpory a servisu vašich aplikací</p><h4>4. Zabezpečení a sdílení dat</h4><p>Osobní údaje neprodáváme ani nesdílíme s žádnými třetími stranami pro marketingové účely. K údajům mají přístup pouze prověření členové týmu Venvio a případně externí poskytovatelé nezbytných služeb (např. účetní software).</p><h4>5. Vaše práva</h4><p>Podle nařízení GDPR máte právo požadovat informaci o tom, jaké vaše údaje zpracováváme, vyžádat si jejich aktualizaci, opravu nebo úplný výmaz z naší databáze. Pro uplatnění těchto práv nás prosím kontaktujte na našem e-mailu.</p>"
        },
        en: {
            title: "Privacy Policy (GDPR)",
            content: "<h4>1. Data Controller</h4><p>The data controller of your personal data is the Venvio agency. We take your privacy seriously and handle data in accordance with GDPR regulations.</p><h4>2. What Data We Process</h4><p>We only process data you provide to us when submitting an inquiry, registering, or concluding a contract. This primarily includes: Name and surname (or company name), email address, phone number, VAT ID, and billing address.</p><h4>3. Purpose of Processing</h4><p>We use your data exclusively for: <br>- Processing your inquiry and project pricing<br>- Contract fulfillment and software development execution<br>- Issuing invoices and fulfilling legal accounting obligations<br>- Communication regarding support and service of your applications</p><h4>4. Data Security and Sharing</h4><p>We do not sell or share personal data with any third parties for marketing purposes. Only verified Venvio team members and, if necessary, external service providers (e.g., accounting software) have access to the data.</p><h4>5. Your Rights</h4><p>Under GDPR, you have the right to request information about what data we process, request its update, correction, or complete deletion from our database. To exercise these rights, please contact us via email.</p>"
        }
    }
};

let currentModalType = null;

if (legalModal) {
    const termsLink = document.querySelector('a[data-i18n="footer.terms"]');
    const privacyLink = document.querySelector('a[data-i18n="footer.privacy"]');

    if (termsLink) {
        termsLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentModalType = 'terms';
            legalTitle.innerText = legalTexts.terms[currentLang].title;
            legalContent.innerHTML = legalTexts.terms[currentLang].content;
            legalModal.classList.add('active');
        });
    }

    if (privacyLink) {
        privacyLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentModalType = 'privacy';
            legalTitle.innerText = legalTexts.privacy[currentLang].title;
            legalContent.innerHTML = legalTexts.privacy[currentLang].content;
            legalModal.classList.add('active');
        });
    }

    if (closeLegalModal) {
        closeLegalModal.addEventListener('click', () => {
            legalModal.classList.remove('active');
            currentModalType = null;
        });
    }
    
    // Close on click outside
    legalModal.addEventListener('click', (e) => {
        if (e.target === legalModal) {
            legalModal.classList.remove('active');
            currentModalType = null;
        }
    });
}



// Translations Dictionary
const translations = {
    cs: {
        "nav.services": "Služby",
        "nav.portfolio": "Reference",
        "nav.pricing": "Ceník",
        "nav.how": "Jak to funguje",
        "nav.about": "O nás",
        "nav.contact": "Kontakt",
        "nav.cta": "Poptat projekt",
        "hero.badge": "⚡ Express webové řešení",
        "hero.title": "Profesionální web pro vaši firmu. <br> <span class=\"liquid-text\">Hotový už do 24 hodin.</span>",
        "hero.desc": "Moderní webové stránky s pevnou cenou, rychlým dodáním a kompletním spuštěním.",
        "hero.btn_pkg": "Chci nový web",
        "hero.btn_portfolio": "Prohlédnout reference",
        "hero.trust1": "Od 9 900 Kč",
        "hero.trust2": "Dodání od 24 hodin",
        "hero.trust3": "Kompletně na klíč",
        "rozcestnik.title": "Vyberte si řešení",
        "rozcestnik.desc": "Hned na začátku vás nasměrujeme přesně tam, kam potřebujete.",
        "rozcestnik.web_title": "Potřebuji nový web",
        "rozcestnik.web_desc": "Pro živnostníky, restaurace, služby a menší firmy.",
        "rozcestnik.web_price": "Web od 9 900 Kč",
        "rozcestnik.web_btn": "Prohlédnout webové stránky",
        "rozcestnik.app_title": "Potřebuji aplikaci",
        "rozcestnik.app_desc": "Portál, rezervační systém nebo interní aplikace vytvořená na míru.",
        "rozcestnik.app_price": "Vývoj od 49 900 Kč",
        "rozcestnik.app_btn": "Webové aplikace",
        "rozcestnik.auto_title": "Chci automatizovat firmu",
        "rozcestnik.auto_desc": "AI asistenti, propojení systémů a automatizace opakovaných procesů.",
        "rozcestnik.auto_price": "Řešení od 4 900 Kč",
        "rozcestnik.auto_btn": "AI a automatizace",
        "feature.badge": "💡 Proč Venvio",
        "feature.main_title": "Proč si vybrat nás?",
        "feature.speed_title": "Rychlé dodání",
        "feature.speed_desc": "Web může být spuštěný již do 24 hodin od předání podkladů.",
        "feature.price_title": "Pevná cena",
        "feature.price_desc": "Předem víte, kolik bude projekt stát. Žádné skryté poplatky.",
        "feature.complete_title": "Kompletní realizace",
        "feature.complete_desc": "Design, vývoj, responzivita, základní SEO i spuštění na klíč.",
        "feature.support_title": "Podpora po spuštění",
        "feature.support_desc": "Webem spolupráce nekončí. Jsme tu pro vás i s úpravami.",
        "process.badge": "🛠️ Postup",
        "process.title": "Jak spolupráce probíhá",
        "process.s1_title": "Vyberete řešení",
        "process.s2_title": "Pošlete nám podklady",
        "process.s3_title": "Připravíme web",
        "process.s4_title": "Schválíte a spustíme",
        "process.help_desc": "Nevíte, který balíček potřebujete?",
        "process.help_btn": "Nezávazně se poradit",
        "pricing.title": "Transparentní ceník",
        "pricing.desc": "Vyberte si balíček, který nejlépe odpovídá vašim potřebám.",
        "pkg.btn_add": "Mám zájem",
        "advanced.badge": "💡 Další služby",
        "advanced.title": "Potřebujete něco pokročilejšího?",
        "advanced.desc": "Kromě rychlých webů dodáváme i technologicky náročná řešení pro rostoucí firmy.",
        "advanced.app_title": "Webové aplikace",
        "advanced.app_desc": "Portály, rezervační systémy a SaaS platformy vyvíjené na míru ve Vue/React.",
        "advanced.ai_title": "AI asistenti",
        "advanced.ai_desc": "Chatboti napojení na vaše data, kteří odpovídají zákazníkům 24/7 a řeší support.",
        "advanced.auto_title": "Automatizace",
        "advanced.auto_desc": "Propojení firemních systémů (Make, Zapier) a odstranění manuální a zdlouhavé práce.",
        "advanced.api_title": "Integrace a rozšíření",
        "advanced.api_desc": "Napojení na API, tvorba vlastních Chrome doplňků a speciálních firemních nástrojů.",
        "advanced.cta": "Poptat pokročilé řešení",
        "about.badge": "👋 O nás",
        "about.title": "Kdo za tím stojí",
        "about.desc": "Venvio vzniklo jako specializovaná služba týmu Vidia Design zaměřená na rychlou tvorbu webových stránek a digitálních řešení.",
        "about.role1": "Lead Developer",
        "about.bio1": "Specialista na vývoj moderních webů, aplikací a automatizace.",
        "about.role2": "UX/UI & Design",
        "about.bio2": "Navrhujeme čistá rozhraní a vizuální identity, které vaši značku prodají.",
        "contact.title": "Ozvěte se <span class=\"gradient-text\">nám</span>",
        "contact.desc": "Napište nám, nebo si rovnou zarezervujte termín hovoru.",
        "contact.opt_default": "Co potřebujete?",
        "contact.opt_web": "Nový web",
        "contact.opt_edit": "Úpravu současného webu",
        "contact.opt_app": "Webovou aplikaci",
        "contact.opt_ai": "AI / automatizaci",
        "contact.opt_other": "Nevím – potřebuji poradit",
        "contact.ph_name": "Vaše jméno",
        "contact.ph_email": "Váš e-mail",
        "contact.ph_msg": "Krátce popište projekt...",
        "contact.submit": "Odeslat nezávaznou poptávku <i class=\"fa-solid fa-paper-plane\"></i>",
        "portfolio.btn": "Zobrazit web",
        "portfolio.p1_desc": "Firemní web pro moderní burger restauraci",
        "portfolio.p1_f1": "Web na míru",
        "portfolio.p1_f2": "5 podstránek",
        "portfolio.p1_f3": "Responzivní design",
        "portfolio.p2_desc": "Elegantní prezentace prémiové kavárny",
        "portfolio.p2_f1": "Jednostránkový web (One-page)",
        "portfolio.p2_f2": "Nápojový lístek",
        "portfolio.p2_f3": "Google Mapy",
        "portfolio.p3_desc": "Luxusní web s rezervačním systémem",
        "portfolio.p3_f1": "Web na míru",
        "portfolio.p3_f2": "Rezervační systém",
        "portfolio.p3_f3": "SEO optimalizace",
        "faq.title": "Často kladené otázky",
        "footer.nav_title": "Navigace",
        "footer.contact_title": "Kontakt"
    },
    en: {
        "nav.services": "Services",
        "nav.portfolio": "Portfolio",
        "nav.pricing": "Pricing",
        "nav.how": "How it works",
        "nav.about": "About us",
        "nav.contact": "Contact",
        "nav.cta": "Request Project",
        "hero.badge": "⚡ Express Web Solutions",
        "hero.title": "Professional website for your business. <br> <span class=\"liquid-text\">Ready in 24 hours.</span>",
        "hero.desc": "Modern websites with a fixed price, fast delivery, and complete launch.",
        "hero.btn_pkg": "I want a new website",
        "hero.btn_portfolio": "View Portfolio",
        "hero.trust1": "From 9,900 CZK",
        "hero.trust2": "Delivery from 24h",
        "hero.trust3": "Turnkey solutions",
        "rozcestnik.title": "Choose your solution",
        "rozcestnik.desc": "Right from the start, we point you exactly where you need to be.",
        "rozcestnik.web_title": "I need a new website",
        "rozcestnik.web_desc": "For freelancers, restaurants, services, and small businesses.",
        "rozcestnik.web_price": "Websites from 9,900 CZK",
        "rozcestnik.web_btn": "View websites",
        "rozcestnik.app_title": "I need an app",
        "rozcestnik.app_desc": "Portals, booking systems, or internal custom apps.",
        "rozcestnik.app_price": "Development from 49,900 CZK",
        "rozcestnik.app_btn": "Web applications",
        "rozcestnik.auto_title": "I want to automate",
        "rozcestnik.auto_desc": "AI assistants, system integrations, and repetitive process automation.",
        "rozcestnik.auto_price": "Solutions from 4,900 CZK",
        "rozcestnik.auto_btn": "AI and automation",
        "feature.badge": "💡 Why Venvio",
        "feature.main_title": "Why choose us?",
        "feature.speed_title": "Fast delivery",
        "feature.speed_desc": "Your website can be live within 24 hours of providing materials.",
        "feature.price_title": "Fixed price",
        "feature.price_desc": "You know upfront how much the project will cost. No hidden fees.",
        "feature.complete_title": "Complete realization",
        "feature.complete_desc": "Design, development, responsive layout, basic SEO, and launch.",
        "feature.support_title": "Post-launch support",
        "feature.support_desc": "Our cooperation doesn't end with the launch. We're here for updates.",
        "process.badge": "🛠️ Process",
        "process.title": "How we work together",
        "process.s1_title": "Choose a solution",
        "process.s2_title": "Send us materials",
        "process.s3_title": "We build the web",
        "process.s4_title": "You approve and we launch",
        "process.help_desc": "Not sure which package you need?",
        "process.help_btn": "Get a free consultation",
        "pricing.title": "Transparent pricing",
        "pricing.desc": "Choose the package that best fits your needs.",
        "pkg.btn_add": "I'm interested",
        "advanced.badge": "💡 Advanced Services",
        "advanced.title": "Need something more advanced?",
        "advanced.desc": "Besides fast websites, we deliver technologically demanding solutions for growing businesses.",
        "advanced.app_title": "Web Applications",
        "advanced.app_desc": "Portals, reservation systems, and SaaS platforms built with Vue/React.",
        "advanced.ai_title": "AI Assistants",
        "advanced.ai_desc": "Chatbots connected to your data that answer customers 24/7.",
        "advanced.auto_title": "Automation",
        "advanced.auto_desc": "System integration (Make, Zapier) to eliminate manual and tedious work.",
        "advanced.api_title": "Integrations and Extensions",
        "advanced.api_desc": "API connections, custom Chrome extensions, and special business tools.",
        "advanced.cta": "Request advanced solution",
        "about.badge": "👋 About us",
        "about.title": "Who's behind this",
        "about.desc": "Venvio was created as a specialized service by the Vidia Design team focused on fast website creation and digital solutions.",
        "about.role1": "Lead Developer",
        "about.bio1": "Specialist in modern web development, applications, and automation.",
        "about.role2": "UX/UI & Design",
        "about.bio2": "We design clean interfaces and visual identities that sell your brand.",
        "contact.title": "Get in <span class=\"gradient-text\">touch</span>",
        "contact.desc": "Write to us or book a call directly.",
        "contact.opt_default": "What do you need?",
        "contact.opt_web": "New website",
        "contact.opt_edit": "Edit current website",
        "contact.opt_app": "Web application",
        "contact.opt_ai": "AI / automation",
        "contact.opt_other": "I don't know - I need advice",
        "contact.ph_name": "Your name",
        "contact.ph_email": "Your e-mail",
        "contact.ph_msg": "Briefly describe your project...",
        "contact.submit": "Send request <i class=\"fa-solid fa-paper-plane\"></i>",
        "portfolio.btn": "View website",
        "portfolio.p1_desc": "Corporate website for a modern burger restaurant",
        "portfolio.p1_f1": "Custom website",
        "portfolio.p1_f2": "5 pages",
        "portfolio.p1_f3": "Responsive design",
        "portfolio.p2_desc": "Elegant presentation of a premium cafe",
        "portfolio.p2_f1": "One-page website",
        "portfolio.p2_f2": "Drink menu",
        "portfolio.p2_f3": "Google Maps",
        "portfolio.p3_desc": "Luxury website with a booking system",
        "portfolio.p3_f1": "Custom website",
        "portfolio.p3_f2": "Booking system",
        "portfolio.p3_f3": "SEO optimization",
        "faq.title": "Frequently Asked Questions",
        "footer.nav_title": "Navigation",
        "footer.contact_title": "Contact"
    }
};


// Products & Pricing Dictionary

const RATE_EUR = 25;
const RATE_USD = 23;

const productPrices = {
    'pkg-start': { czk: { val: 9900, str: '9 900 Kč' }, eur: { val: 390, str: '390 €' }, usd: { val: 440, str: '$440' } },
    'pkg-standard': { czk: { val: 19900, str: '19 900 Kč' }, eur: { val: 790, str: '790 €' }, usd: { val: 890, str: '$890' } },
    'pkg-premium': { czk: { val: 29900, str: 'od 29 900 Kč' }, eur: { val: 1190, str: 'from 1190 €' }, usd: { val: 1290, str: 'from $1290' } },
    'add-domain': { czk: { val: 490, str: '490 Kč' }, eur: { val: 20, str: '20 €' }, usd: { val: 22, str: '$22' } },
    'add-support': { czk: { val: 1500, str: '1 500 Kč' }, eur: { val: 60, str: '60 €' }, usd: { val: 65, str: '$65' } },
    'add-identity': { czk: { val: 8900, str: '8 900 Kč' }, eur: { val: 350, str: '350 €' }, usd: { val: 390, str: '$390' } },
    'add-hourly': { czk: { val: 1200, str: '1 200 Kč' }, eur: { val: 50, str: '50 €' }, usd: { val: 55, str: '$55' } },
    'svc-webapp': { czk: { val: 99000, str: 'od 99 000 Kč' }, eur: { val: 3990, str: 'from 3990 €' }, usd: { val: 4290, str: 'from $4290' } },
    'svc-ai': { czk: { val: 24900, str: 'od 24 900 Kč' }, eur: { val: 990, str: 'from 990 €' }, usd: { val: 1090, str: 'from $1090' } },
    'svc-automation': { czk: { val: 9900, str: 'od 9 900 Kč' }, eur: { val: 390, str: 'from 390 €' }, usd: { val: 440, str: 'from $440' } },
    'svc-chrome': { czk: { val: 14900, str: 'od 14 900 Kč' }, eur: { val: 590, str: 'from 590 €' }, usd: { val: 650, str: 'from $650' } }
};

// Current State
let currentLang = localStorage.getItem('venvioLang');
if (currentLang !== 'cs' && currentLang !== 'en') currentLang = 'cs';
window.currentLang = currentLang;
let currentCurrency = localStorage.getItem('venvioCurr');
if (currentCurrency !== 'czk' && currentCurrency !== 'eur' && currentCurrency !== 'usd') currentCurrency = 'czk';
let discountMultiplier = 1;

// DOM Elements for Translation

translations.cs['chat.tooltip'] = "Chatujte s naší AI";
translations.en['chat.tooltip'] = "Chat with our AI";
translations.cs['chat.header_title'] = "Venvio Podpora";
translations.en['chat.header_title'] = "Venvio Support";
translations.cs['chat.header_desc'] = "Odpovídáme ihned";
translations.en['chat.header_desc'] = "Replies instantly";
translations.cs['chat.welcome'] = "Dobrý den! 👋 Jak vám můžeme pomoci s vaším webem?";
translations.en['chat.welcome'] = "Hello! 👋 How can we help you with your website?";
translations.cs['chat.placeholder'] = "Napište zprávu...";
translations.en['chat.placeholder'] = "Type a message...";

// Translations Dictionary (update modal submit text)
translations.cs['modal.submit'] = "Odeslat objednávku";
translations.en['modal.submit'] = "Submit Order";


translations.cs['cart.guest_info'] = 'Objednáváte jako host. Přihlaste se a získejte okamžitou slevu 500 Kč!';
translations.en['cart.guest_info'] = 'Ordering as a guest. Log in to get an instant 500 CZK discount!';

translations.cs['checkout.gdpr'] = 'Souhlasím se <a href="#" onclick="document.getElementById(\'legal-modal\').classList.add(\'active\'); event.preventDefault();" style="color:var(--color-primary);text-decoration:underline;">zpracováním osobních údajů</a> a <a href="#" onclick="document.getElementById(\'legal-modal\').classList.add(\'active\'); event.preventDefault();" style="color:var(--color-primary);text-decoration:underline;">obchodními podmínkami</a>.';
translations.en['checkout.gdpr'] = 'I agree to the <a href="#" onclick="document.getElementById(\'legal-modal\').classList.add(\'active\'); event.preventDefault();" style="color:var(--color-primary);text-decoration:underline;">processing of personal data</a> and <a href="#" onclick="document.getElementById(\'legal-modal\').classList.add(\'active\'); event.preventDefault();" style="color:var(--color-primary);text-decoration:underline;">terms of service</a>.';
translations.cs['footer.branch'] = '<strong>VIDIA-DESIGN s.r.o.</strong><br>Sídlo: Praha<br>IČO: 27622444<br>Spisová značka: C 119565, Městský soud v Praze';
translations.en['footer.branch'] = '<strong>VIDIA-DESIGN s.r.o.</strong><br>Based in: Prague<br>Company ID (IČO): 27622444<br>File ref: C 119565, Municipal Court in Prague';
translations.cs['footer.legal'] = 'Právní informace';
translations.en['footer.legal'] = 'Legal Information';
translations.cs['footer.terms'] = 'Obchodní podmínky';
translations.en['footer.terms'] = 'Terms & Conditions';
translations.cs['footer.privacy'] = 'Ochrana osobních údajů';
translations.en['footer.privacy'] = 'Privacy Policy';

const applyTranslations = () => {
    document.documentElement.lang = currentLang;
    // Translate text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.setAttribute('placeholder', translations[currentLang][key]);
        }
    });

    // Update WhatsApp link text
    const waLink = document.getElementById('fab-whatsapp');
    if (waLink) {
        waLink.href = currentLang === 'en' 
            ? "https://wa.me/420775104206?text=Hello,%20I%20am%20interested%20in%20a%20new%20website."
            : "https://wa.me/420775104206?text=Dobrý%20den,%20mám%20zájem%20o%20nový%20web.";
    }

    // Update auth modal dynamically based on active tab
    const authDesc = document.getElementById('auth-desc');
    const authSubmit = document.getElementById('auth-submit-btn');
    const isLogin = document.getElementById('tab-login') && document.getElementById('tab-login').style.borderBottomColor !== 'transparent';
    if (authDesc && authSubmit) {
        if (isLogin) {
            authDesc.innerHTML = currentLang === 'en' ? 'Log in to your account to use loyalty discounts.' : 'Přihlaste se ke svému účtu pro využití věrnostních slev.';
            authSubmit.innerHTML = currentLang === 'en' ? 'Log In' : 'Přihlásit se';
        } else {
            authDesc.innerHTML = currentLang === 'en' ? 'Create an account and earn Venvio Coins for discounts on your next order.' : 'Vytvořte si účet a sbírejte Venvio Coins pro slevy na příští objednávky.';
            authSubmit.innerHTML = currentLang === 'en' ? 'Create Account' : 'Vytvořit účet';
        }
    }

    // Update toast if it's currently showing
    const toastMsg = document.getElementById('toast-message');
    if (toastMsg) {
        if (toastMsg.innerHTML.includes('Secret') || toastMsg.innerHTML.includes('Tajná sleva') || toastMsg.innerHTML.includes('Tajn')) {
            toastMsg.innerHTML = currentLang === 'en' ? 'Secret found! Promo code: VENVIO10' : 'Tajná sleva 10%! Kód: VENVIO10';
        } else if (toastMsg.innerHTML.includes('Přidáno') || toastMsg.innerHTML.includes('Přidáno') || toastMsg.innerHTML.includes('Added')) {
            toastMsg.innerHTML = translations[currentLang]['toast.added'] || 'Přidáno do košíku!';
        }
    }


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
    const triggerCalc = document.getElementById('calc-pages');
    if (triggerCalc) triggerCalc.dispatchEvent(new Event('input'));
};

document.body.addEventListener('click', (e) => { const btn = e.target.closest('.lang-btn'); if(btn) { currentLang = btn.getAttribute('data-lang'); window.currentLang = currentLang; localStorage.setItem('venvioLang', currentLang); document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-lang') === currentLang)); applyTranslations(); if(typeof typeWriterEffect === 'function') typeWriterEffect(true); } });

document.body.addEventListener('click', (e) => { const btn = e.target.closest('.curr-btn'); if(btn) { currentCurrency = btn.getAttribute('data-curr'); localStorage.setItem('venvioCurr', currentCurrency); document.querySelectorAll('.curr-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-curr') === currentCurrency)); applyTranslations(); } });

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
        
        // Guest check
        let isGuestUsed = false;
        if (!window.currentUser) {
            const guestUsedCodes = safeJsonParse(localStorage.getItem('venvioGuestCodes'), []) || [];
            if (guestUsedCodes.includes(code)) {
                isGuestUsed = true;
            }
        }
        
        if (code === 'VENVIO10') {
            if (isGuestUsed || (typeof window.currentUser !== 'undefined' && window.currentUser && window.currentUser.usedCodes.includes(code))) {
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
        } else if (code === 'VENVIO-50-VIP-X72Q') {
            if (isGuestUsed || (typeof window.currentUser !== 'undefined' && window.currentUser && window.currentUser.usedCodes.includes(code))) {
                discountMultiplier = 1;
                discountMsg.innerText = currentLang === 'en' ? 'Code already used!' : 'Tento kód jste již využili!';
                discountMsg.style.color = '#FF6B6B';
                discountMsg.style.display = 'block';
            } else {
                discountMultiplier = 0.5;
                discountMsg.innerText = currentLang === 'en' ? 'VIP Discount 50% applied!' : 'VIP Sleva 50% uplatněna!';
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
const updateCartUI = (skipStorage = false) => {
    if (!cartCount) return; 
    cartCount.innerText = cart.length;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `<div class="empty-cart-msg">${translations[currentLang]['cart.empty']}</div>`;
        discountMultiplier = 1;
        pointsUsed = 0;
        const discMsg = document.getElementById('discount-msg');
        if (discMsg) discMsg.style.display = 'none';
        const ptsMsg = document.getElementById('points-msg');
        if (ptsMsg) ptsMsg.style.display = 'none';
        cartTotalPrice.innerText = formatPriceDynamic(0);
        if (!skipStorage) localStorage.setItem('venvioCart', JSON.stringify(cart));
        return;
    }

    let total = 0;
    cartContainer.innerHTML = '';
    
    cart.forEach((item, index) => {
        // Získání správné ceny podle měny
        let itemPrice = item.customPrice !== undefined ? item.customPrice : (productPrices[item.id] ? productPrices[item.id][currentCurrency].val : 0);
        if (item.id === "pkg-calc") {
            if (currentCurrency === "eur") itemPrice = Math.round(itemPrice / RATE_EUR);
            if (currentCurrency === "usd") itemPrice = Math.round(itemPrice / RATE_USD);
        }
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
        if (currentCurrency === 'eur') finalTotal -= Math.round(pointsUsed / RATE_EUR);
        else if (currentCurrency === 'usd') finalTotal -= Math.round(pointsUsed / RATE_USD);
        else finalTotal -= pointsUsed;
        if (finalTotal < 0) finalTotal = 0;
    }
    
    if (discountMultiplier < 1) {
        cartTotalPrice.innerHTML = `<del style="font-size: 0.8rem; color: #94A3B8; margin-right: 8px;">${formatPriceDynamic(total)}</del><span style="color: #FF6B6B;">${formatPriceDynamic(finalTotal)}</span>`;
    } else {
        cartTotalPrice.innerText = formatPriceDynamic(finalTotal);
    }
    
    if (!skipStorage) {
        localStorage.setItem('venvioCart', JSON.stringify(cart));
    }
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
      if(document.getElementById('chat-widget')) document.getElementById('chat-widget').style.display = 'none';
      if(document.getElementById('fab-whatsapp')) document.getElementById('fab-whatsapp').style.display = 'none';
    document.body.style.overflow = 'hidden';
};

const closeCartSidebar = () => {
    if(!cartSidebar) return;
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
      if(document.getElementById('chat-widget')) document.getElementById('chat-widget').style.display = 'block';
      if(document.getElementById('fab-whatsapp')) document.getElementById('fab-whatsapp').style.display = 'flex';
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


if(closeModal) {
    closeModal.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });
}

// Close checkout modal on overlay click
if(checkoutModal) {
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) {
            checkoutModal.classList.remove('active');
        }
    });
}

// Close auth modal on overlay click
const authModalEl = document.getElementById('auth-modal');
if (authModalEl) {
    authModalEl.addEventListener('click', (e) => {
        if (e.target === authModalEl) {
            authModalEl.classList.remove('active');
        }
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
        const formData = new FormData(checkoutForm);
        
        let cartText = "PRÁZDNÝ KOŠÍK";
        let totalString = "0";
        if (cart.length > 0) {
            cartText = cart.map(item => {
                let price = item.customPrice !== undefined ? item.customPrice : (productPrices[item.id] ? productPrices[item.id][currentCurrency].val : 0);
                if (item.id === 'pkg-calc') {
                    if (currentCurrency === 'eur') price = Math.round(price / RATE_EUR);
                    if (currentCurrency === 'usd') price = Math.round(price / RATE_USD);
                }
                const name = currentLang === 'en' && item.nameEn ? item.nameEn : item.nameCs;
                const details = currentLang === 'en' && item.detailsEn ? ' ' + item.detailsEn : (item.detailsCs ? ' ' + item.detailsCs : '');
                return "📦 " + name + details + " - " + formatPriceDynamic(price);
            }).join('\n');
            
            let rawTotal = cart.reduce((sum, item) => {
                let p = item.customPrice !== undefined ? item.customPrice : (productPrices[item.id] ? productPrices[item.id][currentCurrency].val : 0);
                if (item.id === 'pkg-calc') {
                    if (currentCurrency === 'eur') p = Math.round(p / RATE_EUR);
                    if (currentCurrency === 'usd') p = Math.round(p / RATE_USD);
                }
                return sum + p;
            }, 0);
            
            let finalCheckoutTotal = Math.round(rawTotal * discountMultiplier);
            let pointsDiscount = 0;
            if (typeof pointsUsed !== "undefined" && pointsUsed > 0) {
                if (currentCurrency === "czk") pointsDiscount = pointsUsed;
                else if (currentCurrency === "eur") pointsDiscount = Math.round(pointsUsed / RATE_EUR);
                else if (currentCurrency === "usd") pointsDiscount = Math.round(pointsUsed / RATE_USD);
            }
            finalCheckoutTotal -= pointsDiscount;
            if (finalCheckoutTotal < 0) finalCheckoutTotal = 0;
            
            totalString = formatPriceDynamic(finalCheckoutTotal);
            if (discountMultiplier < 1) {
                const pct = Math.round((1 - discountMultiplier) * 100);
                totalString += currentLang === 'en' ? ` (Discount ${pct}% applied)` : ` (Sleva ${pct}% uplatněna)`;
            }
            if (pointsDiscount > 0) {
                totalString += `\n[- Venvio Coins: -${formatPriceDynamic(pointsDiscount)}]`;
            }
    
        }
        
        const requestData = {
              "Jméno Klienta": formData.get('Jmeno'),
              "E-mail": formData.get('Email'),
              "Telefon": formData.get('Telefon') || "Nezadáno",
              "Zpráva od klienta": formData.get('Zprava') || "Bez zprávy",
              "Položky v košíku": "\n" + cartText,
              "CELKOVÁ CENA": totalString,
              _subject: "🚀 Nová VIP objednávka z Venvio.dev!",
              _template: "box",
              _autoresponse: currentLang === 'en' 
                  ? "Thank you for your custom order! We have successfully received your request and will contact you immediately. \n\nBest regards, \nVenvio Team" 
                  : "Děkujeme za vaši objednávku! Váš požadavek jsme úspěšně přijali a brzy se vám ozveme. \n\nS pozdravem, \nTým Venvio"
          };

        // PŘECHOD NA WEB3FORMS (Místo FormSubmit)
        requestData.access_key = "8d52594c-6265-48a0-a197-909feda1667f";
        requestData.subject = requestData._subject;
        requestData.from_name = requestData["Jméno Klienta"];
        requestData.replyto = requestData["E-mail"];
        requestData.email = requestData["E-mail"];
          requestData.access_key = "8d52594c-6265-48a0-a197-909feda1667f";
          requestData.autoresponse = requestData._autoresponse;
        requestData.email = requestData["E-mail"]; // REQUIRED for Web3Forms Autoresponder
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(requestData)
            });
            
            if (response.ok) {
                let baseTotal = 0;
                cart.forEach(item => { 
                    let p = item.customPrice !== undefined ? item.customPrice : (productPrices[item.id] ? productPrices[item.id][currentCurrency].val : 0); 
                    if (item.id === "pkg-calc") {
                        if (currentCurrency === "eur") p = Math.round(p / RATE_EUR);
                        if (currentCurrency === "usd") p = Math.round(p / RATE_USD);
                    }
                    baseTotal += p; 
                });
                let pointsDiscount = 0;
                if (typeof pointsUsed !== "undefined" && pointsUsed > 0) {
                    if (currentCurrency === "czk") pointsDiscount = pointsUsed;
                    else if (currentCurrency === "eur") pointsDiscount = Math.round(pointsUsed / RATE_EUR);
                    else if (currentCurrency === "usd") pointsDiscount = Math.round(pointsUsed / RATE_USD);
                }
                let discountMultiplierVal = typeof discountMultiplier !== "undefined" ? discountMultiplier : 1;
                let orderTotal = Math.round(baseTotal * discountMultiplierVal) - pointsDiscount;
                if (orderTotal < 0) orderTotal = 0;

                if (typeof generateInvoicePDF === 'function') {
                    try {
                        await generateInvoicePDF({
                            name: requestData["Jméno Klienta"] || requestData["Name"] || '',
                            email: requestData.email || '',
                            items: cart.map(i => i.nameCs || i.nameEn),
                            total: orderTotal
                        });
                    } catch (e) {
                        console.error('PDF generation failed:', e);
                    }
                }
                // EmailJS autoresponder – not configured, skipped
                if (typeof gtag === 'function') gtag('event', 'purchase', { value: orderTotal, currency: currentCurrency.toUpperCase() });
                localStorage.setItem('venvioLastOrderTime', Date.now().toString());
                if (window.currentUser) {
                    let allUsers = typeof safeJsonParse === "function" ? safeJsonParse(localStorage.getItem("venvioAllUsers"), {}) : (JSON.parse(localStorage.getItem("venvioAllUsers")) || {});
                    if (!allUsers[window.currentUser.email]) allUsers[window.currentUser.email] = { points: 500, usedCodes: [], orders: [] };
                    if (!allUsers[window.currentUser.email].orders) allUsers[window.currentUser.email].orders = [];
                    
                    const date = new Date().toLocaleDateString(currentLang === "en" ? "en-US" : "cs-CZ");
                    const itemsStr = cart.map(i => i.nameCs || i.nameEn).join(", ");
                    
                    let ptsUsed = typeof pointsUsed !== "undefined" ? pointsUsed : 0;
                    if (ptsUsed > 0 && allUsers[window.currentUser.email].points >= ptsUsed) {
                        allUsers[window.currentUser.email].points -= ptsUsed;
                        window.currentUser.points = allUsers[window.currentUser.email].points;
                    }
                    
                    const newOrder = { date: date, items: itemsStr, total: orderTotal, pointsUsed: ptsUsed };
                    allUsers[window.currentUser.email].orders.push(newOrder);
                    localStorage.setItem("venvioAllUsers", JSON.stringify(allUsers));
                    
                    if (window.firebaseDb) {
                        import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js").then(({ doc, updateDoc, getDoc }) => {
                            const userRef = doc(window.firebaseDb, "users", window.currentUser.uid);
                            getDoc(userRef).then(snap => {
                                if(snap.exists()) {
                                    const d = snap.data();
                                    const fbOrders = d.orders || [];
                                    fbOrders.push(newOrder);
                                    let newPoints = (d.points !== undefined ? d.points : 500) - ptsUsed;
                                    if(newPoints < 0) newPoints = 0;
                                    
                                    const codeInput = document.getElementById('discount-code');
                                    const usedCode = codeInput ? codeInput.value.trim().toUpperCase() : '';
                                    let fbUsedCodes = d.usedCodes || [];
                                    if (discountMultiplier < 1 && usedCode && !fbUsedCodes.includes(usedCode)) {
                                        fbUsedCodes.push(usedCode);
                                    }
                                    
                                    updateDoc(userRef, { orders: fbOrders, points: newPoints, usedCodes: fbUsedCodes }).catch(e => console.error("Firestore order update err:", e));
                                }
                            });
                        }).catch(err => console.error("Firestore module load err:", err));
                    }
                }
                if (discountMultiplier < 1) {
                    const codeInput = document.getElementById('discount-code');
                    const usedCode = codeInput ? codeInput.value.trim().toUpperCase() : '';
                    if (usedCode && !window.currentUser) {
                        const guestUsedCodes = safeJsonParse(localStorage.getItem('venvioGuestCodes'), []) || [];
                        if (!guestUsedCodes.includes(usedCode)) {
                            guestUsedCodes.push(usedCode);
                            localStorage.setItem('venvioGuestCodes', JSON.stringify(guestUsedCodes));
                        }
                    }
                }
                localStorage.removeItem('venvioCart');
                window.location.href = "success.html";
            } else {
                throw new Error("Nepodařilo se odeslat přes Web3Forms.");
            }
        } catch (error) {
            console.error("Web3Forms chyba:", error);
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
translations.cs['blog.post3.desc'] = "Glassmorphism, dark mode, mikro-animace. Přehled trendů, které dominují a které by váš web neměl postrádat.";
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
translations.cs['svc1.price'] = 'Od 99 000 Kč';
translations.en['svc1.price'] = 'From 99,000 CZK';

translations.cs['svc2.title'] = 'Inteligentní AI Chatboti';
translations.en['svc2.title'] = 'Intelligent AI Chatbots';
translations.cs['svc2.desc'] = 'Chytrý asistent napojený na ChatGPT, který zná vaše produkty, odpovídá 24/7 a zvyšuje prodeje.';
translations.en['svc2.desc'] = 'A smart assistant connected to ChatGPT that knows your products, replies 24/7, and boosts sales.';
translations.cs['svc2.price'] = 'Od 24 900 Kč';
translations.en['svc2.price'] = 'From 24,900 CZK';

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
/* IntersectionObserver removed */


// === NEW INTERACTIVE FEATURES ===



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
document.body.addEventListener('click', function (e) {
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
        const href = anchor.getAttribute('href');
        if (href === '#' || href === '#main-content') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            const navLinks = document.getElementById('nav-links');
            const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
            if (navLinks) {
                navLinks.classList.remove('mobile-open');
                if (mobileToggleBtn) mobileToggleBtn.setAttribute('aria-expanded', 'false');
            }
        }
    }
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-menu-toggle');
const navLinksEl = document.getElementById('nav-links');
if (mobileToggle && navLinksEl) {
    mobileToggle.addEventListener('click', () => {
        navLinksEl.classList.toggle('mobile-open');
        const isOpen = navLinksEl.classList.contains('mobile-open');
        mobileToggle.setAttribute('aria-expanded', isOpen);
    });
}

// === PREMIUM FEATURES ===

// Preloader (Removed)

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
let isProgressTicking = false;
if (scrollProgress) {
    window.addEventListener('scroll', () => {
        if (!isProgressTicking) {
            window.requestAnimationFrame(() => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / docHeight) * 100;
                scrollProgress.style.width = scrollPercent + '%';
                isProgressTicking = false;
            });
            isProgressTicking = true;
        }
    }, { passive: true });
}

// === PARALLAX HERO ===
const heroContent = document.querySelector('.hero-content');
const heroBgGlow = document.querySelector('.hero-bg-glow');
let isParallaxTicking = false;
if (heroContent && window.matchMedia('(hover: hover)').matches) {
    window.addEventListener('scroll', () => {
        if (!isParallaxTicking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                if (scrollY < window.innerHeight) {
                    heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
                    heroContent.style.opacity = 1 - (scrollY / (window.innerHeight * 0.8));
                    if (heroBgGlow) {
                        heroBgGlow.style.transform = `translate(-50%, -50%) scale(${1 + scrollY * 0.001})`;
                    }
                }
                isParallaxTicking = false;
            });
            isParallaxTicking = true;
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

if (false) {
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
            themeToggles.forEach(t => { if(t) t.querySelector('i').classList.replace('fa-moon', 'fa-sun'); });
        } else {
            themeToggles.forEach(t => { if(t) t.querySelector('i').classList.replace('fa-sun', 'fa-moon'); });
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


// Preloader Logic (Removed)


// Easter Egg
window.revealSecret = () => {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toast-message');
    if(toast && msg) {
        msg.innerText = currentLang === 'en' ? 'Secret found! Promo code: VENVIO10' : 'Tajná sleva 10%! Kód: VENVIO10';
        toast.classList.add('show');
        setTimeout(() => { 
            toast.classList.remove('show'); 
            setTimeout(() => applyTranslations(), 500); // restore original text
        }, 5000);
    }
};


document.addEventListener('DOMContentLoaded', () => {
// Calculator Logic
const calcPages = document.getElementById('calc-pages');
const calcPagesVal = document.getElementById('calc-pages-val');
const calcTotal = document.getElementById('calc-total');
const calcCheckboxes = document.querySelectorAll('.calc-checkboxes input');

// Calculator logic handled by updateCalculatorWithEta below


// Calc Translations
translations.cs['calc.badge'] = '💡 Odhad ceny';
translations.en['calc.badge'] = '💡 Price Estimate';
translations.cs['calc.title'] = 'Interaktivní kalkulačka';
translations.en['calc.title'] = 'Interactive Calculator';
translations.cs['calc.desc'] = 'Spočítejte si hrubý odhad vašeho projektu na míru.';
translations.en['calc.desc'] = 'Calculate a rough estimate for your custom project.';
translations.cs['calc.pages'] = 'Počet stránek/podstránek: ';
translations.en['calc.pages'] = 'Number of pages: ';
translations.cs['calc.opt_cms'] = 'Vlastní Administrace (CMS)';
translations.en['calc.opt_cms'] = 'Custom Admin (CMS)';
translations.cs['calc.opt_chat'] = 'AI Chatbot Asistent';
translations.en['calc.opt_chat'] = 'AI Chatbot Assistant';
translations.cs['calc.opt_eshop'] = 'E-shop Modul (Platby)';
translations.en['calc.opt_eshop'] = 'E-commerce Module';
translations.cs['calc.total_est'] = 'Odhadovaná cena:';
translations.en['calc.total_est'] = 'Estimated Price:';
translations.cs['fab.tooltip'] = 'Napište nám!';
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

let previousCalcTotalRaw = 0;
let calcAnimationFrame = null;
const animateValue = (obj, start, end, duration) => {
    if (calcAnimationFrame) cancelAnimationFrame(calcAnimationFrame);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // Easing out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        let val = Math.floor(easeProgress * (end - start) + start);
        obj.innerText = formatPriceDynamic(currentLang === 'en' ? val.toLocaleString('en-US') : val.toLocaleString('cs-CZ'));
        if (progress < 1) {
            calcAnimationFrame = window.requestAnimationFrame(step);
        }
    };
    calcAnimationFrame = window.requestAnimationFrame(step);
};

const updateCalculatorWithEta = () => {
    const calcPagesEl = document.getElementById('calc-pages');
    const calcTotalEl = document.getElementById('calc-total');
    if(!calcPagesEl || !calcTotalEl) return;
    
    let pages = parseInt(calcPagesEl.value);
    document.getElementById('calc-pages-val').innerText = pages;
    
    let basePrice = 0;
    let days = 0;
    
    if (pages === 1) { basePrice = 9900; days = 1; } else if (pages <= 5) { basePrice = 19900; days = 2; } else { basePrice = 29900 + ((pages - 5) * 2000); days = 5 + (pages - 5); }
    
    let total = basePrice;
    
    document.querySelectorAll('.calc-checkboxes input').forEach(cb => {
        if(cb.checked) {
            total += parseInt(cb.value);
            if(cb.id === 'calc-cms') days += 3;
            if(cb.id === 'calc-eshop') days += 7;
            if(cb.id === 'calc-chat') days += 2;
        }
    });
    currentCalcTotalRaw = total; // ALWAYS CZK
    
    if(calcEtaVal) {
        calcEtaVal.innerText = calculateEta(days);
    }
    
    let displayTotal = total;
    if(currentCurrency === 'eur') displayTotal = Math.round(displayTotal / RATE_EUR);
    if(currentCurrency === 'usd') displayTotal = Math.round(displayTotal / RATE_USD);
    
    if (previousCalcTotalRaw !== displayTotal) {
        animateValue(calcTotalEl, previousCalcTotalRaw, displayTotal, 600);
        previousCalcTotalRaw = displayTotal;
    } else {
        calcTotalEl.innerText = formatPriceDynamic(currentLang === 'en' ? displayTotal.toLocaleString('en-US') : displayTotal.toLocaleString('cs-CZ'));
    }
};

if(document.getElementById('calc-pages')) {
    document.getElementById('calc-pages').addEventListener('input', updateCalculatorWithEta);
}
document.querySelectorAll('.calc-checkboxes input').forEach(cb => cb.addEventListener('change', updateCalculatorWithEta));

setTimeout(updateCalculatorWithEta, 100);
});

// ==========================================
// Auth & Points System
// ==========================================
// ==========================================
// Auth & Points System (with Password & Social Login)
// ==========================================
window.currentUser = null; // Managed by Firebase

const authBtn = document.getElementById('auth-btn');
const authBtnMobile = document.getElementById('auth-btn-mobile');
const authIconMobile = document.getElementById('auth-icon-mobile');
const authIcon = document.getElementById('auth-icon');
const authModal = document.getElementById('auth-modal');
const closeAuthModal = document.getElementById('close-auth-modal');
const authBodyLogin = document.getElementById('auth-body-login');
const authBodyProfile = document.getElementById('auth-body-profile');
const authForm = document.getElementById('auth-form');

if (authForm) {
    authForm.addEventListener('submit', (e) => {
        // This will be overridden or executed alongside auth.js
        // If auth.js didn't load, window.isFirebaseConfigured won't be true
        if (!window.isFirebaseConfigured) {
            e.preventDefault();
            alert("Přihlášení není aktuálně dostupné. Zkontrolujte připojení nebo vypněte blokování reklam (AdBlock), které může blokovat přihlašovací systém.");
        }
    });
}

const authProfileName = document.getElementById('auth-profile-name');
const authProfileEmail = document.getElementById('auth-profile-email');
const authProfilePoints = document.getElementById('auth-profile-points');


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
    if (window.currentUser) {
        if (typeof updateAuthUI === 'function') updateAuthUI();
        return;
    }
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
        if(authIconMobile) {
            authIconMobile.className = 'fa-solid fa-circle-user';
            authIconMobile.style.color = 'var(--color-primary)';
        }
        if(document.getElementById('guest-discount-info')) document.getElementById('guest-discount-info').style.display = 'none';
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
        if(authIconMobile) {
            authIconMobile.className = 'fa-regular fa-user';
            authIconMobile.style.color = 'var(--color-text)';
        }
        if(document.getElementById('guest-discount-info')) document.getElementById('guest-discount-info').style.display = 'block';
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
            if (currentCurrency === 'eur') formattedPoints = Math.round(pointsUsed / RATE_EUR) + ' €';
            else if (currentCurrency === 'usd') formattedPoints = '$' + Math.round(pointsUsed / RATE_USD);
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
        
        // Guest checkout allowed

        
        // Dynamicky obnovíme stav uživatele z Firebase (pokud zrovna potvrdil e-mail v jiné záložce)
        if (window.currentUser && !window.currentUser.emailVerified && window.firebaseAuth && window.firebaseAuth.currentUser) {
            try {
                await window.firebaseAuth.currentUser.reload();
                window.currentUser.emailVerified = window.firebaseAuth.currentUser.emailVerified;
            } catch (e) {
                console.error("Chyba při obnově uživatele:", e);
            }
        }
        
        if (window.currentUser && !window.currentUser.emailVerified) {
            alert(currentLang === 'en' ? "Please verify your email address before making a purchase. Check your inbox (or SPAM folder)." : "Před nákupem prosím ověřte svůj e-mail (zkontrolujte doručenou poštu i složku SPAM). Po potvrzení klikněte znovu na Pokračovat.");
            return;
        }
        
        // Promo kód se bude ukládat až po úspěšném odeslání objednávky
        

        
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

// Sync cart across multiple tabs
window.addEventListener('storage', (e) => {
    if (e.key === 'venvioCart') {
        try {
            const newCart = JSON.parse(e.newValue) || [];
            cart.length = 0;
            cart.push(...newCart);
            updateCartUI(true);
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
    let chatHistory = [];

    if (chatToggle && chatWindow) {
        chatToggle.addEventListener('click', () => {
            chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
        });

        chatClose.addEventListener('click', () => {
            chatWindow.style.display = 'none';
        });

        const sendMessage = async () => {
            const text = chatInput.value.trim();
            if (text) {
                // Sanitize user input to prevent XSS
                const safeText = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
                // Add user message to UI
                const userDiv = document.createElement('div');
                userDiv.style.cssText = 'background: var(--color-primary); color: white; padding: 10px; border-radius: 12px 12px 0 12px; max-width: 85%; font-size: 0.9rem; align-self: flex-end; margin-bottom: 5px;';
                userDiv.textContent = text;
                chatMessages.appendChild(userDiv);
                chatInput.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;

                // Add to history
                chatHistory.push({ role: 'user', content: text });

                // Loading indicator
                const loadingId = 'loading-' + Date.now();
                chatMessages.innerHTML += `
                <div id="${loadingId}" style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 12px 12px 12px 0; max-width: 85%; font-size: 0.9rem; margin-bottom: 5px;">
                    <i class="fa-solid fa-ellipsis fa-fade"></i>
                </div>`;
                chatMessages.scrollTop = chatMessages.scrollHeight;

                try {
                    const response = await fetch('/api/chat', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ messages: chatHistory, lang: currentLang })
                    });
                    
                    if (document.getElementById(loadingId)) document.getElementById(loadingId).remove();

                    if (response.ok) {
                        const data = await response.json();
                        chatHistory.push({ role: 'assistant', content: data.reply });
                        
                        const replyDiv = document.createElement('div');
                        replyDiv.style.cssText = 'background: rgba(255,255,255,0.05); padding: 10px; border-radius: 12px 12px 12px 0; max-width: 85%; font-size: 0.9rem; margin-bottom: 5px; white-space: pre-wrap;';
                        replyDiv.textContent = data.reply;
                        chatMessages.appendChild(replyDiv);
                    } else {
                        throw new Error('API Error');
                    }
                } catch (error) {
                    if (document.getElementById(loadingId)) document.getElementById(loadingId).remove();
                    const whatsappUrl = currentLang === 'en'
                        ? 'https://wa.me/420775104206?text=Hello,%20I%20am%20interested%20in%20a%20new%20website.'
                        : 'https://wa.me/420775104206?text=Dobrý%20den,%20mám%20zájem%20o%20nový%20web.';
                    const errMsg = currentLang === 'en'
                        ? `For a quick response, contact us directly on <a href="${whatsappUrl}" target="_blank" rel="noopener" style="color: #00D2FF; text-decoration: underline;">WhatsApp</a> or write to <a href="mailto:info@venvio.dev" style="color: #00D2FF;">info@venvio.dev</a>.`
                        : `Pro rychlou odpověď nás kontaktujte přímo na <a href="${whatsappUrl}" target="_blank" rel="noopener" style="color: #00D2FF; text-decoration: underline;">WhatsApp</a> nebo napište na <a href="mailto:info@venvio.dev" style="color: #00D2FF;">info@venvio.dev</a>.`;
                    chatMessages.innerHTML += `
                    <div style="background: rgba(0,210,255,0.07); padding: 10px; border-radius: 12px 12px 12px 0; max-width: 95%; font-size: 0.9rem; margin-bottom: 5px; border: 1px solid rgba(0,210,255,0.2);">
                        ${errMsg}
                    </div>`;
                }
            }
        };

        if(chatSend) chatSend.addEventListener('click', sendMessage);
        if(chatInput) chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
});


// Ensure all delayed translations are applied
applyTranslations();

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input[type="email"], input[type="text"]');
    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            if (input.checkValidity() && input.value.trim() !== '') {
                input.style.borderColor = 'var(--color-success)';
                input.style.boxShadow = '0 0 5px rgba(46, 204, 113, 0.3)';
            } else {
                input.style.borderColor = 'rgba(255,255,255,0.1)';
                input.style.boxShadow = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach(card => {
        // Inject glow element
        let glow = document.createElement('div');
        glow.className = 'mouse-glow';
        card.appendChild(glow);

        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            glow.style.setProperty('--mouse-x', `${x}px`);
            glow.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});

// --- MOBILE AUTH FIX ---
const mobileLoginLink = document.getElementById('mobile-login-link');
if (mobileLoginLink) {
    mobileLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        const navLinksEl = document.getElementById('nav-links');
        if (navLinksEl && navLinksEl.classList.contains('mobile-open')) {
            navLinksEl.classList.remove('mobile-open');
        }
        if (authModal) {
            authModal.classList.add('active');
            if (window.currentUser) {
                if (authBodyLogin) authBodyLogin.style.display = 'none';
                if (authBodyProfile) {
                    authBodyProfile.style.display = 'block';
                    if (authProfileName) authProfileName.innerText = window.currentUser.name;
                    if (authProfileEmail) authProfileEmail.innerText = window.currentUser.email;
                    if (authProfilePoints) authProfilePoints.innerText = window.currentUser.points;
                }
            } else {
                window.authMode = "login";
                if (typeof updateAuthModeUI === 'function') updateAuthModeUI();
                if (authBodyLogin) authBodyLogin.style.display = 'block';
                if (authBodyProfile) authBodyProfile.style.display = 'none';
            }
        }
    });
}

if (authBtnMobile) {
    authBtnMobile.addEventListener('click', () => {
        const navLinksEl = document.getElementById('nav-links');
        if (navLinksEl && navLinksEl.classList.contains('mobile-open')) {
            navLinksEl.classList.remove('mobile-open');
        }
        if (authModal) {
            authModal.classList.add('active');
            if (window.currentUser) {
                if (authBodyLogin) authBodyLogin.style.display = 'none';
                if (authBodyProfile) {
                    authBodyProfile.style.display = 'block';
                    if (authProfileName) authProfileName.innerText = window.currentUser.name;
                    if (authProfileEmail) authProfileEmail.innerText = window.currentUser.email;
                    if (authProfilePoints) authProfilePoints.innerText = window.currentUser.points;
                }
            } else {
                window.authMode = "login";
                if (typeof updateAuthModeUI === 'function') updateAuthModeUI();
                if (authBodyLogin) authBodyLogin.style.display = 'block';
                if (authBodyProfile) authBodyProfile.style.display = 'none';
            }
        }
    });
}

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('ServiceWorker registration successful');
    }, err => {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// PDF Generation
function generateInvoicePDF(orderData) {
    if (!window.jspdf || !window.jspdf.jsPDF) {
        console.error("jsPDF nenalezen.");
        return;
    }
    
    // Pomocná funkce pro odstranění diakritiky (nativní jsPDF font nepodporuje české znaky)
    const removeDiacritics = (str) => {
        if (!str) return "";
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    let formattedTotal = orderData.total;
    if (typeof currentCurrency !== 'undefined') {
        if (currentCurrency === 'czk') formattedTotal = formattedTotal.toLocaleString('cs-CZ') + ' CZK';
        else if (currentCurrency === 'eur') formattedTotal = formattedTotal.toLocaleString('en-US') + ' EUR';
        else if (currentCurrency === 'usd') formattedTotal = '$' + formattedTotal.toLocaleString('en-US');
    } else {
        formattedTotal += ' CZK';
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Font
    doc.setFont("helvetica");
    
    // Hlavička
    doc.setFontSize(28);
    doc.setTextColor(0, 112, 186);
    doc.text("Venvio.", 20, 30);
    
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("Profesionalni weby na miru", 20, 38);
    
    // Nadpis objednávky
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.text("Shrnuti objednavky", 130, 30);
    
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("Datum: " + new Date().toLocaleDateString(), 130, 38);
    
    // Čára
    doc.setDrawColor(0, 112, 186);
    doc.setLineWidth(0.5);
    doc.line(20, 45, 190, 45);
    
    // Údaje zákazníka
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Udaje zakaznika:", 20, 60);
    
    doc.setFontSize(11);
    doc.setTextColor(50, 50, 50);
    doc.text("Jmeno / Firma: " + removeDiacritics(orderData.name || "Nezadano"), 20, 68);
    doc.text("E-mail: " + removeDiacritics(orderData.email || "Nezadano"), 20, 75);
    
    // Tabulka hlavička
    doc.setFillColor(0, 112, 186);
    doc.rect(20, 90, 170, 10, "F");
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.text("Polozka", 25, 97);
    doc.text("Mnozstvi", 165, 97);
    
    // Položky
    doc.setTextColor(0, 0, 0);
    let startY = 110;
    if (orderData.items && orderData.items.length > 0) {
        orderData.items.forEach((item) => {
            doc.text(removeDiacritics(item), 25, startY);
            doc.text("1", 170, startY);
            
            // Linka pod položkou
            doc.setDrawColor(220, 220, 220);
            doc.line(20, startY + 5, 190, startY + 5);
            
            startY += 15;
        });
    } else {
        doc.text("Zadne polozky", 25, startY);
        startY += 15;
    }
    
    // Celková cena
    doc.setFontSize(16);
    doc.setTextColor(0, 112, 186);
    doc.text("Celkova cena: " + formattedTotal, 115, startY + 20);
    
    // Patička
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text("Venvio.dev | ICO: 27622444 | Nejsme platci DPH.", 105, 270, { align: "center" });
    doc.text("Toto je pouze informativni shrnuti objednavky, neslouzi jako danovy doklad.", 105, 275, { align: "center" });
    
    doc.save("venvio-objednavka.pdf");
}

// Dynamic additions for success.html
translations.cs['success.bank_title'] = 'Způsob platby';
translations.en['success.bank_title'] = 'Payment Method';
translations.cs['success.bank_acc'] = 'Číslo účtu (CZ):';
translations.en['success.bank_acc'] = 'Account Number (CZ):';
translations.cs['success.bank_iban'] = 'IBAN (Zahraničí):';
translations.en['success.bank_iban'] = 'IBAN (International):';
translations.cs['success.bank_msg'] = 'Zpráva pro příjemce:';
translations.en['success.bank_msg'] = 'Message for Recipient:';
translations.cs['success.bank_msg_val'] = 'Vaše jméno nebo název firmy';
translations.en['success.bank_msg_val'] = 'Your name or company name';

translations.cs['success.paypal_title'] = 'Platba přes PayPal';
translations.en['success.paypal_title'] = 'Payment via PayPal';
translations.cs['success.paypal_desc'] = 'Můžete využít také rychlou platbu na náš PayPal účet:';
translations.en['success.paypal_desc'] = 'You can also use fast payment to our PayPal account:';
translations.cs['success.paypal_btn'] = 'Přejít na PayPal';
translations.en['success.paypal_btn'] = 'Go to PayPal';

if (typeof applyTranslations === 'function') {
// --- Nove preklady ---
translations.cs['compare.title'] = 'Proč si vybrat <span class="gradient-text">Venvio</span>?';
translations.cs['compare.desc'] = 'Podívejte se, jaký je rozdíl mezi námi a běžnou agenturou nebo freelancerem.';
translations.cs['compare.th_feature'] = 'Vlastnost';
translations.cs['compare.th_others'] = 'Běžná agentura';
translations.cs['compare.speed'] = 'Rychlost dodání';
translations.cs['compare.speed_us'] = '<strong>Do 24 hodin</strong>';
translations.cs['compare.speed_them'] = '4 - 8 týdnů';
translations.cs['compare.price'] = 'Cena a rozpočet';
translations.cs['compare.price_us'] = '<strong>Pevná, transparentní</strong>';
translations.cs['compare.price_them'] = 'Hodinová sazba, vícepráce';
translations.cs['compare.seo'] = 'Základní SEO & Rychlost';
translations.cs['compare.seo_us'] = '<i class="fa-solid fa-check text-success"></i> <strong>V ceně balíčku</strong>';
translations.cs['compare.seo_them'] = '<i class="fa-solid fa-xmark text-danger"></i> Často za příplatek';
translations.cs['compare.support'] = 'Technická podpora';
translations.cs['compare.support_us'] = '<strong>VIP podpora (i o víkendu)</strong>';
translations.cs['compare.support_them'] = 'Pouze v pracovní dny';

translations.en['compare.title'] = 'Why choose <span class="gradient-text">Venvio</span>?';
translations.en['compare.desc'] = 'See the difference between us and a regular agency or freelancer.';
translations.en['compare.th_feature'] = 'Feature';
translations.en['compare.th_others'] = 'Regular Agency';
translations.en['compare.speed'] = 'Delivery Speed';
translations.en['compare.speed_us'] = '<strong>Under 24 hours</strong>';
translations.en['compare.speed_them'] = '4 - 8 weeks';
translations.en['compare.price'] = 'Price & Budget';
translations.en['compare.price_us'] = '<strong>Fixed, transparent</strong>';
translations.en['compare.price_them'] = 'Hourly rate, extra costs';
translations.en['compare.seo'] = 'Basic SEO & Speed';
translations.en['compare.seo_us'] = '<i class="fa-solid fa-check text-success"></i> <strong>Included</strong>';
translations.en['compare.seo_them'] = '<i class="fa-solid fa-xmark text-danger"></i> Often costs extra';
translations.en['compare.support'] = 'Tech Support';
translations.en['compare.support_us'] = '<strong>VIP support (incl. weekends)</strong>';
translations.en['compare.support_them'] = 'Workdays only';

translations.cs['team.title'] = 'Kdo za tím <span class="gradient-text">stojí</span>?';
translations.cs['team.desc'] = 'Jsme malý tým nadšenců, kteří věří, že kvalitní web nemusí stát statisíce a trvat měsíce.';
translations.cs['team.role1'] = 'Zakladatel & Lead Developer';
translations.cs['team.bio1'] = 'Specialista na moderní webové technologie. "Mým cílem je, aby si každý podnikatel mohl dovolit rychlý a perfektně optimalizovaný web."';

translations.en['team.title'] = 'Who is <span class="gradient-text">behind</span> this?';
translations.en['team.desc'] = 'We are a small team of enthusiasts who believe a great website shouldn\'t cost a fortune and take months to build.';
translations.en['team.role1'] = 'Founder & Lead Developer';
translations.en['team.bio1'] = 'Specialist in modern web technologies. "My goal is to make fast and perfectly optimized websites accessible to every business owner."';

translations.cs['contact.title'] = 'Ozvěte se <span class="gradient-text">nám</span>';
translations.cs['contact.desc'] = 'Napište nám, nebo si rovnou zarezervujte termín hovoru.';
translations.cs['contact.phone'] = 'Telefon (Po-Pá 9-17)';
translations.cs['contact.email'] = 'E-mail';
translations.cs['contact.wa'] = 'WhatsApp 24/7';
translations.cs['contact.ph_name'] = 'Vaše jméno';
translations.cs['contact.ph_email'] = 'Váš e-mail';
translations.cs['contact.ph_msg'] = 'Jaký projekt máte v plánu?';
translations.cs['contact.submit'] = 'Odeslat zprávu <i class="fa-solid fa-paper-plane"></i>';

translations.en['contact.title'] = 'Get in <span class="gradient-text">touch</span>';
translations.en['contact.desc'] = 'Write to us or book a call right away.';
translations.en['contact.phone'] = 'Phone (Mon-Fri 9-17)';
translations.en['contact.email'] = 'E-mail';
translations.en['contact.wa'] = 'WhatsApp 24/7';
translations.en['contact.ph_name'] = 'Your Name';
translations.en['contact.ph_email'] = 'Your E-mail';
translations.en['contact.ph_msg'] = 'What project do you have in mind?';
translations.en['contact.submit'] = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
translations.cs['nav.compare'] = 'Srovnání';
translations.en['nav.compare'] = 'Compare';
translations.cs['nav.team'] = 'Tým';
translations.en['nav.team'] = 'Team';
translations.cs['nav.contact'] = 'Kontakt';
translations.en['nav.contact'] = 'Contact';
translations.cs['contact.wa_btn'] = 'Napsat zprávu';
translations.en['contact.wa_btn'] = 'Send a message';
    applyTranslations(currentLang);
}

/* Premium UI Interactions */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Vanilla Tilt for Cards
    if (typeof VanillaTilt !== 'undefined' && window.matchMedia("(min-width: 768px)").matches) {
        VanillaTilt.init(document.querySelectorAll(".pricing-card, .feature-card, .portfolio-card"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.3
        });
    }



    // 3. Magnetic Buttons and Nav Links
    const magnets = document.querySelectorAll(".btn, .nav-links a");
    magnets.forEach((magnet) => {
        if(window.matchMedia("(min-width: 768px)").matches) {
            magnet.addEventListener("mousemove", (e) => {
                const position = magnet.getBoundingClientRect();
                const x = e.clientX - position.left - position.width / 2;
                const y = e.clientY - position.top - position.height / 2;
                magnet.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            });
            magnet.addEventListener("mouseleave", () => {
                magnet.style.transform = "translate(0px, 0px)";
            });
        }
    });

    // (Cursor Logic removed)

    // 5. Spotlight Card Effect
    const panels = document.querySelectorAll(".glass-panel");
    panels.forEach(panel => {
        const overlay = document.createElement("div");
        overlay.classList.add("spotlight-overlay");
        panel.appendChild(overlay);

        panel.addEventListener("mousemove", (e) => {
            const rect = panel.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            panel.style.setProperty("--mouse-x", `${x}px`);
            panel.style.setProperty("--mouse-y", `${y}px`);
        });
    });

    // 6. Scroll Progress Bar
    // (Scroll progress & parallax handled by top-level listeners above)

    // 7. (Parallax managed by top-level scroll listener)

    // 8. Typewriter Effect for Hero Badge
    function typeWriterEffect() {
        const typewriterEl = document.getElementById("typewriter-text");
        if (!typewriterEl) return;
        const text = typewriterEl.getAttribute("data-original-text") || typewriterEl.textContent;
        typewriterEl.setAttribute("data-original-text", text);
        typewriterEl.textContent = "";
        let i = 0;
        function type() {
            if (i < text.length) {
                typewriterEl.textContent += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        setTimeout(type, 1000); // Start after 1s delay
    }
    // Need to trigger after translations load, so we call it now and re-call it if language changes
    setTimeout(typeWriterEffect, 100);

    // 9. (Removed Morphing Cursor Logic)

    // 10. Neon Ripple Effect na tlačítkách
    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            const rect = this.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            let ripple = document.createElement("span");
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.classList.add("ripple");
            this.appendChild(ripple);
            setTimeout(() => { ripple.remove(); }, 600);
        });
    });

    // 11. (Removed Scroll Text Reveal)

    // 12. (Removed Follower Cursor)

    // 13. (Removed Ghost Cursor Trail)

    // 6. tsParticles Initialization
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load("particles", {
            fpsLimit: 60,
            interactivity: { detectsOn: "window",
                events: {
                    onHover: { enable: true, mode: "grab" },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, links: { opacity: 0.8 } }
                }
            },
            particles: {
                color: { value: "#00D2FF" },
                links: { color: "#7B61FF", distance: 150, enable: true, opacity: 0.3, width: 1 },
                move: { enable: true, speed: 1 },
                number: { density: { enable: true, area: 800 }, value: window.innerWidth < 768 ? 20 : 60 },
                opacity: { value: 0.5 },
                size: { value: { min: 1, max: 3 } }
            },
            detectRetina: true
        });
    }
});


document.addEventListener('DOMContentLoaded', () => { if(typeof AOS !== 'undefined') AOS.init({ once: true, offset: 50, duration: 800 }); });


/* removed contact form handler completely */
