"use client";
import { useState } from 'react';

export default function AIOnboarding() {
  const [businessType, setBusinessType] = useState('');
  const [goals, setGoals] = useState('');
  const [loading, setLoading] = useState(false);
  const [proposal, setProposal] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/generate-proposal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessType, goals }),
      });
      const data = await res.json();
      if (data.proposal) {
        setProposal(data.proposal);
      }
    } catch (err) {
      console.error(err);
      setProposal("Došlo k chybě při generování návrhu.");
    }
    setLoading(false);
  };

  return (
    <div className="ai-onboarding-container" style={{ background: 'rgba(15, 22, 40, 0.65)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)', marginTop: '2rem' }}>
      <h2 style={{ color: '#00D2FF', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 600 }}>Vygenerovat návrh webu pomocí AI</h2>
      {!proposal ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94A3B8' }}>Váš obor podnikání</label>
            <input 
              type="text" 
              value={businessType} 
              onChange={(e) => setBusinessType(e.target.value)} 
              placeholder="např. Účetní kancelář, Pizzerie..." 
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94A3B8' }}>Hlavní cíl webu</label>
            <input 
              type="text" 
              value={goals} 
              onChange={(e) => setGoals(e.target.value)} 
              placeholder="např. Získat více poptávek, prezentovat služby..." 
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
            />
          </div>
          <button type="submit" disabled={loading} style={{ background: 'linear-gradient(90deg, #00D2FF, #7B61FF)', color: 'white', padding: '0.75rem', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Generuji návrh...' : 'Získat AI Návrh'}
          </button>
        </form>
      ) : (
        <div>
          <div dangerouslySetInnerHTML={{ __html: proposal }} style={{ color: '#F8FAFC', lineHeight: '1.6', marginBottom: '1.5rem' }} />
          <button onClick={() => setProposal(null)} style={{ background: 'transparent', color: '#00D2FF', border: '1px solid #00D2FF', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer' }}>Zkusit znovu</button>
        </div>
      )}
    </div>
  );
}