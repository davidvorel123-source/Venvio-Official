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
    sendEmailVerification
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
        if (!isFirebaseConfigured) return alert("Firebase není napojen! Prosím doplňte API klíče v auth.js.");
        try {
            const provider = new FacebookAuthProvider();
            await signInWithPopup(auth, provider);
        } catch (error) {
            showError("Chyba Facebook přihlášení: " + error.message);
        }
    });
}

if (authForm) {
    authForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!isFirebaseConfigured) return alert("Firebase není napojen! Prosím doplňte API klíče v auth.js.");
        
        const email = document.getElementById('auth-email').value.trim();
        const password = document.getElementById('auth-password').value;
        const name = document.getElementById('auth-name') ? document.getElementById('auth-name').value.trim() : '';
        
        // Assuming window.authMode is set in script.js
        const mode = window.authMode || 'login';
        
        try {
            if (mode === 'register') {
                const passwordConfirm = document.getElementById('auth-password-confirm').value;
                if (password !== passwordConfirm) {
                    return showError("Hesla se neshodují!");
                }
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await sendEmailVerification(userCredential.user);
                window.showToast("Registrace úspěšná. Potvrďte svůj e-mail pro dokončení nákupů!");
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                if (!userCredential.user.emailVerified) {
                    window.showToast("Nezapomeňte si ověřit e-mail pro možnost nakupovat!");
                } else {
                    window.showToast("Úspěšně přihlášeno!");
                }
            }
            authError.style.display = 'none';
        } catch (error) {
            let msg = "Chyba přihlášení: " + error.message;
            if (error.message === "not-verified") msg = "Nejprve prosím ověřte svůj e-mail (zkontrolujte schránku).";
            if (error.code === 'auth/email-already-in-use') msg = "Tento e-mail již existuje.";
            if (error.code === 'auth/invalid-email') msg = "Neplatný formát e-mailu.";
            if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') msg = "Špatné heslo nebo e-mail.";
            if (error.code === 'auth/weak-password') msg = "Heslo musí mít alespoň 6 znaků.";
            if (error.code === 'auth/operation-not-allowed') msg = "Přihlášení přes e-mail není povoleno ve Firebase.";
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
