export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { messages, lang } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: 'Bad Request: missing messages array' });
    }

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    if (!OPENAI_API_KEY) {
        return res.status(500).json({ error: 'Server is missing OpenAI API key.' });
    }

    const systemPromptCS = `Jsi profesionální podpora (chatbot) pro webovou a marketingovou agenturu Venvio. 
Tvá práce je pomáhat návštěvníkům webu, odpovídat na jejich otázky ohledně tvorby webů, našich služeb a motivovat je k nezávazné poptávce.
Naše služby nabízíme 2 způsoby:
1. Interaktivní kalkulačka (Nachází se rovnou tady na hlavní stránce): Zákazník si sám nakliká počet stránek a modulů a hned vidí cenu.
2. Předpřipravené balíčky: Start (5 900 Kč), Standard (12 500 Kč), Premium (od 18 900 Kč).
Všechny weby jsou responzivní, optimalizované pro rychlost a SEO, a doručené velmi rychle.
Buď stručný, přátelský, ale velmi profesionální. Rozhodně nikdy netvrď, že na webu nemáme kalkulačku (máme ji tam).
DŮLEŽITÉ: NEPOUŽÍVEJ Markdown odkazy (jako [odkaz](url)). Pokud zákazník chce začít, poraď mu, ať zascrolluje níže na této stránce na "Interaktivní kalkulačku", kde si web může naklikat a přidat do košíku. Teprve pro dokončení objednávky ho odkaž na ikonku "Košík" vpravo nahoře. CRITICAL RULE: You are a bilingual assistant. You MUST reply in the exact language the user uses (e.g., if they speak English, you MUST reply in English. If Czech, reply in Czech). NEVER refuse to speak English.`;

    const systemPromptEN = `You are a professional support chatbot for Venvio, a web and marketing agency.
Your job is to help website visitors, answer their questions about web design, our services, and motivate them to make a non-binding inquiry.
We offer our services in 2 ways:
1. Interactive Calculator (Located directly on this main page): The customer can select the number of pages and modules and see the estimated price instantly.
2. Predefined packages: Start (5,900 CZK), Standard (12,500 CZK), Premium (from 18,900 CZK).
All websites are responsive, speed and SEO optimized, and delivered very quickly.
Be concise, friendly, but highly professional. Never claim that we don't have a calculator on the website (we do).
IMPORTANT: DO NOT use Markdown links (like [link](url)). If the customer wants to start, tell them to scroll down this page to the "Interactive Calculator" to configure their website and add it to the cart. Only for finishing the order, refer them to the "Cart" icon at the top right. CRITICAL RULE: You are a bilingual assistant. You MUST reply in the exact language the user uses (e.g., if they speak English, you MUST reply in English. If Czech, reply in Czech). NEVER refuse to speak English.`;

    const systemMessage = {
        role: "system",
        content: lang === 'en' ? systemPromptEN : systemPromptCS
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [systemMessage, ...messages],
                max_tokens: 250,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const err = await response.text();
            console.error("OpenAI error:", err);
            return res.status(502).json({ error: 'Error communicating with AI provider.' });
        }

        const data = await response.json();
        const reply = data.choices[0].message.content;

        return res.status(200).json({ reply });
    } catch (error) {
        console.error("Server error:", error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
}
