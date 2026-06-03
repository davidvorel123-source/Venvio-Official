import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getAuth, 
    signInWithPopup, signInWithRedirect, 
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
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// TODO: NahraĂ„Ĺąte tuto konfiguraci vaÄąË‡imi klÄ‚Â­Ă„Ĺ¤i z Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDVKRMVgDbqQEgt0CqKc_ho1Pol5XZ7ya4",
  authDomain: "venvio-af343.firebaseapp.com",
  projectId: "venvio-af343",
  storageBucket: "venvio-af343.firebasestorage.app",
  messagingSenderId: "750966161023",
  appId: "1:750966161023:web:9280a6f8a8f5967df8c94a",
  measurementId: "G-Z8P8N96FXY"
};

let app, auth, db;
let isFirebaseConfigured = true;

if (isFirebaseConfigured) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
} else {
    console.warn("Firebase nenÄ‚Â­ nakonfigurovÄ‚Ë‡n! Autentizace nebude fungovat.");
}

// Export for other scripts
window.firebaseAuth = auth;
window.firebaseDb = db;
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
        if (!isFirebaseConfigured) return alert("Firebase nenÄ‚Â­ napojen! ProsÄ‚Â­m doplÄąÂte API klÄ‚Â­Ă„Ĺ¤e v auth.js.");
        try {
            const provider = new GoogleAuthProvider();
            if (window.innerWidth < 768) { await signInWithRedirect(auth, provider); } else { await signInWithPopup(auth, provider); }
            // Modal zavÄąâ„˘e automaticky onAuthStateChanged v script.js
        } catch (error) {
            showError("Chyba Google pÄąâ„˘ihlÄ‚Ë‡ÄąË‡enÄ‚Â­: " + error.message);
        }
    });
}

if (btnFacebook) {
    btnFacebook.addEventListener('click', async (e) => {
        e.preventDefault();
        if (!isFirebaseConfigured) return alert(window.currentLang === 'en' ? "Firebase not connected!" : "Firebase nenÄ‚Â­ napojen! ProsÄ‚Â­m doplÄąÂte API klÄ‚Â­Ă„Ĺ¤e v auth.js.");
        const provider = new FacebookAuthProvider();
        // We must add scopes to get email and public profile
        provider.addScope('email');
        provider.addScope('public_profile');
        provider.setCustomParameters({
           'display': 'popup'
        });
        try {
            if (window.innerWidth < 768) { await signInWithRedirect(auth, provider); } else { await signInWithPopup(auth, provider); }
            // onAuthStateChanged obslouÄąÄľÄ‚Â­ zbytek
        } catch (error) {
            let errorMessage = error.message;
            if (error.code === 'auth/account-exists-with-different-credential') {
                errorMessage = window.currentLang === 'en' ? "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address." : "Tento e-mail uÄąÄľ se pouÄąÄľÄ‚Â­vÄ‚Ë‡ (napÄąâ„˘. pÄąâ„˘es Google). PÄąâ„˘ihlaste se jinou metodou.";
            } else if (error.code === 'auth/popup-closed-by-user') {
                 errorMessage = window.currentLang === 'en' ? "The popup has been closed by the user before finalizing the operation." : "VyskakovacÄ‚Â­ okno bylo zavÄąâ„˘eno pÄąâ„˘ed dokonĂ„Ĺ¤enÄ‚Â­m pÄąâ„˘ihlÄ‚Ë‡ÄąË‡enÄ‚Â­.";
            }
            showError((window.currentLang === 'en' ? "Facebook sign in error: " : "Chyba Facebook pÄąâ„˘ihlÄ‚Ë‡ÄąË‡enÄ‚Â­: ") + errorMessage);
            console.error("Facebook error:", error);
        }
    });
}

