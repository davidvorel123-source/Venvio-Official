import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    FacebookAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// TODO: Nahraďte tuto konfiguraci vašimi klíči z Firebase Console
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

let app, auth;
let isFirebaseConfigured = firebaseConfig.apiKey !== "YOUR_API_KEY";

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
                // Možnost uložit jméno do profilu (updateProfile) by se dalo přidat
                window.showToast("Účet vytvořen!");
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                window.showToast("Úspěšně přihlášeno!");
            }
            authError.style.display = 'none';
        } catch (error) {
            let msg = "Chyba přihlášení.";
            if (error.code === 'auth/email-already-in-use') msg = "Tento e-mail již existuje.";
            if (error.code === 'auth/invalid-email') msg = "Neplatný formát e-mailu.";
            if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') msg = "Špatné heslo nebo e-mail.";
            if (error.code === 'auth/weak-password') msg = "Heslo musí mít alespoň 6 znaků.";
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
            // Uživatel je přihlášen
            window.currentUser = {
                uid: user.uid,
                email: user.email,
                name: user.displayName || user.email.split('@')[0],
                points: window.currentUser ? window.currentUser.points : 0, // Mock pro body, normálně by byly z Firestore
                usedCodes: []
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
