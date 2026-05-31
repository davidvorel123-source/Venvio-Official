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
Naše balíčky služeb:
1. Start (5 900 Kč) - ideální pro začátky (One-page web, 1-3 sekce).
2. Standard (12 500 Kč) - pro firmy, které to myslí vážně (Multi-page web, blog).
3. Premium (od 18 900 Kč) - komplexní řešení na míru, e-shopy, rezervační systémy.
Všechny weby jsou responzivní, optimalizované pro rychlost a SEO, a doručené velmi rychle.
Buď stručný, přátelský, ale velmi profesionální.
DŮLEŽITÉ: NEPOUŽÍVEJ Markdown odkazy (jako [odkaz](url)). Místo toho lidem řekni, ať kliknou na ikonku "Košík" vpravo nahoře v menu a vyplní nezávaznou objednávku. Používej emotikony. Odpovídej vždy česky.`;

    const systemPromptEN = `You are a professional support chatbot for Venvio, a web and marketing agency.
Your job is to help website visitors, answer their questions about web design, our services, and motivate them to make a non-binding inquiry.
Our service packages:
1. Start (5,900 CZK) - ideal for starters (One-page website).
2. Standard (12,500 CZK) - for serious businesses (Multi-page website).
3. Premium (from 18,900 CZK) - custom complex solutions, e-commerce, booking systems.
All websites are responsive, speed and SEO optimized, and delivered very quickly.
Be concise, friendly, but highly professional.
IMPORTANT: DO NOT use Markdown links (like [link](url)). Instead, tell people to click the "Cart" icon at the top right of the menu and fill out a non-binding order. Use emojis. Always reply in English.`;

    const systemMessage = {
        role: "system",
        content: lang === 'en' ? systemPromptEN : systemPromptCS
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": \`Bearer \${OPENAI_API_KEY}\`
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