// KlasickÄ‚Â© heslo + email (PÄąâ„˘ihlÄ‚Ë‡ÄąË‡enÄ‚Â­ / Registrace)
if (authForm) {
    authForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!isFirebaseConfigured) return alert(window.currentLang === 'en' ? "Firebase not connected!" : "Firebase nenÄ‚Â­ napojen! ProsÄ‚Â­m doplÄąÂte API klÄ‚Â­Ă„Ĺ¤e v auth.js.");
        
        const email = document.getElementById('auth-email').value;
        const password = document.getElementById('auth-password').value;
        
        // Assuming window.authMode is set in script.js
        const mode = window.authMode || 'login';
        const rememberMe = document.getElementById('auth-remember') ? document.getElementById('auth-remember').checked : true;
        
        try {
            await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
            
            if (mode === 'register') {
                const pwdConfEl = document.getElementById('auth-password-confirm'); const passwordConfirm = pwdConfEl ? pwdConfEl.value : ''; window.isRegistering = true;
                if (password !== passwordConfirm) {
                    return showError(window.currentLang === 'en' ? "Passwords do not match!" : "Hesla se neshodujÄ‚Â­!");
                }
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await sendEmailVerification(userCredential.user);
                if(typeof window.showToast === 'function') window.showToast(window.currentLang === 'en' ? "Registration successful. Please verify your email (check SPAM folder) to complete purchases!" : "Registrace Ä‚ĹźspĂ„â€şÄąË‡nÄ‚Ë‡. PotvrĂ„Ĺąte svÄąĹ»j e-mail (zkontrolujte i sloÄąÄľku SPAM) pro dokonĂ„Ĺ¤enÄ‚Â­ nÄ‚Ë‡kupÄąĹ»!");
                await signOut(auth); setTimeout(() => window.isRegistering = false, 1000);
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                if (!userCredential.user.emailVerified) {
                    if(typeof window.showToast === 'function') window.showToast(window.currentLang === 'en' ? "Don't forget to verify your email to be able to make purchases!" : "NezapomeÄąÂte si ovĂ„â€şÄąâ„˘it e-mail pro moÄąÄľnost nakupovat!");
                } else {
                    if(typeof window.showToast === 'function') window.showToast(window.currentLang === 'en' ? "Successfully logged in!" : "Ä‚ĹˇspĂ„â€şÄąË‡nĂ„â€ş pÄąâ„˘ihlÄ‚Ë‡ÄąË‡eno!");
                }
            }
            if (document.getElementById('auth-modal')) {
                document.getElementById('auth-modal').classList.remove('active');
            }
        } catch (error) {
            let msg = "Error: " + error.message;
            if (error.code === 'auth/email-already-in-use') msg = window.currentLang === 'en' ? "Email is already in use." : "Tento e-mail se uÄąÄľ pouÄąÄľÄ‚Â­vÄ‚Ë‡. Zkuste se rovnou pÄąâ„˘ihlÄ‚Ë‡sit.";
            if (error.code === 'auth/weak-password') msg = window.currentLang === 'en' ? "Password should be at least 6 characters." : "Heslo musÄ‚Â­ mÄ‚Â­t alespoÄąÂ 6 znakÄąĹ».";
            if (error.code === 'auth/invalid-credential') msg = window.currentLang === 'en' ? "Invalid credentials." : "ÄąÂ patnÄ‚Ëť e-mail nebo heslo.";
            if (error.code === 'auth/user-not-found') msg = window.currentLang === 'en' ? "Account with this email does not exist." : "Ä‚ĹˇĂ„Ĺ¤et s tÄ‚Â­mto e-mailem neexistuje.";
            if (error.code === 'auth/wrong-password') msg = window.currentLang === 'en' ? "Wrong password." : "ÄąÂ patnÄ‚Â© heslo.";
            
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
        if(typeof window.showToast === 'function') window.showToast(window.currentLang === 'en' ? 'You have been logged out.' : 'Byli jste odhlÄ‚Ë‡ÄąË‡eni.');
    });
}

const forgotPwdBtn = document.getElementById('auth-forgot-pwd'); let lastForgotPwdTime = 0;
if (forgotPwdBtn) {
    forgotPwdBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        if (!isFirebaseConfigured) return;
        if (Date.now() - lastForgotPwdTime < 60000) { return showError(window.currentLang === 'en' ? 'Please wait a minute.' : 'ProsÄ‚Â­m poĂ„Ĺ¤kejte minutu pÄąâ„˘ed dalÄąË‡Ä‚Â­m pokusem.'); } lastForgotPwdTime = Date.now(); const email = document.getElementById('auth-email').value.trim();
        if (!email) {
            return showError(window.currentLang === 'en' ? "Please enter your email above first." : "Nejprve vyplÄąÂte svÄąĹ»j e-mail nahoru do kolonky.");
        }
        try {
            await sendPasswordResetEmail(auth, email);
            if(typeof window.showToast === 'function') window.showToast(window.currentLang === 'en' ? "Password reset link sent to your email." : "Odkaz pro obnovu hesla byl odeslÄ‚Ë‡n na vÄ‚Ë‡ÄąË‡ e-mail.");
            authError.style.display = 'none';
        } catch (error) {
            let msg = "Chyba: " + error.message;
            if (error.code === 'auth/user-not-found') msg = window.currentLang === 'en' ? 'Account not found.' : 'Ä‚ĹˇĂ„Ĺ¤et s tÄ‚Â­mto e-mailem neexistuje.';
            if (error.code === 'auth/invalid-email') msg = window.currentLang === 'en' ? 'Invalid email format.' : 'NeplatnÄ‚Ëť formÄ‚Ë‡t e-mailu.';
            showError(msg);
        }
    });
}

// PoslouchÄ‚Ë‡nÄ‚Â­ na zmĂ„â€şnu stavu pÄąâ„˘ihlÄ‚Ë‡ÄąË‡enÄ‚Â­
if (isFirebaseConfigured) {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            if (window.isRegistering) return;
            
            let points = 500;
            let usedCodes = [];
            
            if (window.firebaseDb) {
                try {
                    const { doc, getDoc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");
                    const userRef = doc(window.firebaseDb, 'users', user.uid);
                    const userSnap = await getDoc(userRef);
                    if (userSnap.exists()) {
                        const data = userSnap.data();
                        points = data.points !== undefined ? data.points : 500;
                        usedCodes = data.usedCodes || [];
                    } else {
                        await setDoc(userRef, { points: 500, usedCodes: [], email: user.email });
                    }
                } catch (err) {
                    console.error("Firestore load error:", err);
                    let allUsers = typeof safeJsonParse === 'function' ? safeJsonParse(localStorage.getItem('venvioAllUsers'), {}) : (JSON.parse(localStorage.getItem('venvioAllUsers')) || {});
                    if (allUsers[user.email] && typeof allUsers[user.email].points !== 'undefined') {
                        points = allUsers[user.email].points;
                        usedCodes = allUsers[user.email].usedCodes || [];
                    }
                }
            }
            
            window.currentUser = {
                uid: user.uid,
                email: user.email,
                emailVerified: user.emailVerified,
                name: user.displayName || user.email.split('@')[0],
                points: points,
                usedCodes: usedCodes
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

