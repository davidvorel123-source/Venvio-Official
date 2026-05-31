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
Naše služby:
1. One-page web (11 990 Kč) - ideální pro začátky.
2. Multi-page web (24 990 Kč) - pro firmy, které to myslí vážně.
3. E-shop (49 990 Kč) - pro prodej produktů.
Všechny weby jsou responzivní, optimalizované pro rychlost a SEO, a doručené velmi rychle.
Buď stručný, přátelský, ale velmi profesionální. Odkazuj je na formulář v košíku, pokud mají zájem. Používej emotikony. Odpovídej vždy česky.`;

    const systemPromptEN = `You are a professional support chatbot for Venvio, a web and marketing agency.
Your job is to help website visitors, answer their questions about web design, our services, and motivate them to make a non-binding inquiry.
Our services:
1. One-page website (11,990 CZK) - ideal for starters.
2. Multi-page website (24,990 CZK) - for serious businesses.
3. E-commerce (49,990 CZK) - for selling products.
All websites are responsive, speed and SEO optimized, and delivered very quickly.
Be concise, friendly, but highly professional. Refer them to the cart form if they are interested. Use emojis. Always reply in English.`;

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
