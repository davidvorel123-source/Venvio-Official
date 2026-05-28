// State
let cart = JSON.parse(localStorage.getItem('venvioCart')) || [];

// DOM Elements
const cartBtn = document.getElementById('cart-btn');
const closeCart = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartCount = document.getElementById('cart-count');
const cartContainer = document.getElementById('cart-items-container');
const cartTotalPrice = document.getElementById('cart-total-price');
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const closeModal = document.getElementById('close-modal');
const checkoutForm = document.getElementById('checkout-form');

// Helper formatting
const formatPrice = (price) => {
    return new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 }).format(price);
};

// Update UI
const updateCartUI = () => {
    cartCount.innerText = cart.length;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<div class="empty-cart-msg">Váš košík je zatím prázdný.</div>';
        cartTotalPrice.innerText = '0 Kč';
        return;
    }

    let total = 0;
    cartContainer.innerHTML = '';
    
    cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <h5>${item.name}</h5>
                <p>${formatPrice(item.price)}</p>
            </div>
            <div class="cart-item-actions">
                <button class="remove-item" onclick="removeFromCart(${index})">Odstranit</button>
            </div>
        `;
        cartContainer.appendChild(div);
    });

    cartTotalPrice.innerText = formatPrice(total);
    localStorage.setItem('venvioCart', JSON.stringify(cart));
};

// Add to cart
const addToCart = (id, name, price) => {
    cart.push({ id, name, price: parseInt(price) });
    updateCartUI();
    openCart();
};

// Remove from cart (Global function for onclick)
window.removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartUI();
};

// Open/Close Cart
const openCart = () => {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeCartSidebar = () => {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

// Event Listeners
cartBtn.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartSidebar);
cartOverlay.addEventListener('click', closeCartSidebar);

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const { id, name, price } = e.target.dataset;
        addToCart(id, name, price);
    });
});

// Checkout logic
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Váš košík je prázdný.');
        return;
    }
    closeCartSidebar();
    checkoutModal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    checkoutModal.classList.remove('active');
});

checkoutForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Získání dat z formuláře
    const inputs = checkoutForm.querySelectorAll('input, textarea');
    const customerInfo = {
        name: inputs[0].value,
        email: inputs[1].value,
        message: inputs[2].value
    };

    // Změna tlačítka na načítání
    const submitBtn = checkoutForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Přesměrovávání na platbu...';
    submitBtn.disabled = true;

    try {
        // Odeslání požadavku na Vercel backend
        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cart: cart,
                customerInfo: customerInfo
            })
        });

        const data = await response.json();

        if (response.ok && data.url) {
            // Přesměrování na Stripe Checkout
            window.location.href = data.url;
        } else {
            throw new Error(data.error || 'Neznámá chyba při vytváření platby.');
        }
    } catch (err) {
        console.error(err);
        alert('Omlouváme se, došlo k chybě při inicializaci platby: ' + err.message);
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
    }
});

// Initialize
updateCartUI();

// Scroll Animations (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
