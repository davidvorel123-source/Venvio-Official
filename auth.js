import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    FacebookAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// TODO: Nahraďte tuto konfiguraci vašimi klíči z Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDVKRMVgDbqQEgt0CqKc_ho1Pol5XZ7ya4",
  authDomain: "venvio-af343.firebaseapp.com",
  projectId: "venvio-af343",
  storageBucket: "venvio-af343.firebasestorage.app",
  messagingSenderId: "750966161023",
  appId: "1:750966161023:web:9280a6f8a8f5967df8c94a",
  measurementId: "G-Z8P8N96FXY"
};

let app, auth;
let isFirebaseConfigured = true;

if (isFirebaseConfigured) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
} else {
    console.warn("Firebase není nakonfigurován! Autentizace nebude fungovat.");
}

// Export for other scripts
window.firebaseAuth = auth;
window.isFirebaseConfigured = isFirebaseConfigured;

// UI Elements
const btnGoogle = document.getElementById('btn-google');
const btnFacebook = document.getElementById('btn-facebook');
const authForm = document.getElementById('auth-form');
const authLogoutBtn = document.getElementById('auth-logout-btn');
const authError = document.getElementById('auth-error');

const showError = (msg) => {
    if(authError) {
        authError.innerText = msg;
        authError.style.display = 'block';
    }
};

if (btnGoogle) {
    btnGoogle.addEventListener('click', async (e) => {
        e.preventDefault();
        if (!isFirebaseConfigured) return alert("Firebase není napojen! Prosím doplňte API klíče v auth.js.");
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            // Modal zavře automaticky onAuthStateChanged v script.js
        } catch (error) {
            showError("Chyba Google přihlášení: " + error.message);
        }
    });
}

if (btnFacebook) {
    btnFacebook.addEventListener('click', async (e) => {
        e.preventDefault();
        if (!isFirebaseConfigured) return alert(window.currentLang === 'en' ? "Firebase not connected!" : "Firebase není napojen! Prosím doplňte API klíče v auth.js.");
        const provider = new FacebookAuthProvider();
        // We must add scopes to get email and public profile
        provider.addScope('email');
        provider.addScope('public_profile');
        provider.setCustomParameters({
           'display': 'popup'
        });
        try {
            await signInWithPopup(auth, provider);
            // onAuthStateChanged obslouží zbytek
        } catch (error) {
            let errorMessage = error.message;
            if (error.code === 'auth/account-exists-with-different-credential') {
                errorMessage = window.currentLang === 'en' ? "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address." : "Tento e-mail už se používá (např. přes Google). Přihlaste se jinou metodou.";
            } else if (error.code === 'auth/popup-closed-by-user') {
                 errorMessage = window.currentLang === 'en' ? "The popup has been closed by the user before finalizing the operation." : "Vyskakovací okno bylo zavřeno před dokončením přihlášení.";
            }
            showError((window.currentLang === 'en' ? "Facebook sign in error: " : "Chyba Facebook přihlášení: ") + errorMessage);
            console.error("Facebook error:", error);
        }
    });
}

