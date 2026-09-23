"use client";
// @ts-nocheck
import AIOnboarding from "@/components/AIOnboarding";
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init({ once: true, offset: 50, duration: 800 });
    } else {
      setTimeout(() => { if (typeof window !== 'undefined' && (window as any).AOS) (window as any).AOS.init({ once: true, offset: 50, duration: 800 }); }, 1000);
    }
  }, []);
  return (
    <main>

    <a href="#main-content" className="skip-link">Přeskočit na obsah</a>
    {/*  */}
    <div className="noise-overlay"></div>
    {/*  */}
    <div className="scroll-progress" id="scroll-progress"></div>

    {/*  */}
    <div className="particles" id="particles"></div>

    {/*  */}
    <nav className="navbar" id="navbar">
        <div className="nav-container">
            <a href="#" className="logo">
                <span className="logo-icon"><i className="fa-solid fa-bolt"></i></span>
                VENVIO
            </a>
            <ul className="nav-links" id="nav-links">
                <li><a href="#sluzby" data-i18n="nav.services">Služby</a></li>
                <li><a href="#portfolio" data-i18n="nav.portfolio">Reference</a></li>
                <li><a href="#cenik" data-i18n="nav.pricing">Ceník</a></li>
                <li><a href="#jak-to-funguje" data-i18n="nav.how">Jak to funguje</a></li>
                <li><a href="#o-nas" data-i18n="nav.about">O nás</a></li>
                <li><a href="#kontakt" data-i18n="nav.contact">Kontakt</a></li>
                <li className="desktop-only"><a href="#kontakt" className="btn btn-primary btn-glow" style={{"padding":"0.5rem 1.2rem","fontSize":"0.9rem","marginLeft":"1rem"}}><i className="fa-solid fa-paper-plane"></i> <span data-i18n="nav.cta">Poptat projekt</span></a></li>
                <li className="mobile-only-link"><a href="#" id="mobile-login-link" style={{"color":"var(--color-primary)","fontWeight":"bold"}}><i className="fa-solid fa-user"></i> <span data-i18n="auth.title">Klientská sekce</span></a></li>
                <li className="mobile-switchers-container">
                    <div style={{"display":"flex","gap":"0.5rem","justifyContent":"center","marginTop":"1rem","alignItems":"center","flexWrap":"wrap"}}>
                        <button id="theme-toggle-mobile" className="btn-icon" aria-label="Toggle Theme" style={{"background":"transparent","border":"none","color":"var(--color-text)","fontSize":"1.2rem","cursor":"pointer"}}>
                            <i className="fa-solid fa-moon"></i>
                        </button>
                        <div className="lang-switcher">
                            <button className="lang-btn active" data-lang="cs"><img src="https://flagcdn.com/w20/cz.png" alt="" style={{verticalAlign: "middle", marginRight: "5px"}} />CZ</button>
                            <button className="lang-btn" data-lang="en"><img src="https://flagcdn.com/w20/gb.png" alt="" style={{verticalAlign: "middle", marginRight: "5px"}} />EN</button>
                        </div>
                        <div className="lang-switcher">
                            <button className="curr-btn active" data-curr="czk">Kč</button>
                            <button className="curr-btn" data-curr="eur">€</button>
                            <button className="curr-btn" data-curr="usd">$</button>
                        </div>
                        <button id="auth-btn-mobile" className="btn-icon auth-btn" aria-label="Login" style={{"display":"none","background":"transparent","border":"none","color":"var(--color-text)","fontSize":"1.2rem","cursor":"pointer"}}>
                            <i className="fa-regular fa-user" id="auth-icon-mobile"></i>
                        </button>
                    </div>
                </li>
            </ul>
            <div className="nav-actions">
                  <div style={{"display":"flex","gap":"0.5rem","alignItems":"center"}}>
                      <button id="theme-toggle" className="btn-icon" aria-label="Toggle Theme" style={{"background":"transparent","border":"none","color":"var(--color-text)","fontSize":"1.2rem","cursor":"pointer"}}>
                          <i className="fa-solid fa-moon"></i>
                      </button>
                      <div className="lang-switcher">
                        <button className="lang-btn active" data-lang="cs"><img src="https://flagcdn.com/w20/cz.png" alt="" style={{verticalAlign: "middle", marginRight: "5px"}} />CZ</button>
                        <button className="lang-btn" data-lang="en"><img src="https://flagcdn.com/w20/gb.png" alt="" style={{verticalAlign: "middle", marginRight: "5px"}} />EN</button>
                    </div>
                    <div className="lang-switcher">
                        <button className="curr-btn active" data-curr="czk">Kč</button>
                        <button className="curr-btn" data-curr="eur">€</button>
                        <button className="curr-btn" data-curr="usd">$</button>
                    </div>
                    <button id="auth-btn" className="btn-icon auth-btn" aria-label="Login" style={{"display":"none","background":"transparent","border":"none","color":"var(--color-text)","fontSize":"1.2rem","cursor":"pointer"}}>
                        <i className="fa-regular fa-user" id="auth-icon"></i>
                    </button>
                </div>
                <button id="cart-btn" className="cart-btn" style={{"display":"none"}}>
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span data-i18n="nav.cart">Košík</span> <span id="cart-count" className="cart-badge">0</span>
                </button>
                <button className="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Menu" aria-expanded="false" style={{"background":"transparent","border":"none"}}>
                    <span></span><span></span><span></span></button>
            </div>
        </div>
    </nav>

    {/*  */}
    <header className="hero">
        <div className="mesh-bg"></div>
        <div className="hero-bg-glow"></div>
        <div className="hero-bg-glow hero-bg-glow-2"></div>
        <div className="container hero-content">
            <span className="hero-badge fade-in-up" style={{"display":"inline-flex","alignItems":"center"}}><span className="hero-badge-pulse"></span><span id="typewriter-text" data-i18n="hero.badge">⚡ Express webové řešení</span><span className="cursor-blink">_</span></span>
            <h1 className="fade-in-up" data-aos="fade-up" data-i18n="hero.title">Profesionální web pro vaši firmu. <br /> <span className="liquid-text">Hotový už do 24 hodin.</span></h1>
            <p className="fade-in-up delay-2" data-i18n="hero.desc">Moderní webové stránky s pevnou cenou, rychlým dodáním a kompletním spuštěním.</p>
            <div className="hero-actions fade-in-up delay-3">
                <a href="#rozcestnik" className="btn btn-primary btn-glow"><i className="fa-solid fa-rocket"></i> <span data-i18n="hero.btn_pkg">Chci nový web</span></a>
                <a href="#portfolio" className="btn btn-outline"><i className="fa-solid fa-eye"></i> <span data-i18n="hero.btn_portfolio">Prohlédnout reference</span></a>
            </div>
            <div className="hero-trust fade-in-up delay-4">
                <div className="trust-item"><i className="fa-solid fa-tag"></i> <span data-i18n="hero.trust1">Od 9 900 Kč</span></div>
                <div className="trust-item"><i className="fa-solid fa-bolt"></i> <span data-i18n="hero.trust2">Dodání od 24 hodin</span></div>
                <div className="trust-item"><i className="fa-solid fa-check-double"></i> <span data-i18n="hero.trust3">Kompletně na klíč</span></div>
            </div>
        </div>
        <div className="hero-scroll-indicator">
            <i className="fa-solid fa-chevron-down"></i>
        </div>
    </header>

    {/*  */}
    <div className="marquee-section">
        <div className="marquee-content">
            <span><i className="fa-brands fa-react"></i> React</span>
            <span><i className="fa-brands fa-node-js"></i> Node.js</span>
            <span><i className="fa-brands fa-aws"></i> AWS Cloud</span>
            <span><i className="fa-brands fa-figma"></i> Figma Design</span>
            <span><i className="fa-brands fa-stripe"></i> Stripe API</span>
            <span><i className="fa-brands fa-google"></i> Google Cloud</span>
            {/*  */}
            <span aria-hidden="true"><i className="fa-brands fa-react"></i> React</span>
            <span aria-hidden="true"><i className="fa-brands fa-node-js"></i> Node.js</span>
            <span aria-hidden="true"><i className="fa-brands fa-aws"></i> AWS Cloud</span>
            <span aria-hidden="true"><i className="fa-brands fa-figma"></i> Figma Design</span>
            <span aria-hidden="true"><i className="fa-brands fa-stripe"></i> Stripe API</span>
            <span aria-hidden="true"><i className="fa-brands fa-google"></i> Google Cloud</span>
        </div>
    </div>

    <main id="main-content">
    {/*  */}
    <section className="stats-section">
        <div className="container">
            <div className="stats-grid">
                <div className="stat-item glass-panel fade-in-up">
                    <div className="stat-number" data-count="50">0</div>
                    <div className="stat-plus">+</div>
                    <div className="stat-label" data-i18n="stats.projects">Dokončených projektů</div>
                </div>
                <div className="stat-item glass-panel fade-in-up delay-1">
                    <div className="stat-number" data-count="24">0</div>
                    <div className="stat-plus">h</div>
                    <div className="stat-label" data-i18n="stats.delivery">Průměrná doba dodání</div>
                </div>
                <div className="stat-item glass-panel fade-in-up delay-2">
                    <div className="stat-number" data-count="100">0</div>
                    <div className="stat-plus">%</div>
                    <div className="stat-label" data-i18n="stats.satisfaction">Spokojenost klientů</div>
                </div>
                <div className="stat-item glass-panel fade-in-up delay-3">
                    <div className="stat-number" data-count="3">0</div>
                    <div className="stat-plus">+</div>
                    <div className="stat-label" data-i18n="stats.years">Roky zkušeností</div>
                </div>
            </div>

    {/*  */}
    <AIOnboarding />`n      <section id="sluzby" className="section">
        <div className="container">
            <div className="section-header text-center fade-in-up" data-aos="fade-up">
                <h2 data-i18n="rozcestnik.title">Vyberte si řešení</h2>
                <p data-i18n="rozcestnik.desc">Hned na začátku vás nasměrujeme přesně tam, kam potřebujete.</p>
            </div>
            <div className="grid grid-3">
                {/*  */}
                <div className="service-card fade-in-up" data-aos="fade-up" data-aos-delay="100">
                    <div className="service-icon"><i className="fa-solid fa-laptop-code"></i></div>
                    <h3 data-i18n="rozcestnik.web_title">Potřebuji nový web</h3>
                    <p data-i18n="rozcestnik.web_desc" style={{"flexGrow":"1"}}>Pro živnostníky, restaurace, služby a menší firmy.</p>
                    <div style={{"marginTop":"1.5rem","fontWeight":"bold","color":"var(--color-text)","marginBottom":"1rem"}} data-i18n="rozcestnik.web_price">Web od 9 900 Kč</div>
                    <a href="#cenik" className="btn btn-outline" style={{"width":"100%","display":"flex","justifyContent":"center"}} data-i18n="rozcestnik.web_btn">Prohlédnout webové stránky <i className="fa-solid fa-arrow-right" style={{"marginLeft":"8px"}}></i></a>
                </div>
                {/*  */}
                <div className="service-card fade-in-up" data-aos="fade-up" data-aos-delay="200">
                    <div className="service-icon"><i className="fa-solid fa-mobile-screen-button"></i></div>
                    <h3 data-i18n="rozcestnik.app_title">Potřebuji aplikaci</h3>
                    <p data-i18n="rozcestnik.app_desc" style={{"flexGrow":"1"}}>Portál, rezervační systém nebo interní aplikace vytvořená na míru.</p>
                    <div style={{"marginTop":"1.5rem","fontWeight":"bold","color":"var(--color-text)","marginBottom":"1rem"}} data-i18n="rozcestnik.app_price">Vývoj od 49 900 Kč</div>
                    <a href="#dalsi-sluzby" className="btn btn-outline" style={{"width":"100%","display":"flex","justifyContent":"center"}} data-i18n="rozcestnik.app_btn">Webové aplikace <i className="fa-solid fa-arrow-right" style={{"marginLeft":"8px"}}></i></a>
                </div>
                {/*  */}
                <div className="service-card fade-in-up" data-aos="fade-up" data-aos-delay="300">
                    <div className="service-icon"><i className="fa-solid fa-robot"></i></div>
                    <h3 data-i18n="rozcestnik.auto_title">Chci automatizovat firmu</h3>
                    <p data-i18n="rozcestnik.auto_desc" style={{"flexGrow":"1"}}>AI asistenti, propojení systémů a automatizace opakovaných procesů.</p>
                    <div style={{"marginTop":"1.5rem","fontWeight":"bold","color":"var(--color-text)","marginBottom":"1rem"}} data-i18n="rozcestnik.auto_price">Řešení od 4 900 Kč</div>
                    <a href="#dalsi-sluzby" className="btn btn-outline" style={{"width":"100%","display":"flex","justifyContent":"center"}} data-i18n="rozcestnik.auto_btn">AI a automatizace <i className="fa-solid fa-arrow-right" style={{"marginLeft":"8px"}}></i></a>
                </div>
            </div>
        </div>
    </section>
        </div>
    </section>
    {/*  */}
    <section id="vyhody" className="section">
        <div className="container">
            <div className="section-header fade-in-up" data-aos="fade-right">
                <span className="section-badge" data-i18n="feature.badge">💡 Proč Venvio</span>
                <h2 data-i18n="feature.main_title">Proč si vybrat nás?</h2>
            </div>

            <div className="features-grid">
                <div className="feature-card glass-panel fade-in-up delay-1" data-aos="fade-up">
                    <div className="feature-icon-box"><i className="fa-solid fa-bolt"></i></div>
                    <h3 data-i18n="feature.speed_title">Rychlé dodání</h3>
                    <p data-i18n="feature.speed_desc">Web může být spuštěný již do 24 hodin od předání podkladů.</p>
                </div>
                <div className="feature-card glass-panel fade-in-up delay-2" data-aos="fade-up">
                    <div className="feature-icon-box"><i className="fa-solid fa-tag"></i></div>
                    <h3 data-i18n="feature.price_title">Pevná cena</h3>
                    <p data-i18n="feature.price_desc">Předem víte, kolik bude projekt stát. Žádné skryté poplatky.</p>
                </div>
                <div className="feature-card glass-panel fade-in-up delay-3" data-aos="fade-up">
                    <div className="feature-icon-box"><i className="fa-solid fa-cubes"></i></div>
                    <h3 data-i18n="feature.complete_title">Kompletní realizace</h3>
                    <p data-i18n="feature.complete_desc">Design, vývoj, responzivita, základní SEO i spuštění na klíč.</p>
                </div>
                <div className="feature-card glass-panel fade-in-up delay-4" data-aos="fade-up">
                    <div className="feature-icon-box"><i className="fa-solid fa-headset"></i></div>
                    <h3 data-i18n="feature.support_title">Podpora po spuštění</h3>
                    <p data-i18n="feature.support_desc">Webem spolupráce nekončí. Jsme tu pro vás i s úpravami.</p>
                </div>
            </div>
        </div>
    </section>
    {/*  */}
    <section id="jak-to-funguje" className="section dark-section">
        <div className="container">
            <div className="section-header fade-in-up" data-aos="zoom-in">
                <span className="section-badge" data-i18n="process.badge">🛠️ Postup</span>
                <h2 data-i18n="process.title">Jak spolupráce probíhá</h2>
            </div>
            <div className="process-timeline">
                <div className="process-step fade-in-up delay-1" data-aos="fade-up">
                    <div className="step-number" data-aos="fade-up">01</div>
                    <div className="step-content glass-panel" data-aos="fade-up">
                        <h3 data-i18n="process.s1_title">Vyberete řešení</h3>
                    </div>
                </div>
                <div className="process-step fade-in-up delay-2" data-aos="fade-up">
                    <div className="step-number" data-aos="fade-up">02</div>
                    <div className="step-content glass-panel" data-aos="fade-up">
                        <h3 data-i18n="process.s2_title">Pošlete nám podklady</h3>
                    </div>
                </div>
                <div className="process-step fade-in-up delay-3" data-aos="fade-up">
                    <div className="step-number" data-aos="fade-up">03</div>
                    <div className="step-content glass-panel" data-aos="fade-up">
                        <h3 data-i18n="process.s3_title">Připravíme web</h3>
                    </div>
                </div>
                <div className="process-step fade-in-up delay-4" data-aos="fade-up">
                    <div className="step-number" data-aos="fade-up">04</div>
                    <div className="step-content glass-panel" data-aos="fade-up">
                        <h3 data-i18n="process.s4_title">Schválíte a spustíme</h3>
                    </div>
                </div>
            </div>
            <div style={{"textAlign":"center","marginTop":"3rem"}} className="fade-in-up delay-4">
                <p style={{"marginBottom":"1rem","color":"var(--color-text-muted)"}} data-i18n="process.help_desc">Nevíte, který balíček potřebujete?</p>
                <a href="#kontakt" className="btn btn-outline" data-i18n="process.help_btn">Nezávazně se poradit</a>
            </div>
        </div>
    </section>

    {/*  */}
    <section id="porovnani" className="section dark-section">
        <div className="container">
            <div className="section-header fade-in-up" data-aos="fade-up">
                <h2 data-i18n="compare.title">Proč si vybrat <span className="gradient-text">Venvio</span>?</h2>
                <p data-i18n="compare.desc">Podívejte se, jaký je rozdíl mezi námi a běžnou agenturou nebo freelancerem.</p>
            </div>
            
            <div className="comparison-table-wrapper fade-in-up delay-1" data-aos="fade-up">
                <table className="comparison-table" aria-label="Srovnání Venvio vs. běžná agentura">
                    <thead>
                        <tr>
                            <th scope="col" data-i18n="compare.th_feature">Vlastnost</th>
                            <th scope="col" className="highlight-col"><strong>Venvio</strong></th>
                            <th scope="col" data-i18n="compare.th_others">Běžná agentura</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" data-i18n="compare.speed">Rychlost dodání</th>
                            <td className="highlight-col" data-i18n="compare.speed_us"><strong>Do 24 hodin</strong></td>
                            <td data-i18n="compare.speed_them">4 - 8 týdnů</td>
                        </tr>
                        <tr>
                            <th scope="row" data-i18n="compare.price">Cena a rozpočet</th>
                            <td className="highlight-col" data-i18n="compare.price_us"><strong>Pevná a transparentní</strong></td>
                            <td data-i18n="compare.price_them">Hodinová sazba, vícepráce</td>
                        </tr>
                        <tr>
                            <th scope="row" data-i18n="compare.seo">Základní SEO a Rychlost</th>
                            <td className="highlight-col" data-i18n="compare.seo_us"><i className="fa-solid fa-check" style={{"color":"#2ed573"}}></i> <strong>V ceně balíčku</strong></td>
                            <td data-i18n="compare.seo_them"><i className="fa-solid fa-xmark" style={{"color":"#ff4757"}}></i> Často za příplatek</td>
                        </tr>
                        <tr>
                            <th scope="row" data-i18n="compare.support">Technická podpora</th>
                            <td className="highlight-col" data-i18n="compare.support_us"><strong>VIP podpora (i o víkendu)</strong></td>
                            <td data-i18n="compare.support_them">Pouze v pracovní dny</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    {/*  */}
    <section id="portfolio" className="section">
        <div className="container">
            <div className="section-header fade-in-up" data-aos="zoom-in">
                <span className="section-badge" data-i18n="portfolio.badge">🖼️ Portfolio</span>
                <h2 data-i18n="portfolio.title">Naše Ukázky</h2>
                <p data-i18n="portfolio.desc">Podívejte se na ukázkové projekty, které jsme připravili.</p>
            </div>
            
            <div className="portfolio-grid">
                {/*  */}
                <div className="portfolio-card glass-panel fade-in-up delay-1" data-aos="fade-up">
                    <div className="portfolio-img">
                        <img loading="lazy" src="/assets/crush-burger.jpg" alt="Crush Burger" width="600" height="400" />
                        <div className="portfolio-overlay">
                            <a href="https://venvio-crush-burger.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm"><i className="fa-solid fa-arrow-up-right-from-square"></i> <span data-i18n="portfolio.btn">Zobrazit web</span></a>
                        </div>
                        <div className="portfolio-type-badge" data-i18n="portfolio.multi">Vícestránkový</div>
                    </div>
                    <div className="portfolio-info">
                        <h3>CRUSH Burger</h3>
                        <p data-i18n="portfolio.p1_desc">Firemní web pro moderní burger restauraci</p>
                        <ul style={{"listStyle":"none","padding":"0","marginTop":"1rem","color":"var(--color-text-muted)","fontSize":"0.9rem"}}>
                            <li style={{"marginBottom":"0.3rem"}}><i className="fa-solid fa-check" style={{"color":"var(--color-primary)","marginRight":"5px"}}></i> <span data-i18n="portfolio.p1_f1">Web na míru</span></li>
                            <li style={{"marginBottom":"0.3rem"}}><i className="fa-solid fa-check" style={{"color":"var(--color-primary)","marginRight":"5px"}}></i> <span data-i18n="portfolio.p1_f2">5 podstránek</span></li>
                            <li style={{"marginBottom":"0.3rem"}}><i className="fa-solid fa-check" style={{"color":"var(--color-primary)","marginRight":"5px"}}></i> <span data-i18n="portfolio.p1_f3">Responzivní design</span></li>
                        </ul>
                    </div>
                </div>

                {/*  */}
                <div className="portfolio-card glass-panel fade-in-up delay-2" data-aos="fade-up">
                    <div className="portfolio-img">
                        <img loading="lazy" src="/assets/lumiere-cafe.jpg" alt="Lumiere Cafe" width="600" height="400" />
                        <div className="portfolio-overlay">
                            <a href="https://venvio-lumiere-cafe.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm"><i className="fa-solid fa-arrow-up-right-from-square"></i> <span data-i18n="portfolio.btn">Zobrazit web</span></a>
                        </div>
                        <div className="portfolio-type-badge" data-i18n="portfolio.onepage">One-page</div>
                    </div>
                    <div className="portfolio-info">
                        <h3>Lumière Cafe</h3>
                        <p data-i18n="portfolio.p2_desc">Elegantní prezentace prémiové kavárny</p>
                        <ul style={{"listStyle":"none","padding":"0","marginTop":"1rem","color":"var(--color-text-muted)","fontSize":"0.9rem"}}>
                            <li style={{"marginBottom":"0.3rem"}}><i className="fa-solid fa-check" style={{"color":"var(--color-primary)","marginRight":"5px"}}></i> <span data-i18n="portfolio.p2_f1">Jednostránkový web (One-page)</span></li>
                            <li style={{"marginBottom":"0.3rem"}}><i className="fa-solid fa-check" style={{"color":"var(--color-primary)","marginRight":"5px"}}></i> <span data-i18n="portfolio.p2_f2">Nápojový lístek</span></li>
                            <li style={{"marginBottom":"0.3rem"}}><i className="fa-solid fa-check" style={{"color":"var(--color-primary)","marginRight":"5px"}}></i> <span data-i18n="portfolio.p2_f3">Google Mapy</span></li>
                        </ul>
                    </div>
                </div>

                {/*  */}
                <div className="portfolio-card glass-panel fade-in-up delay-3" data-aos="fade-up">
                    <div className="portfolio-img">
                        <img loading="lazy" src="/assets/aura-dining.jpg" alt="Aura Fine Dining" width="600" height="400" />
                        <div className="portfolio-overlay">
                            <a href="https://venvio-aura-fine-dinings.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm"><i className="fa-solid fa-arrow-up-right-from-square"></i> <span data-i18n="portfolio.btn">Zobrazit web</span></a>
                        </div>
                        <div className="portfolio-type-badge" data-i18n="portfolio.onepage">One-page</div>
                    </div>
                    <div className="portfolio-info">
                        <h3>Aura Fine Dining</h3>
                        <p data-i18n="portfolio.p3_desc">Luxusní web s rezervačním systémem</p>
                        <ul style={{"listStyle":"none","padding":"0","marginTop":"1rem","color":"var(--color-text-muted)","fontSize":"0.9rem"}}>
                            <li style={{"marginBottom":"0.3rem"}}><i className="fa-solid fa-check" style={{"color":"var(--color-primary)","marginRight":"5px"}}></i> <span data-i18n="portfolio.p3_f1">Web na míru</span></li>
                            <li style={{"marginBottom":"0.3rem"}}><i className="fa-solid fa-check" style={{"color":"var(--color-primary)","marginRight":"5px"}}></i> <span data-i18n="portfolio.p3_f2">Rezervační systém</span></li>
                            <li style={{"marginBottom":"0.3rem"}}><i className="fa-solid fa-check" style={{"color":"var(--color-primary)","marginRight":"5px"}}></i> <span data-i18n="portfolio.p3_f3">SEO optimalizace</span></li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    </section>

    {/*  */}
    <section id="kalkulacka" className="section" style={{"paddingBottom":"2rem","position":"relative","overflow":"hidden"}}>
        <div className="hero-bg-glow" style={{"top":"-20%","left":"-10%","opacity":"1"}}></div><div className="hero-bg-glow hero-bg-glow-2" style={{"bottom":"-20%","right":"-10%","opacity":"1"}}></div>
        <div className="container">
            <div className="section-header fade-in-up" data-aos="fade-right">
                <span className="section-badge" data-i18n="calc.badge">💡 Odhad ceny</span>
                <h2 data-i18n="calc.title">Kalkulačka ceny</h2>
                <p data-i18n="calc.desc">Spočítejte si hrubý odhad vašeho projektu na míru.</p>
            </div>
            <div className="calc-container glass-panel fade-in-up delay-1" data-aos="fade-up" style={{"backdropFilter":"none","background":"rgba(15, 22, 40, 0.1)","border":"1px solid rgba(0, 210, 255, 0.3)","boxShadow":"0 0 30px rgba(0, 210, 255, 0.1)"}}>
                <div className="calc-group">
                    <label><span data-i18n="calc.pages">Počet stránek/podstránek:</span> <span id="calc-pages-val" style={{"color":"var(--color-primary)","fontWeight":"700"}}>1</span></label>
                    <input type="range" id="calc-pages" min="1" max="20" defaultValue="1" className="calc-range" />
                </div>
                <div className="calc-checkboxes">
                    <label className="calc-checkbox-label">
                        <input type="checkbox" id="calc-cms" defaultValue="15000" />
                        <span className="custom-checkbox"></span>
                        <span data-i18n="calc.opt_cms">Vlastní Administrace (CMS)</span>
                    </label>
                    <label className="calc-checkbox-label">
                        <input type="checkbox" id="calc-chat" defaultValue="8000" />
                        <span className="custom-checkbox"></span>
                        <span data-i18n="calc.opt_chat">AI Chatbot Asistent</span>
                    </label>
                    <label className="calc-checkbox-label">
                        <input type="checkbox" id="calc-eshop" defaultValue="25000" />
                        <span className="custom-checkbox"></span>
                        <span data-i18n="calc.opt_eshop">E-shop Modul (Platby)</span>
                    </label>
                </div>
                <div className="calc-result">
                    <h3 data-i18n="calc.total_est">Odhadovaná cena:</h3>
                    <div className="calc-price" id="calc-total">9 900 Kč</div>
                    <div className="calc-eta" style={{"marginTop":"1rem","color":"var(--color-text-muted)","fontSize":"0.95rem"}}>
                        <i className="fa-solid fa-clock" style={{"color":"var(--color-primary)","marginRight":"5px"}}></i>
                            <span><i className="fa-regular fa-clock"></i> <span data-i18n="calc.eta">Odhad dodání:</span> <strong id="calc-eta-val">1-2 týdny</strong></span>
                    </div>
                    <a href="#kontakt" className="btn btn-primary" id="calc-add-to-cart" style={{"marginTop":"1.5rem","width":"100%","boxShadow":"0 4px 15px rgba(0, 210, 255, 0.3)","display":"flex","justifyContent":"center"}} onClick={() => {}}>Mám zájem</a>
                </div>
            </div>
        </div>
    </section>

    

    {/*  */}
    <section id="cenik" className="section dark-section">
        <div className="container">
            <div className="section-header fade-in-up" data-aos="zoom-in">
                <span className="section-badge" data-i18n="pricing.badge">💎 Ceník</span>
                <h2 data-i18n="pricing.title">Ceník webů</h2>
                <p data-i18n="pricing.desc">Vyberte si řešení, které odpovídá vašim potřebám.</p>
            </div>
            
            <div className="pricing-grid">
                {/*  */}
                <div className="pricing-card glass-panel fade-in-up delay-1" data-aos="fade-up">
                    <div className="pricing-header">
                        <span className="badge" data-i18n="pricing.badge_24">DO 24 HODIN</span>
                        <h3>Express Start</h3>
                        <div className="price" data-price-target="pkg-start">9 900 Kč</div>
                        <p className="ideal-for" data-i18n="pkg.start.ideal">Ideální pro: Restaurace, kavárny, řemeslníky a lokální služby, které potřebují okamžitou vizitku na internetu.</p>
                    </div>
                    <ul className="pricing-features">
                        <li data-i18n="pkg.start.f1">Moderní jednostránkový web (One-page) pro mobilní telefony</li>
                        <li data-i18n="pkg.start.f2">Důležité sekce: O nás, Nabídka, Ceník, Kontakt</li>
                        <li data-i18n="pkg.start.f3">Propojení na Google Mapy a sociální sítě</li>
                        <li data-i18n="pkg.start.f4">Základní technické SEO</li>
                        <li data-i18n="pkg.start.f5">Spuštění projektu do 24 hodin od podkladů</li>
                    </ul>
                    <a href="#kontakt" className="btn btn-primary btn-block" onClick={() => {}} style={{"display":"flex","justifyContent":"center"}} data-i18n="pkg.btn_add">Mám zájem</a>
                </div>

                {/*  */}
                <div className="pricing-card glass-panel popular fade-in-up delay-2" data-aos="fade-up">
                    <div className="popular-tag" data-i18n="pricing.popular">Nejprodávanější</div>
                    <div className="pricing-header">
                        <span className="badge" data-i18n="pricing.badge_48">DO 48 HODIN</span>
                        <h3>Express Standard</h3>
                        <div className="price" data-price-target="pkg-standard">19 900 Kč</div>
                        <p className="ideal-for" data-i18n="pkg.std.ideal">Ideální pro: Rostoucí firmy a živnostníky, kteří chtějí detailně prezentovat více služeb nebo své reference.</p>
                    </div>
                    <ul className="pricing-features">
                        <li data-i18n="pkg.std.f1">Vícestránkový web (rozsah až 5 samostatných podstránek)</li>
                        <li data-i18n="pkg.std.f2">Pokročilý poptávkový či rezervační formulář</li>
                        <li data-i18n="pkg.std.f3">Přehledná a logická navigace</li>
                        <li data-i18n="pkg.std.f4">Nasazení analytických nástrojů (Google Analytics)</li>
                        <li data-i18n="pkg.std.f5">Kompletní realizace a spuštění do 48 hodin</li>
                    </ul>
                    <a href="#kontakt" className="btn btn-primary btn-block" onClick={() => {}} style={{"display":"flex","justifyContent":"center"}} data-i18n="pkg.btn_add">Mám zájem</a>
                </div>

                {/*  */}
                <div className="pricing-card glass-panel fade-in-up delay-3" data-aos="fade-up">
                    <div className="pricing-header">
                        <span className="badge" data-i18n="pricing.badge_ind">INDIVIDUÁLNÍ</span>
                        <h3>Express Premium</h3>
                        <div className="price" data-price-target="pkg-premium">od 29 900 Kč</div>
                        <p className="ideal-for" data-i18n="pkg.prem.ideal">Ideální pro: Náročnější klienty, kteří vyžadují neomezený rozsah obsahu a nadstandardní interaktivní funkce.</p>
                    </div>
                    <ul className="pricing-features">
                        <li data-i18n="pkg.prem.f1">Neomezené množství podstránek s architekturou na míru</li>
                        <li data-i18n="pkg.prem.f2">Pokročilé dynamické prvky a animace pomocí JavaScriptu</li>
                        <li data-i18n="pkg.prem.f3">Vícejazyčné mutace webu (přepínání jazyků)</li>
                        <li data-i18n="pkg.prem.f4">Plné využití moderních technologií pro rychlost</li>
                        <li data-i18n="pkg.prem.f5">Rozšířená technická podpora a prioritní úpravy</li>
                    </ul>
                    <a href="#kontakt" className="btn btn-primary btn-block" onClick={() => {}} style={{"display":"flex","justifyContent":"center"}} data-i18n="pkg.btn_add">Mám zájem</a>
                </div>
            </div>
        </div>
    </section>

    {/*  */}
    <section id="dalsi-sluzby" className="section dark-section">
        <div className="container">
            <div className="section-header fade-in-up" data-aos="fade-up">
                <span className="section-badge" data-i18n="advanced.badge">💡 Další služby</span>
                <h2 data-i18n="advanced.title">Potřebujete něco pokročilejšího?</h2>
                <p data-i18n="advanced.desc">Kromě rychlých webů dodáváme i technologicky náročná řešení pro rostoucí firmy.</p>
            </div>

            <div className="features-grid">
                <div className="feature-card glass-panel fade-in-up" data-aos="fade-up" data-aos-delay="100">
                    <div className="feature-icon-box"><i className="fa-solid fa-code"></i></div>
                    <h3 data-i18n="advanced.app_title">Webové aplikace</h3>
                    <p data-i18n="advanced.app_desc">Portály, rezervační systémy a SaaS platformy vyvíjené na míru ve Vue/React.</p>
                </div>
                <div className="feature-card glass-panel fade-in-up" data-aos="fade-up" data-aos-delay="200">
                    <div className="feature-icon-box"><i className="fa-solid fa-robot"></i></div>
                    <h3 data-i18n="advanced.ai_title">AI asistenti</h3>
                    <p data-i18n="advanced.ai_desc">Chatboti napojení na vaše data, kteří odpovídají zákazníkům 24/7 a řeší support.</p>
                </div>
                <div className="feature-card glass-panel fade-in-up" data-aos="fade-up" data-aos-delay="300">
                    <div className="feature-icon-box"><i className="fa-solid fa-gears"></i></div>
                    <h3 data-i18n="advanced.auto_title">Automatizace</h3>
                    <p data-i18n="advanced.auto_desc">Propojení firemních systémů (Make, Zapier) a odstranění manuální a zdlouhavé práce.</p>
                </div>
                <div className="feature-card glass-panel fade-in-up" data-aos="fade-up" data-aos-delay="400">
                    <div className="feature-icon-box"><i className="fa-solid fa-plug"></i></div>
                    <h3 data-i18n="advanced.api_title">Integrace a rozšíření</h3>
                    <p data-i18n="advanced.api_desc">Napojení na API, tvorba vlastních Chrome doplňků a speciálních firemních nástrojů.</p>
                </div>
            </div>
            
            <div style={{"textAlign":"center","marginTop":"3rem"}}>
                <a href="#kontakt" className="btn btn-outline btn-glow" onClick={() => {}} data-i18n="advanced.cta">Poptat pokročilé řešení</a>
            </div>
        </div>
    </section>

    {/*  */}
    <section className="section dark-section">
        <div className="container">
            <div className="section-header fade-in-up" data-aos="zoom-in">
                <span className="section-badge" data-i18n="testimonials.badge">⭐ Recenze</span>
                <h2 data-i18n="testimonials.title">Co říkají naši klienti</h2>
            </div>
            <div className="testimonials-grid">
                <div className="testimonial-card glass-panel fade-in-up delay-1" data-aos="fade-up">
                    <div className="testimonial-stars" role="img" aria-label="Hodnocení: 5 z 5 hvězdiček">★★★★★</div>
                    <p className="testimonial-text" data-i18n="testimonial.t1_text">"Web byl hotový za pouhý jeden den, přesně jak slíbili. Profesionální přístup a moderní design. Jedině doporučit!"</p>
                    <div className="testimonial-author">
                        <div className="author-avatar"><i className="fa-solid fa-user"></i></div>
                        <div>
                            <strong data-i18n="testimonial.t1_name">Martin K.</strong>
                            <span data-i18n="testimonial.t1_role">Majitel restaurace</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card glass-panel fade-in-up delay-2" data-aos="fade-up">
                    <div className="testimonial-stars" role="img" aria-label="Hodnocení: 5 z 5 hvězdiček">★★★★★</div>
                    <p className="testimonial-text" data-i18n="testimonial.t2_text">"Nejrychlejší a nejprofesionálnější webovka, kterou jsem kdy objednala. Zákazníci nás díky ní konečně najdou online."</p>
                    <div className="testimonial-author">
                        <div className="author-avatar"><i className="fa-solid fa-user"></i></div>
                        <div>
                            <strong data-i18n="testimonial.t2_name">Jana P.</strong>
                            <span data-i18n="testimonial.t2_role">Kavárnice</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card glass-panel fade-in-up delay-3" data-aos="fade-up">
                    <div className="testimonial-stars" role="img" aria-label="Hodnocení: 5 z 5 hvězdiček">★★★★★</div>
                    <p className="testimonial-text" data-i18n="testimonial.t3_text">"Skvělá komunikace, přesně pochopili, co jsme potřebovali. Web vypadá luxusně a funguje bezchybně i na mobilu."</p>
                    <div className="testimonial-author">
                        <div className="author-avatar"><i className="fa-solid fa-user"></i></div>
                        <div style={{"display":"flex","flexDirection":"column","gap":"0.2rem"}}>
                            <strong data-i18n="testimonial.t3_name">vinfo esports</strong>
                            <span data-i18n="testimonial.t3_role">E-sports Tým</span>
                            <a href="https://www.vinfoesports.com/" target="_blank" rel="noopener noreferrer" style={{"color":"var(--color-primary)","fontSize":"0.8rem","textDecoration":"none","marginTop":"0.2rem"}}><i className="fa-solid fa-arrow-up-right-from-square"></i> <span data-i18n="testimonial.t3_link">Zobrazit web</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*  */}
    <section id="o-nas" className="section">
        <div className="container">
            <div className="section-header fade-in-up" data-aos="fade-up">
                <span className="section-badge" data-i18n="about.badge">👋 O nás</span>
                <h2 data-i18n="about.title">Kdo za tím stojí</h2>
                <p data-i18n="about.desc" style={{"fontSize":"1.1rem","maxWidth":"700px","margin":"1rem auto 0","textAlign":"center"}}>Venvio vzniklo jako specializovaná služba týmu <strong>Vidia Design</strong> zaměřená na rychlou tvorbu webových stránek a digitálních řešení.</p>
            </div>

            <div className="team-grid" style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(250px, 1fr))","gap":"2rem","marginTop":"3rem"}}>
                {/*  */}
                <div className="team-card glass-panel fade-in-up" data-aos="fade-up" data-aos-delay="100" style={{"textAlign":"center","padding":"2rem","borderRadius":"12px"}}>
                    <img loading="lazy" src="https://ui-avatars.com/api/?name=David+V&amp;background=0D8ABC&amp;color=fff&amp;size=150" alt="David" width="120" height="120" style={{borderRadius: "50%", margin: "0 auto 1rem", border: "3px solid var(--color-primary)"}} />
                    <h3 style={{"marginBottom":"0.2rem"}}>David</h3>
                    <p style={{"color":"var(--color-primary)","fontSize":"0.9rem","marginBottom":"1rem","fontWeight":"bold"}} data-i18n="about.role1">Lead Developer</p>
                    <p style={{"fontSize":"0.9rem","color":"var(--color-text-muted)"}} data-i18n="about.bio1">Specialista na vývoj moderních webů, aplikací a automatizace.</p>
                </div>
                {/*  */}
                <div className="team-card glass-panel fade-in-up" data-aos="fade-up" data-aos-delay="200" style={{"textAlign":"center","padding":"2rem","borderRadius":"12px"}}>
                    <img loading="lazy" src="https://ui-avatars.com/api/?name=David+V&amp;background=0D8ABC&amp;color=fff&amp;size=150" alt="David" width="120" height="120" style={{borderRadius: "50%", margin: "0 auto 1rem", border: "3px solid var(--color-primary)"}} />
                    <h3 style={{"marginBottom":"0.2rem"}}>Kreativní Tým</h3>
                    <p style={{"color":"var(--color-primary)","fontSize":"0.9rem","marginBottom":"1rem","fontWeight":"bold"}} data-i18n="about.role2">UX/UI & Design</p>
                    <p style={{"fontSize":"0.9rem","color":"var(--color-text-muted)"}} data-i18n="about.bio2">Navrhujeme čistá rozhraní a vizuální identity, které vaši značku prodají.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  */}
    <section id="kontakt" className="section">
        <div className="container">
            <div className="section-header fade-in-up" data-aos="fade-up">
                <h2 data-i18n="contact.title">Ozvěte se <span className="gradient-text">nám</span></h2>
                <p data-i18n="contact.desc">Napište nám, nebo si rovnou zarezervujte termín hovoru.</p>
            </div>
            
            <div className="contact-grid">
                <div className="contact-info fade-in-up delay-1" data-aos="fade-right">
                    <div className="contact-method">
                        <i className="fa-solid fa-phone"></i>
                        <div>
                            <div style={{"fontSize":"0.9rem","color":"var(--color-text-muted)"}} data-i18n="contact.phone">Telefon (Po-Pá 9-17)</div>
                            <strong>+420 775 104 206</strong>
                        </div>
                    </div>
                    <div className="contact-method">
                        <i className="fa-solid fa-envelope"></i>
                        <div>
                            <div style={{"fontSize":"0.9rem","color":"var(--color-text-muted)"}} data-i18n="contact.email">E-mail</div>
                            <strong>info@venvio.dev</strong>
                        </div>
                    </div>
                    <div className="contact-method">
                        <i className="fa-brands fa-whatsapp"></i>
                        <div>
                            <div style={{"fontSize":"0.9rem","color":"var(--color-text-muted)"}} data-i18n="contact.wa">WhatsApp 24/7</div>
                            <a href="https://wa.me/420775104206" style={{"color":"var(--color-primary)","fontWeight":"bold"}} target="_blank" rel="noopener" data-i18n="contact.wa_btn">Napsat zprávu</a>
                        </div>
                    </div>
                </div>
                
                <div className="glass-panel fade-in-up delay-2" data-aos="fade-left" style={{"padding":"2rem"}}>
                    <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
                          <input type="hidden" name="subject" defaultValue="Nová poptávka z Venvio.dev" />
                          <input type="hidden" name="redirect" defaultValue="https://venvio.dev/success.html" />
                          <input type="text" id="contact-name" name="name" className="form-control" placeholder="Vaše jméno" required data-i18n-ph="contact.ph_name" />
                          
                          <select id="service-type" name="service-type" className="form-control" style={{"marginBottom":"1.5rem","background":"var(--color-bg-dark)","color":"var(--color-text)","border":"1px solid rgba(255, 255, 255, 0.1)"}}>
                              <option value="" disabled selected data-i18n="contact.opt_default">Co potřebujete?</option>
                              <option value="web" data-i18n="contact.opt_web">Nový web</option>
                              <option value="edit" data-i18n="contact.opt_edit">Úpravu současného webu</option>
                              <option value="app" data-i18n="contact.opt_app">Webovou aplikaci</option>
                              <option value="ai" data-i18n="contact.opt_ai">AI / automatizaci</option>
                              <option value="other" data-i18n="contact.opt_other">Nevím – potřebuji poradit</option>
                          </select>

                          <input type="text" id="contact-company" name="company" className="form-control" placeholder="Firma (volitelné)" />
                          <input type="email" id="contact-email" name="email" className="form-control" placeholder="Váš e-mail" required data-i18n-ph="contact.ph_email" />
                          <input type="tel" id="contact-phone" name="phone" className="form-control" placeholder="Telefon (volitelné)" />
                          <input type="checkbox" name="botcheck" style={{display:"none"}} tabIndex={-1} autoComplete="off" aria-hidden="true" />
                          
                          <textarea id="contact-message" name="message" className="form-control" rows={4} placeholder="Krátce popište projekt..." required data-i18n-ph="contact.ph_msg"></textarea>
                          
                          <input type="text" id="discount-code" placeholder="Slevový kód..." data-i18n-ph="cart.discount_ph" style={{flexGrow: 1, padding: "0.5rem 1rem", borderRadius: "8px", border: "1px solid var(--color-border)", background: "rgba(0,0,0,0.2)", color: "#fff", fontFamily: "var(--font-body)", fontSize: "0.9rem"}} />
                          <button type="submit" className="btn btn-primary" data-i18n="contact.submit">Odeslat nezávaznou poptávku <i className="fa-solid fa-paper-plane"></i></button>
                      </form>
                </div>
            </div>
        </div>
    </section>

    {/*  */}
    <section id="faq" className="section">
        <div className="container">
            <div className="section-header fade-in-up" data-aos="fade-right">
                <span className="section-badge">❓ FAQ</span>
                <h2 data-i18n="faq.title">Často kladené otázky</h2>
            </div>
            <div className="faq-list fade-in-up">
                <div className="faq-item glass-panel">
                    <button className="faq-question"><span data-i18n="faq.q1">Opravdu dostanu web do 24 hodin?</span><i className="fa-solid fa-chevron-down"></i></button>
                    <div className="faq-answer">
                        <p data-i18n="faq.a1">Ano! Jakmile obdržíme všechny potřebné podklady (texty, obrázky, logo), začneme okamžitě pracovat. V naprosté většině případů je web hotový a nasazený online do 24 hodin.</p>
                    </div>
                </div>
                <div className="faq-item glass-panel">
                    <button className="faq-question"><span data-i18n="faq.q2">Co když s webem nebudu spokojen?</span><i className="fa-solid fa-chevron-down"></i></button>
                    <div className="faq-answer">
                        <p data-i18n="faq.a2">Vaše spokojenost je pro nás prioritou. Provádíme bezplatné revize a úpravy, dokud nebudete s výsledkem naprosto spokojeni.</p>
                    </div>
                </div>
                <div className="faq-item glass-panel">
                    <button className="faq-question"><span data-i18n="faq.q3">Jaké podklady od mě budete potřebovat?</span><i className="fa-solid fa-chevron-down"></i></button>
                    <div className="faq-answer">
                        <p data-i18n="faq.a3">Stačí nám texty, které chcete na webu zobrazit, fotky (produkty, interiér, tým), logo (pokud máte) a vaše barevné preference. S čímkoli dalším vám rádi pomůžeme.</p>
                    </div>
                </div>
                <div className="faq-item glass-panel">
                    <button className="faq-question"><span data-i18n="faq.q4">Budu moct web sám upravovat?</span><i className="fa-solid fa-chevron-down"></i></button>
                    <div className="faq-answer">
                        <p data-i18n="faq.a4">Ano, předáme vám kompletní přístupy. Pro rozsáhlejší úpravy doporučujeme naši měsíční správu nebo hodinovou sazbu.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  */}
    <section className="cta-section">
        <div className="container">
            <div className="cta-box glass-panel fade-in-up" data-aos="zoom-in">
                <h2 data-i18n="cta.title">Připraveni na nový web?</h2>
                <p data-i18n="cta.desc">Neváhejte a objednejte si svůj profesionální web ještě dnes. Výsledky uvidíte už zítra!</p>
                <a href="#cenik" className="btn btn-primary btn-glow btn-lg"><i className="fa-solid fa-rocket"></i> <span data-i18n="cta.btn">Začít hned</span></a>
            </div>
        </div>
    </section>
    </main>

    {/*  */}
    <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="footer-brand-title" style={{"fontSize":"1.5rem","fontWeight":"800","letterSpacing":"-0.5px","display":"flex","alignItems":"center","gap":"10px","marginBottom":"0.5rem"}}><span className="logo-icon"><i className="fa-solid fa-bolt"></i></span> VENVIO</div>
                    <p data-i18n="footer.desc">Expressní webová prezentace & marketing.</p>
                </div>
                <div className="footer-links-grid">
                    <div>
                        <h3 data-i18n="footer.nav_title">Navigace</h3>
                        <ul id="footer-nav-links">
                            <li><a href="#sluzby" data-i18n="nav.services">Služby</a></li>
                            <li><a href="#portfolio" data-i18n="nav.portfolio">Reference</a></li>
                            <li><a href="#cenik" data-i18n="nav.pricing">Ceník</a></li>
                            <li><a href="#jak-to-funguje" data-i18n="nav.how">Jak to funguje</a></li>
                            <li><a href="#o-nas" data-i18n="nav.about">O nás</a></li>
                            <li><a href="#kontakt" data-i18n="nav.contact">Kontakt</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="scramble-text" data-i18n="footer.contact_title">Kontakt</h3>
                        <ul>
                            <li><a href="tel:+420775104206" style={{"color":"inherit","textDecoration":"none"}}><i className="fa-solid fa-phone"></i> +420 775 104 206</a></li>
                            <li><a href="mailto:info@venvio.dev" style={{"color":"inherit","textDecoration":"none"}}><i className="fa-solid fa-envelope"></i> info@venvio.dev</a></li>
                            <li><a href="https://venvio.dev" target="_blank" rel="noopener noreferrer" style={{"color":"inherit","textDecoration":"none"}}><i className="fa-solid fa-globe"></i> venvio.dev</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-col">
                    <h3 data-i18n="footer.legal">Právní informace</h3>
                    <p style={{"color":"var(--color-text-muted)","fontSize":"0.9rem"}}>
                        <span data-i18n="footer.branch"><strong>VIDIA-DESIGN s.r.o.</strong><br />Sídlo: Praha<br />IČO: 27622444<br />Spisová značka: C 119565, Městský soud v Praze</span><br /><br />
                        <a href="#" style={{"color":"var(--color-text-muted)","textDecoration":"none"}} data-i18n="footer.terms">Obchodní podmínky</a><br />
                        <a href="#" style={{"color":"var(--color-text-muted)","textDecoration":"none"}} data-i18n="footer.privacy">Ochrana osobních údajů</a>
                    </p>
                </div>
            </div>
<div className="footer-bottom">
                    <p data-i18n="footer.tax">Ceny jsou konečné. Nejsme plátci DPH.</p>
                    <p>&copy; 2026 Venvio. <span data-i18n="footer.rights">Všechna práva vyhrazena.</span><span onClick={() => {}} style={{"opacity":"0.3","cursor":"pointer","marginLeft":"8px","fontSize":"0.9rem","display":"inline-block","transition":"opacity 0.3s"}} onMouseOver={() => {}} onMouseOut={() => {}} title="Máme pro vás dárek!">🎁</span></p>
                </div>
        </div>
    </footer>

    {/*  */}
    <div className="cart-overlay" id="cart-overlay"></div>
    <aside className="cart-sidebar" id="cart-sidebar">
        <div className="cart-header">
            <h2><i className="fa-solid fa-bag-shopping"></i> <span data-i18n="cart.title">Váš Košík</span></h2>
            <button className="close-cart" id="close-cart" aria-label="Zavřít košík">&times;</button>
        </div>
        <div className="cart-body" id="cart-items-container"></div>
        <div className="cart-footer">
            <div className="discount-container" style={{"display":"flex","gap":"0.5rem","marginBottom":"1rem","alignItems":"center"}}>
                <input type="hidden" name="subject" defaultValue="Nová poptávka z Venvio.dev" />
                <button className="btn btn-outline" id="apply-discount-btn" style={{"padding":"0.5rem 1rem","fontSize":"0.9rem"}}>Použít</button>
            </div>
            <div id="discount-msg" style={{"fontSize":"0.85rem","marginBottom":"0.8rem","display":"none"}}></div>
            
            <div id="cart-points-section" style={{"display":"none","background":"rgba(0,210,255,0.05)","border":"1px solid rgba(0,210,255,0.2)","padding":"1rem","borderRadius":"12px","marginBottom":"1rem","textAlign":"center"}}>
                <p style={{"fontSize":"0.9rem","marginBottom":"0.5rem"}}><span data-i18n="cart.points_avail">Máte k dispozici:</span> <strong id="cart-avail-points" style={{"color":"var(--color-primary)"}}>0</strong> <span data-i18n="cart.points_coins">Venvio Coins</span></p>
                <button className="btn btn-outline" id="apply-points-btn" style={{"width":"100%","padding":"0.5rem","fontSize":"0.85rem"}} data-i18n="cart.use_points">Uplatnit body jako slevu</button>
                <div id="points-msg" style={{"fontSize":"0.85rem","marginTop":"0.5rem","display":"none","color":"#00D2FF"}}></div>
            </div>
            <div className="cart-total">
                <span data-i18n="cart.total">Celkem:</span>
                <strong id="cart-total-price">0 Kč</strong>
            </div>
            <p className="tax-info" data-i18n="cart.tax_info">Nejsme plátci DPH. Ceny jsou konečné.</p>
            <p data-i18n="auth.points_info" style={{"fontSize":"0.8rem","color":"var(--color-primary)","textAlign":"center","margin":"10px 0"}}>Získáte 1000 bodů za dokončenou objednávku. Body připisujeme manuálně.</p>
            
              <p id="guest-discount-info" style={{"fontSize":"0.85rem","color":"var(--color-text-muted)","textAlign":"center","marginTop":"1rem","padding":"0.5rem","border":"1px dashed rgba(255,255,255,0.2)","borderRadius":"8px"}}>
                  <i className="fa-solid fa-gift" style={{"color":"var(--color-primary)"}}></i> <span data-i18n="cart.guest_info">Objednáváte jako host. Přihlaste se a získejte okamžitou slevu 500 Kč!</span>
              </p>
              <button className="btn btn-primary btn-block" id="checkout-btn" data-i18n="cart.checkout">Přejít k objednávce</button>
        </div>
    </aside>

    {/*  */}
    <div className="modal-overlay" id="auth-modal">
        <div className="modal glass-panel fade-in-up" style={{"maxWidth":"400px"}}>
            <div className="modal-header">
                <h2 data-i18n="auth.title" id="auth-title">Klientská sekce</h2>
                <button className="close-modal" id="close-auth-modal" aria-label="Zavřít dialog">&times;</button>
            </div>
            <div className="modal-body" id="auth-body-login">
                {/*  */}
                <div style={{"display":"flex","flexDirection":"column","gap":"0.75rem","marginBottom":"1.5rem"}}>
                    <button id="btn-google" className="btn" style={{"background":"#fff","color":"#333","display":"flex","alignItems":"center","justifyContent":"center","gap":"12px","borderRadius":"10px","padding":"0.75rem 1rem","fontWeight":"600","fontSize":"0.95rem","transition":"all 0.3s ease","boxShadow":"0 2px 8px rgba(0,0,0,0.1)"}}>
                        <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
                        <span data-i18n="auth.google">Pokračovat přes Google</span>
                    </button>
                    <button id="btn-facebook" className="btn" style={{"background":"#1877F2","color":"white","display":"flex","alignItems":"center","justifyContent":"center","gap":"12px","borderRadius":"10px","padding":"0.75rem 1rem","fontWeight":"600","fontSize":"0.95rem","transition":"all 0.3s ease","boxShadow":"0 2px 8px rgba(24,119,242,0.3)"}}>
                        <i className="fa-brands fa-facebook-f" style={{"fontSize":"1.1rem"}}></i>
                        <span data-i18n="auth.facebook">Pokračovat přes Facebook</span>
                    </button>
                </div>

                <div style={{"textAlign":"center","margin":"1.2rem 0","position":"relative"}}>
                    <hr />
                    <span style={{"position":"absolute","top":"-10px","left":"50%","transform":"translateX(-50%)","background":"#060B18","padding":"0 12px","color":"var(--color-text-muted)","fontSize":"0.8rem"}} data-i18n="auth.or">Nebo</span>
                </div>

                {/*  */}
                <div className="auth-tabs" style={{"display":"flex","gap":"0","marginBottom":"1.2rem","borderBottom":"2px solid rgba(255,255,255,0.08)"}}>
                    <button id="tab-login" className="btn btn-outline" style={{"flex":"1","border":"none","borderBottom":"2px solid var(--color-primary)","color":"#fff","borderRadius":"0","marginBottom":"-2px","padding":"0.6rem","fontWeight":"600"}} data-i18n="auth.tab_login">Přihlásit se</button>
                    <button id="tab-register" className="btn btn-outline" style={{"flex":"1","border":"none","borderBottom":"2px solid transparent","color":"var(--color-text-muted)","borderRadius":"0","marginBottom":"-2px","padding":"0.6rem","fontWeight":"600"}} data-i18n="auth.tab_register">Zaregistrovat</button>
                </div>
                
                <p id="auth-desc" style={{"marginBottom":"1rem","color":"var(--color-text-muted)","fontSize":"0.85rem"}}>Přihlaste se ke svému účtu pro využití věrnostních slev.</p>
                
                <form id="auth-form">
                    <div className="form-group" id="group-name" style={{"display":"none"}}>
                        <label data-i18n="auth.name">Jméno</label>
                        <input type="hidden" name="redirect" defaultValue="https://venvio.dev/success.html" />
                    </div>
                    <div className="form-group">
                        <label data-i18n="auth.email">E-mail</label>
                        <input type="text" id="contact-name" name="name" className="form-control" placeholder="Vaše jméno" required data-i18n-ph="contact.ph_name" />
                    </div>
                    <div className="form-group">
                        <label data-i18n="auth.password">Heslo</label>
                        <div style={{"position":"relative"}}>
                            <input type="text" id="contact-company" name="company" className="form-control" placeholder="Firma (volitelné)" />
                            <button type="button" id="toggle-password" style={{"position":"absolute","right":"10px","top":"50%","transform":"translateY(-50%)","background":"none","border":"none","color":"var(--color-text-muted)","cursor":"pointer","fontSize":"1rem"}} aria-label="Zobrazit heslo">
                                <i className="fa-regular fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    <div className="form-group" id="group-password-confirm" style={{"display":"none"}}>
                        <label data-i18n="auth.password_confirm">Heslo znovu</label>
                        <input type="email" id="contact-email" name="email" className="form-control" placeholder="Váš e-mail" required data-i18n-ph="contact.ph_email" />
                    </div>

                    <div id="auth-options" style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"1rem","fontSize":"0.85rem"}}>
                        <label style={{"display":"flex","alignItems":"center","cursor":"pointer","color":"var(--color-text-muted)","fontWeight":"normal","margin":"0"}}>
                            <input type="tel" id="contact-phone" name="phone" className="form-control" placeholder="Telefon (volitelné)" />
                            <span data-i18n="auth.remember">Zapamatovat si mě</span>
                        </label>
                        <a href="#" id="auth-forgot-pwd" style={{"color":"var(--color-primary)","textDecoration":"none"}} data-i18n="auth.forgot_pwd">Zapomněli jste heslo?</a>
                    </div>

                    <div id="auth-error" style={{"display":"none","color":"#FF6B6B","fontSize":"0.85rem","marginBottom":"0.8rem","padding":"0.5rem","background":"rgba(255,107,107,0.1)","borderRadius":"8px","textAlign":"center"}} role="alert" aria-live="assertive"></div>
                    <button type="submit" id="auth-submit-btn" className="btn btn-primary btn-block">Přihlásit se</button>
                </form>
            </div>
            <div className="modal-body" id="auth-body-profile" style={{"display":"none"}}>
                <div className="dashboard-header" style={{"textAlign":"center","marginBottom":"2rem"}}>
                    <div className="auth-avatar" style={{"fontSize":"3rem","color":"var(--color-primary)","marginBottom":"1rem"}}><i className="fa-solid fa-circle-user"></i></div>
                    <h3 id="auth-profile-name" style={{"marginBottom":"0.5rem"}}>Jméno</h3>
                    <p id="auth-profile-email" style={{"color":"var(--color-text-muted)"}}>email</p>
                </div>
                
                <div className="dashboard-grid" style={{"display":"grid","gap":"2rem"}}>
                    {/*  */}
                    <div className="dashboard-card" style={{"background":"rgba(255,255,255,0.03)","borderRadius":"12px","padding":"1.5rem","textAlign":"center"}}>
                        <h4 style={{"marginBottom":"1rem","color":"var(--color-text-muted)","fontWeight":"500"}} data-i18n="auth.points_label">Venvio Coins</h4>
                        <div id="auth-profile-points" style={{"fontSize":"2.5rem","fontWeight":"800","color":"var(--color-primary)","marginBottom":"0.5rem"}}>0</div>
                        <div style={{"fontSize":"0.85rem","color":"var(--color-text-muted)","marginBottom":"1rem"}} data-i18n="auth.points_val">1 bod = 1 Kč sleva</div>
                        <p data-i18n="auth.points_info" style={{"fontSize":"0.8rem","color":"var(--color-text-muted)","lineHeight":"1.4"}}>Získáte 1000 bodů za dokončenou objednávku. Body připisujeme manuálně.</p>
                    </div>

                    {/*  */}
                    <div className="dashboard-card" style={{"background":"rgba(255,255,255,0.03)","borderRadius":"12px","padding":"1.5rem"}}>
                        <h4 style={{"marginBottom":"1rem","borderBottom":"1px solid rgba(255,255,255,0.1)","paddingBottom":"0.5rem"}} data-i18n="dash.orders">Historie objednávek</h4>
                        <div id="dashboard-orders-list" style={{"maxHeight":"200px","overflowY":"auto","fontSize":"0.9rem"}}>
                            {/*  */}
                            <p style={{"color":"var(--color-text-muted)","fontStyle":"italic","textAlign":"center","marginTop":"1rem"}} data-i18n="dash.no_orders">Zatím nemáte žádné objednávky.</p>
                        </div>
                    </div>
                </div>

                <div style={{"marginTop":"2rem"}}>
                    <button id="auth-logout-btn" className="btn btn-outline btn-block" data-i18n="auth.logout">Odhlásit se</button>
                </div>
            </div>
        </div>
    </div>

    {/*  */}
    <div className="modal-overlay" id="checkout-modal">
        <div className="modal glass-panel fade-in-up">
            <div className="modal-header">
                <h2 data-i18n="modal.title">Dokončení objednávky</h2>
                <button className="close-modal" id="close-modal" aria-label="Zavřít dialog">&times;</button>
            </div>
            <div className="modal-body">
                <form id="checkout-form" method="POST" action="#">
                    <div className="form-group">
                        <label htmlFor="checkout-name" data-i18n="modal.name">Jméno a Příjmení / Firma</label>
                        <input type="checkbox" name="botcheck" style={{display:"none"}} tabIndex={-1} autoComplete="off" aria-hidden="true" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="checkout-email">E-mail</label>
                        <input type="text" id="discount-code" placeholder="Slevový kód..." data-i18n-ph="cart.discount_ph" style={{flexGrow: 1, padding: "0.5rem 1rem", borderRadius: "8px", border: "1px solid var(--color-border)", background: "rgba(0,0,0,0.2)", color: "#fff", fontFamily: "var(--font-body)", fontSize: "0.9rem"}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="checkout-phone" data-i18n="modal.phone">Telefon (volitelné)</label>
                        <input type="text" id="auth-name" data-i18n-ph="auth.name_ph" placeholder="Vaše jméno" />
                    </div>
                    <input type="email" id="auth-email" required data-i18n-ph="auth.email_ph" placeholder="vas@email.cz" />
                    <div className="form-group">
                        <label htmlFor="checkout-message" data-i18n="modal.msg">Zpráva / Vaše představa o webu</label>
                        <textarea id="checkout-message" name="Zprava" rows={4} placeholder="Zde nám můžete popsat, co od webu očekáváte..." data-i18n-ph="modal.msg_ph"></textarea>
                    </div>
                    <div className="form-group" style={{"marginTop":"1rem"}}>
                        <label className="calc-checkbox-label" style={{"fontSize":"0.85rem","color":"var(--color-text-muted)"}}>
                            <input type="password" id="auth-password" required data-i18n-ph="auth.password_ph" placeholder="Vaše heslo" minLength={6} style={{paddingRight: "3rem"}} />
                            <span className="custom-checkbox"></span>
                            <span data-i18n="checkout.gdpr">Souhlasím se <a href="#" onClick={() => {}} style={{"color":"var(--color-primary)","textDecoration":"underline"}}>zpracováním osobních údajů</a> a <a href="#" onClick={() => {}} style={{"color":"var(--color-primary)","textDecoration":"underline"}}>obchodními podmínkami</a>.</span>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" data-i18n="modal.submit">Odeslat objednávku</button>
                </form>
            </div>
        </div>
    </div>

    {/*  */}
    <div className="modal-overlay" id="legal-modal">
        <div className="modal glass-panel fade-in-up" style={{"maxWidth":"680px","maxHeight":"80vh","overflowY":"auto","padding":"0"}}>
            <div className="modal-header" style={{"position":"sticky","top":"0","padding":"2rem","background":"var(--color-bg-dark)","zIndex":"10","borderBottom":"1px solid var(--color-border)","borderRadius":"20px 20px 0 0"}}>
                <h2 id="legal-title">Obchodní podmínky</h2>
                <button className="close-modal" id="close-legal-modal" aria-label="Zavřít dialog">&times;</button>
            </div>
            <div className="modal-body" id="legal-content" style={{"padding":"2rem","lineHeight":"1.8","color":"var(--color-text-muted)"}}>
            </div>
        </div>
    </div>

    {/*  */}
    <button className="back-to-top" id="back-to-top" aria-label="Zpět nahoru">
        <i className="fa-solid fa-arrow-up"></i>
    </button>

    {/*  */}
    <div className="toast" id="toast" role="status" aria-live="polite">
        <i className="fa-solid fa-check-circle"></i>
        <span id="toast-message">Přidáno do košíku!</span>
        <div className="toast-progress"></div>
    </div>

    {/*  */}
    <a href="https://wa.me/420775104206?text=Dobrý%20den,%20mám%20zájem%20o%20nový%20web." target="_blank" rel="noopener noreferrer" className="fab-whatsapp" id="fab-whatsapp" aria-label="Kontaktovat přes WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
        <span className="fab-tooltip" data-i18n="fab.tooltip">Napište nám!</span>
    </a>


    {/*  */}
    <div id="chat-widget" style={{"position":"fixed","bottom":"110px","right":"20px","zIndex":"9999"}}>
        {/*  */}
        <button id="chat-toggle" className="fab-chat" style={{"background":"var(--color-primary)","color":"#fff","border":"none","borderRadius":"50%","width":"60px","height":"60px","fontSize":"1.5rem","cursor":"pointer","boxShadow":"0 4px 15px rgba(0, 210, 255, 0.4)","display":"flex","alignItems":"center","justifyContent":"center","transition":"transform 0.3s ease"}} aria-label="Otevřít chat">
            <i className="fa-solid fa-comment-dots"></i>
            <span className="fab-tooltip" data-i18n="chat.tooltip">Chatujte s naší AI</span>
        </button>

        {/*  */}
        <div id="chat-window" style={{"display":"none","position":"absolute","bottom":"80px","right":"0","width":"320px","background":"#0f1628","border":"1px solid rgba(255,255,255,0.1)","borderRadius":"12px","boxShadow":"0 10px 30px rgba(0,0,0,0.5)","overflow":"hidden","flexDirection":"column"}}>
            {/*  */}
            <div style={{"background":"var(--color-primary)","color":"#fff","padding":"1rem","display":"flex","alignItems":"center","justifyContent":"space-between"}}>
                <div style={{"display":"flex","alignItems":"center","gap":"10px"}}>
                    <div style={{"width":"35px","height":"35px","background":"rgba(255,255,255,0.2)","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center"}}>
                        <i className="fa-solid fa-headset"></i>
                    </div>
                    <div>
                        <div style={{"fontWeight":"600","fontSize":"0.95rem"}} data-i18n="chat.header_title">Venvio Podpora</div>
                        <div style={{"fontSize":"0.75rem","color":"rgba(255,255,255,0.8)"}} data-i18n="chat.header_desc">Odpovídáme ihned</div>
                    </div>
                </div>
                <button id="chat-close" style={{"background":"none","border":"none","color":"#fff","fontSize":"1.2rem","cursor":"pointer"}} aria-label="Zavřít chat">&times;</button>
            </div>
            
            {/*  */}
            <div id="chat-messages" style={{"padding":"1rem","height":"250px","overflowY":"auto","display":"flex","flexDirection":"column","gap":"10px","background":"var(--color-bg-dark)"}}>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"10px","borderRadius":"12px 12px 12px 0","maxWidth":"85%","fontSize":"0.9rem"}}>
                    <span data-i18n="chat.welcome">Dobrý den! 👋 Jak vám můžeme pomoci s vaším webem?</span>
                </div>
            </div>

            {/*  */}
            <div style={{"padding":"10px","background":"#0f1628","borderTop":"1px solid rgba(255,255,255,0.05)","display":"flex","gap":"10px"}}>
                <input type="password" id="auth-password-confirm" data-i18n-ph="auth.password_confirm_ph" placeholder="Zopakujte heslo" minLength={6} />
                <button id="chat-send" style={{"background":"var(--color-primary)","color":"#fff","border":"none","borderRadius":"50%","width":"35px","height":"35px","display":"flex","alignItems":"center","justifyContent":"center","cursor":"pointer"}} aria-label="Odeslat zprávu">
                    <i className="fa-solid fa-paper-plane" style={{"fontSize":"0.8rem"}}></i>
                </button>
            </div>
        </div>
    </div>

    {/*  */}
    
    
    
    
    
    
    
    

    </main>
  );
}

