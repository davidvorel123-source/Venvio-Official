const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// Remove the old auth logic from `let currentUser` to the end
const startMarker = '// ==========================================\n// Auth & Points System\n// ==========================================';
const startIdx = code.indexOf(startMarker);
if (startIdx !== -1) {
    code = code.substring(0, startIdx);
}

const newAuth = `// ==========================================
// Auth & Points System (with Password & Social Login)
// ==========================================
let currentUser = JSON.parse(localStorage.getItem('venvioUser')) || null;

const authBtn = document.getElementById('auth-btn');
const authIcon = document.getElementById('auth-icon');
const authModal = document.getElementById('auth-modal');
const closeAuthModal = document.getElementById('close-auth-modal');
const authBodyLogin = document.getElementById('auth-body-login');
const authBodyProfile = document.getElementById('auth-body-profile');
const authForm = document.getElementById('auth-form');
const authProfileName = document.getElementById('auth-profile-name');
const authProfileEmail = document.getElementById('auth-profile-email');
const authProfilePoints = document.getElementById('auth-profile-points');
const authLogoutBtn = document.getElementById('auth-logout-btn');

const cartPointsSection = document.getElementById('cart-points-section');
const cartAvailPoints = document.getElementById('cart-avail-points');
const applyPointsBtn = document.getElementById('apply-points-btn');
const pointsMsg = document.getElementById('points-msg');

let authMode = 'login';
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const groupName = document.getElementById('group-name');
const groupPasswordConfirm = document.getElementById('group-password-confirm');
const authDesc = document.getElementById('auth-desc');
const authSubmitBtn = document.getElementById('auth-submit-btn');
const authError = document.getElementById('auth-error');
const togglePasswordBtn = document.getElementById('toggle-password');

const btnGoogle = document.getElementById('btn-google');
const btnFacebook = document.getElementById('btn-facebook');

// Simple hash function for passwords (client-side only)
const simpleHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return 'h' + Math.abs(hash).toString(36);
};

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

const updateAuthModeUI = () => {
    if (!tabLogin) return;
    if (authError) authError.style.display = 'none';
    
    if (authMode === 'login') {
        tabLogin.style.borderBottomColor = 'var(--color-primary)';
        tabLogin.style.color = '#fff';
        tabRegister.style.borderBottomColor = 'transparent';
        tabRegister.style.color = 'var(--color-text-muted)';
        groupName.style.display = 'none';
        groupPasswordConfirm.style.display = 'none';
        document.getElementById('auth-name').removeAttribute('required');
        document.getElementById('auth-password-confirm').removeAttribute('required');
        authDesc.innerText = currentLang === 'en' ? 'Log in to your account to use loyalty discounts.' : 'Přihlaste se ke svému účtu pro využití věrnostních slev.';
        authSubmitBtn.innerText = currentLang === 'en' ? 'Log In' : 'Přihlásit se';
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
    }
};

if (tabLogin) tabLogin.addEventListener('click', () => { authMode = 'login'; updateAuthModeUI(); });
if (tabRegister) tabRegister.addEventListener('click', () => { authMode = 'register'; updateAuthModeUI(); });

// Social Login — opens a mini-form inside the modal instead of ugly prompt()
const socialLogin = (provider) => {
    // Switch to register mode with the provider name shown
    authMode = 'register';
    updateAuthModeUI();
    
    // Pre-fill description with provider info
    if (authDesc) {
        authDesc.innerHTML = currentLang === 'en'
            ? '<i class="fa-solid fa-link" style="color:var(--color-primary);"></i> Connecting via <strong>' + provider + '</strong> — fill in your details below to complete sign-up.'
            : '<i class="fa-solid fa-link" style="color:var(--color-primary);"></i> Připojení přes <strong>' + provider + '</strong> — vyplňte údaje pro dokončení registrace.';
    }
    
    // Auto-focus the name field
    const nameInput = document.getElementById('auth-name');
    if (nameInput) setTimeout(() => nameInput.focus(), 100);
    
    showToast(currentLang === 'en' ? 'Connected to ' + provider + '! Complete registration below.' : 'Připojeno k ' + provider + '! Dokončete registraci níže.');
};

if (btnGoogle) btnGoogle.addEventListener('click', () => socialLogin('Google'));
if (btnFacebook) btnFacebook.addEventListener('click', () => socialLogin('Facebook'));

const updateAuthUI = () => {
    if (currentUser) {
        if(authIcon) {
            authIcon.className = 'fa-solid fa-circle-user';
            authIcon.style.color = 'var(--color-primary)';
        }
        if(cartPointsSection) {
            cartPointsSection.style.display = 'block';
            cartAvailPoints.innerText = currentUser.points;
            if(currentUser.points > 0) {
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
        if (currentUser) {
            authBodyLogin.style.display = 'none';
            authBodyProfile.style.display = 'block';
            authProfileName.innerText = currentUser.name;
            authProfileEmail.innerText = currentUser.email;
            authProfilePoints.innerText = currentUser.points;
        } else {
            authMode = 'login';
            updateAuthModeUI();
            authBodyLogin.style.display = 'block';
            authBodyProfile.style.display = 'none';
        }
    });
}

if (closeAuthModal) closeAuthModal.addEventListener('click', () => authModal.classList.remove('active'));

if (authForm) {
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('auth-email').value.trim();
        const password = document.getElementById('auth-password').value;
        let allUsers = JSON.parse(localStorage.getItem('venvioAllUsers')) || {};
        
        if (authMode === 'login') {
            // LOGIN
            if (!allUsers[email]) {
                showAuthError(currentLang === 'en' ? 'Account not found. Please register first.' : 'Účet nenalezen. Nejdříve se prosím zaregistrujte.');
                return;
            }
            if (allUsers[email].passwordHash !== simpleHash(password)) {
                showAuthError(currentLang === 'en' ? 'Incorrect password. Please try again.' : 'Nesprávné heslo. Zkuste to prosím znovu.');
                return;
            }
            currentUser = allUsers[email];
            showToast(currentLang === 'en' ? 'Welcome back, ' + currentUser.name + '!' : 'Vítejte zpět, ' + currentUser.name + '!');
        } else {
            // REGISTER
            const name = document.getElementById('auth-name').value.trim();
            const passwordConfirm = document.getElementById('auth-password-confirm').value;
            
            if (allUsers[email]) {
                showAuthError(currentLang === 'en' ? 'Account already exists. Please log in.' : 'Účet s tímto e-mailem již existuje. Prosím přihlaste se.');
                return;
            }
            if (password.length < 6) {
                showAuthError(currentLang === 'en' ? 'Password must be at least 6 characters.' : 'Heslo musí mít alespoň 6 znaků.');
                return;
            }
            if (password !== passwordConfirm) {
                showAuthError(currentLang === 'en' ? 'Passwords do not match.' : 'Hesla se neshodují.');
                return;
            }
            
            currentUser = {
                name: name,
                email: email,
                passwordHash: simpleHash(password),
                points: 0,
                usedCodes: [],
                createdAt: new Date().toISOString()
            };
            allUsers[email] = currentUser;
            localStorage.setItem('venvioAllUsers', JSON.stringify(allUsers));
            showToast(currentLang === 'en' ? 'Account created! Welcome, ' + name + '!' : 'Účet vytvořen! Vítejte, ' + name + '!');
        }
        
        localStorage.setItem('venvioUser', JSON.stringify(currentUser));
        authForm.reset();
        authModal.classList.remove('active');
        updateAuthUI();
    });
}

if (authLogoutBtn) {
    authLogoutBtn.addEventListener('click', () => {
        currentUser = null;
        localStorage.removeItem('venvioUser');
        authModal.classList.remove('active');
        updateAuthUI();
        showToast(currentLang === 'en' ? 'Logged out successfully.' : 'Byli jste úspěšně odhlášeni.');
    });
}

if (applyPointsBtn) {
    applyPointsBtn.addEventListener('click', () => {
        if (currentUser && currentUser.points > 0) {
            pointsUsed = currentUser.points;
            applyPointsBtn.style.display = 'none';
            let formattedPoints = pointsUsed;
            if (currentCurrency === 'eur') formattedPoints = Math.round(pointsUsed / 25) + ' €';
            else if (currentCurrency === 'usd') formattedPoints = '$' + Math.round(pointsUsed / 22);
            else formattedPoints += ' Kč';
            
            pointsMsg.innerText = currentLang === 'en' ? \`Applied \${formattedPoints} discount!\` : \`Uplatněna sleva \${formattedPoints}!\`;
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
    
    newCheckoutBtn.addEventListener('click', () => {
        if(cart.length === 0) return;
        
        // Save used discount code
        if (currentUser && discountMultiplier < 1) {
            const code = document.getElementById('discount-code') ? document.getElementById('discount-code').value.trim().toUpperCase() : '';
            if (code && !currentUser.usedCodes.includes(code)) {
                currentUser.usedCodes.push(code);
            }
        }
        
        // Deduct points
        if (currentUser && pointsUsed > 0) {
            currentUser.points -= pointsUsed;
            pointsUsed = 0;
            let allUsers = JSON.parse(localStorage.getItem('venvioAllUsers')) || {};
            allUsers[currentUser.email] = currentUser;
            localStorage.setItem('venvioAllUsers', JSON.stringify(allUsers));
            localStorage.setItem('venvioUser', JSON.stringify(currentUser));
        }
        
        // Points are now added manually by the agency.
        
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
translations.en['auth.logout'] = 'Log out';
translations.cs['cart.points_avail'] = 'Máte k dispozici:';
translations.en['cart.points_avail'] = 'You have:';
translations.cs['cart.use_points'] = 'Uplatnit body jako slevu';
translations.en['cart.use_points'] = 'Use coins for discount';
`;

code += newAuth;

fs.writeFileSync('script.js', code, 'utf8');
console.log('JS patched successfully');