// Klasické heslo + email (Přihlášení / Registrace)
if (authForm) {
    authForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!isFirebaseConfigured) return alert(window.currentLang === 'en' ? "Firebase not connected!" : "Firebase není napojen! Prosím doplňte API klíče v auth.js.");
        
        const email = document.getElementById('auth-email').value;
        const password = document.getElementById('auth-password').value;
        
        // Assuming window.authMode is set in script.js
        const mode = window.authMode || 'login';
        const rememberMe = document.getElementById('auth-remember') ? document.getElementById('auth-remember').checked : true;
        
        try {
            await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
            
            if (mode === 'register') {
                const passwordConfirm = document.getElementById('auth-password-confirm').value;
                if (password !== passwordConfirm) {
                    return showError(window.currentLang === 'en' ? "Passwords do not match!" : "Hesla se neshodují!");
                }
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await sendEmailVerification(userCredential.user);
                window.showToast(window.currentLang === 'en' ? "Registration successful. Please verify your email (check SPAM folder) to complete purchases!" : "Registrace úspěšná. Potvrďte svůj e-mail (zkontrolujte i složku SPAM) pro dokončení nákupů!");
                await signOut(auth); // force them to login after verification
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                if (!userCredential.user.emailVerified) {
                    window.showToast(window.currentLang === 'en' ? "Don't forget to verify your email to be able to make purchases!" : "Nezapomeňte si ověřit e-mail pro možnost nakupovat!");
                } else {
                    window.showToast(window.currentLang === 'en' ? "Successfully logged in!" : "Úspěšně přihlášeno!");
                }
            }
            if (document.getElementById('auth-modal')) {
                document.getElementById('auth-modal').classList.remove('active');
            }
        } catch (error) {
            let msg = "Error: " + error.message;
            if (error.code === 'auth/email-already-in-use') msg = window.currentLang === 'en' ? "Email is already in use." : "Tento e-mail se už používá. Zkuste se rovnou přihlásit.";
            if (error.code === 'auth/weak-password') msg = window.currentLang === 'en' ? "Password should be at least 6 characters." : "Heslo musí mít alespoň 6 znaků.";
            if (error.code === 'auth/invalid-credential') msg = window.currentLang === 'en' ? "Invalid credentials." : "Špatný e-mail nebo heslo.";
            if (error.code === 'auth/user-not-found') msg = window.currentLang === 'en' ? "Account with this email does not exist." : "Účet s tímto e-mailem neexistuje.";
            if (error.code === 'auth/wrong-password') msg = window.currentLang === 'en' ? "Wrong password." : "Špatné heslo.";
            
            showError(msg);
        }
    });
}

if (authLogoutBtn) {
    authLogoutBtn.addEventListener('click', async () => {
        if (!isFirebaseConfigured) {
            window.currentUser = null;
            window.updateAuthUI();
            return;
        }
        await signOut(auth);
        window.showToast("Byli jste odhlášeni.");
    });
}

const forgotPwdBtn = document.getElementById('auth-forgot-pwd');
if (forgotPwdBtn) {
    forgotPwdBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        if (!isFirebaseConfigured) return;
        const email = document.getElementById('auth-email').value.trim();
        if (!email) {
            return showError(window.currentLang === 'en' ? "Please enter your email above first." : "Nejprve vyplňte svůj e-mail nahoru do kolonky.");
        }
        try {
            await sendPasswordResetEmail(auth, email);
            window.showToast(window.currentLang === 'en' ? "Password reset link sent to your email." : "Odkaz pro obnovu hesla byl odeslán na váš e-mail.");
            authError.style.display = 'none';
        } catch (error) {
            let msg = "Chyba: " + error.message;
            if (error.code === 'auth/user-not-found') msg = "Účet s tímto e-mailem neexistuje.";
            if (error.code === 'auth/invalid-email') msg = "Neplatný formát e-mailu.";
            showError(msg);
        }
    });
}

// Poslouchání na změnu stavu přihlášení
if (isFirebaseConfigured) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            let allUsers = JSON.parse(localStorage.getItem('venvioAllUsers')) || {};
            let points = 500;
            if (allUsers[user.email] && typeof allUsers[user.email].points !== 'undefined') {
                points = allUsers[user.email].points;
            } else {
                allUsers[user.email] = { points: 500, usedCodes: [] };
                localStorage.setItem('venvioAllUsers', JSON.stringify(allUsers));
            }
            
            // Uživatel je přihlášen
            window.currentUser = {
                uid: user.uid,
                email: user.email,
                emailVerified: user.emailVerified,
                name: user.displayName || user.email.split('@')[0],
                points: points, // 500 pro nové, jinak z paměti
                usedCodes: allUsers[user.email].usedCodes || []
            };
            const authModal = document.getElementById('auth-modal');
            if (authModal) authModal.classList.remove('active');
        } else {
            window.currentUser = null;
        }
        if (typeof window.updateAuthUI === 'function') {
            window.updateAuthUI();
        }
    });
}
