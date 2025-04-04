// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderModelGrid();
    renderServices();
    renderFAQ();
    initializePopups();
    updateYear();
});

// Render model grid
function renderModelGrid() {
    const modelGrid = document.getElementById('modelGrid');
    models.forEach(model => {
        const card = document.createElement('div');
        card.className = 'model-card animate-fade-in';
        card.innerHTML = `
            <div class="model-image-container">
                <img src="${model.images[0]}" alt="${model.name}" class="model-image">
            </div>
            <div class="model-info">
                <h3 class="model-name">${model.name}</h3>
                <p class="text-gray-300">${model.details}</p>
                <button class="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition-colors book-now">
                    Book Now
                </button>
            </div>
        `;
        
        // Add click handlers
        card.querySelector('.book-now').addEventListener('click', (e) => {
            e.stopPropagation();
            showContactPopup();
        });
        
        card.addEventListener('click', () => showModelDetails(model));
        modelGrid.appendChild(card);
    });
}

// Render services section
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card animate-fade-in';
        card.innerHTML = `
            <h3 class="gradient-text">${service.name}</h3>
            <p class="text-gray-300">${service.description}</p>
        `;
        servicesGrid.appendChild(card);
    });
}

// Render FAQ section
function renderFAQ() {
    const faqGrid = document.getElementById('faqGrid');
    faqs.forEach(faq => {
        const item = document.createElement('div');
        item.className = 'faq-item animate-fade-in';
        item.innerHTML = `
            <button class="faq-question">
                ${faq.question}
                <svg class="w-6 h-6 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div class="faq-answer hidden">${faq.answer}</div>
        `;
        
        const button = item.querySelector('button');
        const answer = item.querySelector('.faq-answer');
        const arrow = item.querySelector('svg');
        
        button.addEventListener('click', () => {
            answer.classList.toggle('hidden');
            arrow.style.transform = answer.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        });
        
        faqGrid.appendChild(item);
    });
}

// Show model details popup
function showModelDetails(model) {
    const popup = document.getElementById('modelPopup');
    const content = popup.querySelector('.popup-content');
    const header = content.querySelector('.popup-header h2');
    const body = content.querySelector('.popup-body');
    
    header.textContent = model.name;
    
    body.innerHTML = `
        <div class="model-details">
            <div class="model-gallery">
                <div class="main-image-container">
                    <img src="${model.images[0]}" alt="${model.name}" class="model-image">
                </div>
                <div class="thumbnail-grid">
                    ${model.images.map((img, idx) => `
                        <div class="thumbnail ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                            <img src="${img}" alt="${model.name} - Image ${idx + 1}" class="model-image">
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="model-info">
                <div class="mb-6">
                    <h3 class="gradient-text">Details</h3>
                    <div class="grid grid-cols-2 gap-4 text-gray-300">
                        ${model.details.split('|').map(detail => `
                            <p>${detail.trim()}</p>
                        `).join('')}
                    </div>
                </div>
                <div class="mb-6">
                    <h3 class="gradient-text">Services</h3>
                    <div class="grid grid-cols-2 gap-2 text-gray-300">
                        ${model.services.map(service => `
                            <p>✓ ${service}</p>
                        `).join('')}
                    </div>
                </div>
                <button class="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded transition-colors book-now">
                    Book Now
                </button>
            </div>
        </div>
    `;
    
    // Add thumbnail click handlers
    const thumbnails = body.querySelectorAll('.thumbnail');
    const mainImage = body.querySelector('.main-image-container img');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const index = parseInt(thumb.dataset.index);
            mainImage.src = model.images[index];
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
    
    // Add book now button handler
    body.querySelector('.book-now').addEventListener('click', showContactPopup);
    
    popup.classList.remove('hidden');
}

// Show contact popup
function showContactPopup() {
    const popup = document.getElementById('contactPopup');
    const body = popup.querySelector('.contact-popup-body');
    
    body.innerHTML = `
        <div class="bg-gray-700 rounded-lg p-5 space-y-4">
            <div class="flex items-center space-x-3">
                <div class="bg-pink-600 p-2 rounded-full">
                    <span class="text-xl">📞</span>
                </div>
                <div>
                    <p class="text-gray-300 font-medium">Phone</p>
                    <p class="text-white">+44 XXX XXX XXXX</p>
                </div>
            </div>
            
            <div class="flex items-center space-x-3">
                <div class="bg-pink-600 p-2 rounded-full">
                    <span class="text-xl">📱</span>
                </div>
                <div>
                    <p class="text-gray-300 font-medium">WhatsApp</p>
                    <p class="text-white">+44 XXX XXX XXXX</p>
                </div>
            </div>
            
            <div class="flex items-center space-x-3">
                <div class="bg-pink-600 p-2 rounded-full">
                    <span class="text-xl">📧</span>
                </div>
                <div>
                    <p class="text-gray-300 font-medium">Email</p>
                    <p class="text-white">contact@example.com</p>
                </div>
            </div>
            
            <div class="flex items-center space-x-3">
                <div class="bg-pink-600 p-2 rounded-full">
                    <span class="text-xl">📍</span>
                </div>
                <div>
                    <p class="text-gray-300 font-medium">Location</p>
                    <p class="text-white">Central London, UK</p>
                </div>
            </div>

            <div class="flex items-center space-x-3">
                <div class="bg-pink-600 p-2 rounded-full">
                    <span class="text-xl">⏰</span>
                </div>
                <div>
                    <p class="text-gray-300 font-medium">Operating Hours</p>
                    <div class="text-white space-y-1">
                        <p>Sun-Thu: 8:00 PM - 5:00 AM</p>
                        <p>Fri-Sat: 8:00 AM - 7:00 AM</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-gray-400 text-sm space-y-2 mt-4">
            <p>✓ Models available 24/7</p>
            <p>✓ Instant booking confirmation</p>
            <p>✓ Discreet and professional service</p>
            <p>Please mention you found us on our website when contacting.</p>
        </div>
    `;
    
    popup.classList.remove('hidden');
}

// Initialize popups
function initializePopups() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        // Close on background click
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.add('hidden');
            }
        });
        
        // Close on X button click
        const closeBtn = popup.querySelector('.close-button');
        closeBtn.addEventListener('click', () => {
            popup.classList.add('hidden');
        });
    });
}

// Update copyright year
function updateYear() {
    const yearSpan = document.getElementById('currentYear');
    yearSpan.textContent = new Date().getFullYear();
} 