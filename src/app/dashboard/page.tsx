"use client";
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulace přihlášení
    setTimeout(() => {
      setUser({ name: "Demo Klient", email: "klient@venvio.dev" });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#060B18', color: '#00D2FF' }}>Načítání klientské zóny...</div>;
  }

  if (!user) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#060B18' }}>
        <div style={{ background: 'rgba(15,22,40,0.8)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Klientský portál Venvio</h1>
          <button style={{ background: '#00D2FF', color: 'black', padding: '0.75rem 1.5rem', borderRadius: '8px', border: 'none', fontWeight: 'bold' }}>Přihlásit se přes Google</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#060B18', color: 'white', padding: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
        <h1 style={{ color: '#00D2FF' }}>Venvio Dashboard</h1>
        <div>Vítejte, {user.name}</div>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <div style={{ background: 'rgba(15,22,40,0.8)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ color: '#7B61FF', marginBottom: '1rem' }}>Stav vašeho projektu</h2>
          <div style={{ background: 'rgba(255,255,255,0.05)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: '60%', height: '100%', background: 'linear-gradient(90deg, #00D2FF, #7B61FF)' }}></div>
          </div>
          <p style={{ marginTop: '1rem', color: '#94A3B8' }}>Aktuální fáze: <strong>Vývoj a kódování (60%)</strong></p>
        </div>
        
        <div style={{ background: 'rgba(15,22,40,0.8)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ color: '#7B61FF', marginBottom: '1rem' }}>Faktury a dokumenty</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between' }}>
              <span>Zálohová faktura - Start</span>
              <span style={{ color: '#00D2FF' }}>Zaplaceno</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}