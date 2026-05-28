const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { cart, customerInfo, lang, currency } = req.body;

        if (!cart || cart.length === 0) {
            return res.status(400).json({ error: 'Košík je prázdný / Cart is empty.' });
        }

        // Vytvoření položek pro Stripe Checkout
        const lineItems = cart.map(item => {
            return {
                price_data: {
                    currency: currency || 'czk',
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: item.price * 100, // Stripe expects amounts in cents/haléře
                },
                quantity: 1,
            };
        });

        // URL pro návrat ze Stripe
        const protocol = req.headers['x-forwarded-proto'] || 'http';
        const host = req.headers['x-forwarded-host'] || req.headers.host;
        const baseUrl = `${protocol}://${host}`;

        // Vytvoření Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            locale: lang === 'en' ? 'en' : 'cs',
            success_url: `${baseUrl}/success.html?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${baseUrl}/cancel.html`,
            customer_email: customerInfo.email,
            metadata: {
                customerName: customerInfo.name,
                customerMessage: customerInfo.message,
                language: lang
            }
        });

        // Vrácení URL relace
        res.status(200).json({ url: session.url });
    } catch (err) {
        console.error('Chyba při platbě:', err);
        res.status(500).json({ error: err.message || 'Neznámá interní chyba serveru.' });
    }
}
