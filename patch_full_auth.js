const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix navbar spacing - increase gap between items
html = html.replace(
    '<div style="display: flex; gap: 0.5rem; align-items: center;">',
    '<div style="display: flex; gap: 1.2rem; align-items: center;">'
);

// 2. Replace entire auth modal body (login section) with password field + proper social buttons
const oldAuthBody = `            <div class="modal-body" id="auth-body-login">
                <div class="auth-tabs" style="display: flex; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">
                    <button id="tab-login" class="btn btn-outline" style="flex: 1; border: none; border-bottom: 2px solid var(--color-primary); color: #fff; border-radius: 0;" data-i18n="auth.tab_login">Přihlásit se</button>
                    <button id="tab-register" class="btn btn-outline" style="flex: 1; border: none; border-bottom: 2px solid transparent; color: var(--color-text-muted); border-radius: 0;" data-i18n="auth.tab_register">Zaregistrovat</button>
                </div>
                
                <p id="auth-desc" data-i18n="auth.desc_login" style="margin-bottom: 1.5rem; color: var(--color-text-muted); font-size: 0.9rem;">Přihlaste se ke svému účtu pro využití věrnostních slev.</p>
                
                <form id="auth-form">
                    <div class="form-group" id="group-name" style="display: none;">
                        <label data-i18n="auth.name">Jméno</label>
                        <input type="text" id="auth-name" data-i18n-ph="auth.name_ph" placeholder="Vaše jméno">
                    </div>
                    <div class="form-group">
                        <label data-i18n="auth.email">E-mail</label>
                        <input type="email" id="auth-email" required data-i18n-ph="auth.email_ph" placeholder="vas@email.cz">
                    </div>
                    <button type="submit" id="auth-submit-btn" class="btn btn-primary btn-block" data-i18n="auth.submit_login">Přihlásit se</button>
                </form>

                <div style="text-align: center; margin: 1.5rem 0; position: relative;">
                    <hr style="border-color: rgba(255,255,255,0.1);">
                    <span style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background: var(--color-bg); padding: 0 10px; color: var(--color-text-muted); font-size: 0.8rem;" data-i18n="auth.or">Nebo</span>
                </div>

                <div style="display: flex; flex-direction: column; gap: 0.8rem;">
                    <button id="btn-google" class="btn" style="background: white; color: #333; display: flex; align-items: center; justify-content: center; gap: 10px; border-radius: 8px;">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="20">
                        <span data-i18n="auth.google">Pokračovat přes Google</span>
                    </button>
                    <button id="btn-facebook" class="btn" style="background: #1877F2; color: white; display: flex; align-items: center; justify-content: center; gap: 10px; border-radius: 8px;">
                        <i class="fa-brands fa-facebook" style="font-size: 1.2rem;"></i>
                        <span data-i18n="auth.facebook">Pokračovat přes Facebook</span>
                    </button>
                </div>
            </div>`;

const newAuthBody = `            <div class="modal-body" id="auth-body-login">
                <!-- Social Login Buttons First -->
                <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
                    <button id="btn-google" class="btn" style="background: #fff; color: #333; display: flex; align-items: center; justify-content: center; gap: 12px; border-radius: 10px; padding: 0.75rem 1rem; font-weight: 600; font-size: 0.95rem; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
                        <span data-i18n="auth.google">Pokračovat přes Google</span>
                    </button>
                    <button id="btn-facebook" class="btn" style="background: #1877F2; color: white; display: flex; align-items: center; justify-content: center; gap: 12px; border-radius: 10px; padding: 0.75rem 1rem; font-weight: 600; font-size: 0.95rem; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(24,119,242,0.3);">
                        <i class="fa-brands fa-facebook-f" style="font-size: 1.1rem;"></i>
                        <span data-i18n="auth.facebook">Pokračovat přes Facebook</span>
                    </button>
                </div>

                <div style="text-align: center; margin: 1.2rem 0; position: relative;">
                    <hr style="border-color: rgba(255,255,255,0.1);">
                    <span style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background: var(--color-bg); padding: 0 12px; color: var(--color-text-muted); font-size: 0.8rem;" data-i18n="auth.or">Nebo</span>
                </div>

                <!-- Tabs -->
                <div class="auth-tabs" style="display: flex; gap: 0; margin-bottom: 1.2rem; border-bottom: 2px solid rgba(255,255,255,0.08);">
                    <button id="tab-login" class="btn btn-outline" style="flex: 1; border: none; border-bottom: 2px solid var(--color-primary); color: #fff; border-radius: 0; margin-bottom: -2px; padding: 0.6rem; font-weight: 600;" data-i18n="auth.tab_login">Přihlásit se</button>
                    <button id="tab-register" class="btn btn-outline" style="flex: 1; border: none; border-bottom: 2px solid transparent; color: var(--color-text-muted); border-radius: 0; margin-bottom: -2px; padding: 0.6rem; font-weight: 600;" data-i18n="auth.tab_register">Zaregistrovat</button>
                </div>
                
                <p id="auth-desc" data-i18n="auth.desc_login" style="margin-bottom: 1rem; color: var(--color-text-muted); font-size: 0.85rem;">Přihlaste se ke svému účtu pro využití věrnostních slev.</p>
                
                <form id="auth-form">
                    <div class="form-group" id="group-name" style="display: none;">
                        <label data-i18n="auth.name">Jméno</label>
                        <input type="text" id="auth-name" data-i18n-ph="auth.name_ph" placeholder="Vaše jméno">
                    </div>
                    <div class="form-group">
                        <label data-i18n="auth.email">E-mail</label>
                        <input type="email" id="auth-email" required data-i18n-ph="auth.email_ph" placeholder="vas@email.cz">
                    </div>
                    <div class="form-group">
                        <label data-i18n="auth.password">Heslo</label>
                        <div style="position: relative;">
                            <input type="password" id="auth-password" required data-i18n-ph="auth.password_ph" placeholder="Vaše heslo" minlength="6" style="padding-right: 3rem;">
                            <button type="button" id="toggle-password" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--color-text-muted); cursor: pointer; font-size: 1rem;">
                                <i class="fa-regular fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    <div class="form-group" id="group-password-confirm" style="display: none;">
                        <label data-i18n="auth.password_confirm">Heslo znovu</label>
                        <input type="password" id="auth-password-confirm" data-i18n-ph="auth.password_confirm_ph" placeholder="Zopakujte heslo" minlength="6">
                    </div>
                    <div id="auth-error" style="display: none; color: #FF6B6B; font-size: 0.85rem; margin-bottom: 0.8rem; padding: 0.5rem; background: rgba(255,107,107,0.1); border-radius: 8px; text-align: center;"></div>
                    <button type="submit" id="auth-submit-btn" class="btn btn-primary btn-block" data-i18n="auth.submit_login">Přihlásit se</button>
                </form>
            </div>`;

html = html.replace(oldAuthBody, newAuthBody);

fs.writeFileSync('index.html', html, 'utf8');
console.log('HTML patched successfully');
