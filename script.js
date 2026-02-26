// ==================== FLOATING SUPPORT WIDGET ==================== 
const supportBtn = document.getElementById('supportBtn');
const supportMenu = document.getElementById('supportMenu');

if (supportBtn && supportMenu) {
    supportBtn.addEventListener('click', () => {
        supportMenu.classList.toggle('active');
        supportBtn.style.transform = supportMenu.classList.contains('active') 
            ? 'rotate(90deg)' 
            : 'rotate(0deg)';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!supportBtn.contains(e.target) && !supportMenu.contains(e.target)) {
            supportMenu.classList.remove('active');
            supportBtn.style.transform = 'rotate(0deg)';
        }
    });
}

// ==================== SMOOTH SCROLL OFFSET ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== ACTIVE NAV LINK ==================== 
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

updateActiveNavLink();

// ==================== TRANSACTION ANIMATION ==================== 
// Animate transaction items on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.transaction-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
});

// ==================== ADD ACCOUNT BUTTON ==================== 
const addAccountBtns = document.querySelectorAll('.account-card.add-new');
addAccountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        showModal('Add New Bank Account', 'Please fill in your bank account details to continue.');
    });
});

// ==================== MODAL FUNCTIONALITY ==================== 
function showModal(title, message) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <p>${message}</p>
                    <form>
                        <div class="form-group">
                            <label>Account Holder Name</label>
                            <input type="text" placeholder="John Doe" required>
                        </div>
                        <div class="form-group">
                            <label>Bank Name</label>
                            <input type="text" placeholder="Chase Bank" required>
                        </div>
                        <div class="form-group">
                            <label>Account Number</label>
                            <input type="text" placeholder="****-****-****-8901" required>
                        </div>
                        <div class="form-group">
                            <label>Routing Number</label>
                            <input type="text" placeholder="021000021" required>
                        </div>
                        <div class="form-group checkbox">
                            <input type="checkbox" id="terms" required>
                            <label for="terms">I confirm this information is accurate</label>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: 100%;">
                            Add Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');

    function closeModal() {
        modal.remove();
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    const form = modal.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Account added successfully!', 'success');
        closeModal();
    });
}

// ==================== NOTIFICATION SYSTEM ==================== 
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;

    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    const closeBtn = notification.querySelector('.notification-close');
    function removeNotification() {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }

    closeBtn.addEventListener('click', removeNotification);
    
    // Auto-remove after 5 seconds
    setTimeout(removeNotification, 5000);
}

// ==================== CLAIM FUNDS BUTTON ==================== 
const claimFundsBtn = document.querySelector('.hero-card .btn-primary');
if (claimFundsBtn) {
    claimFundsBtn.addEventListener('click', () => {
        showClaimModal();
    });
}

function showClaimModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Claim Your Funds</h3>
                    <button class="modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Select the amount you want to claim from your available balance of <strong>$12,458.50</strong></p>
                    <form>
                        <div class="form-group">
                            <label>Claim Amount</label>
                            <div class="amount-input-wrapper">
                                <span class="currency">$</span>
                                <input type="number" placeholder="0.00" step="0.01" max="12458.50" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Destination Account</label>
                            <select required>
                                <option value="">Select an account</option>
                                <option value="primary">Primary Account (****4829)</option>
                                <option value="savings">Savings Account (****7165)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Claim Reason</label>
                            <textarea placeholder="Describe why you are claiming these funds" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: var(--spacing-lg);">
                            Submit Claim
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const form = modal.querySelector('form');
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');

    function closeModal() {
        modal.remove();
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = form.querySelector('input[type="number"]').value;
        showNotification(`Claim of $${parseFloat(amount).toFixed(2)} submitted successfully!`, 'success');
        closeModal();
    });
}

// ==================== PAGE LOAD ANIMATION ==================== 
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ==================== KEYBOARD NAVIGATION ==================== 
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.querySelector('.modal');
        if (modal) modal.remove();
        supportMenu.classList.remove('active');
    }
});

console.log('FinanceHub Pro Dashboard loaded successfully! 🚀');
