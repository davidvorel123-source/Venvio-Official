import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(req: Request) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'dummy_key',
  });

  try {
    const { businessType, goals } = await req.json();

    if (!businessType || !goals) {
      return NextResponse.json({ error: 'Missing businessType or goals' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Jsi expert na webový design a obchodní strategii pro agenturu Venvio. Tvým úkolem je na základě vstupu klienta (obor podnikání a cíle) navrhnout strukturu webu a doporučit jeden z našich balíčků (Start za 9 900 Kč, Standard za 19 900 Kč, Premium za 29 900 Kč). Odpověz strukturovaně, profesionálně a přesvědčivě (max 3-4 odstavce) a použij HTML formátování (např. <strong> pro tučný text, <ul> a <li> pro seznamy)."
        },
        {
          role: "user",
          content: `Obor podnikání: ${businessType}\nCíle webu: ${goals}`
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const proposal = completion.choices[0]?.message?.content || "Omlouváme se, návrh se nepodařilo vygenerovat.";

    return NextResponse.json({ proposal });
  } catch (error) {
    console.error("OpenAI Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}