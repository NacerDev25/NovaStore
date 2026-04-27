// قاموس الترجمات
const translations = {
    ar: {
        title: "NovaStore | نوفا ستور",
        nav_home: "الرئيسية",
        nav_products: "المنتجات",
        nav_settings: "الإعدادات",
        search_placeholder: "ابحث عن المنتجات...",
        no_results: "لا توجد منتجات مطابقة لبحثك.",
        hero_title: "تسوق أفضل المنتجات المختارة بعناية",
        hero_subtitle: "نوفر لك أفضل العروض من أمازون، جوميا، وعلي إكسبريس في مكان واحد.",
        hero_btn: "تصفح المنتجات الآن",
        latest_products: "أحدث المنتجات",
        shop_now: "تسوق الآن",
        footer_rights: "جميع الحقوق محفوظة.",
        privacy: "سياسة الخصوصية",
        terms: "شروط الاستخدام",
        all_categories: "الكل",
        cat_electronics: "إلكترونيات",
        cat_watches: "ساعات",
        cat_audio: "صوتيات"
    },
    fr: {
        title: "NovaStore | Meilleurs Produits",
        nav_home: "Accueil",
        nav_products: "Produits",
        nav_settings: "Paramètres",
        search_placeholder: "Rechercher des produits...",
        no_results: "Aucun produit ne correspond à votre recherche.",
        hero_title: "Découvrez les meilleurs produits sélectionnés",
        hero_subtitle: "Nous vous offrons les meilleures offres d'Amazon, Jumia et AliExpress au même endroit.",
        hero_btn: "Voir les produits",
        latest_products: "Derniers Produits",
        shop_now: "Acheter maintenant",
        footer_rights: "Tous droits réservés.",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation",
        all_categories: "Tout",
        cat_electronics: "Électronique",
        cat_watches: "Montres",
        cat_audio: "Audio"
    }
};

// بيانات المنتجات (مترجمة)
const products = [
    {
        id: 1,
        titles: { ar: "ساعة ذكية متطورة", fr: "Montre Connectée Avancée" },
        category: "watches",
        price: "15000 DA",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        link: "https://amazon.com/example-watch",
        store: { ar: "أمازون", fr: "Amazon" }
    },
    {
        id: 2,
        titles: { ar: "سماعات لاسلكية", fr: "Écouteurs Sans Fil" },
        category: "audio",
        price: "8500 DA",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        link: "https://aliexpress.com/example-headphones",
        store: { ar: "علي إكسبريس", fr: "AliExpress" }
    },
    {
        id: 3,
        titles: { ar: "لوحة مفاتيح ميكانيكية", fr: "Clavier Mécanique" },
        category: "electronics",
        price: "12000 DA",
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
        link: "https://amazon.com/example-keyboard",
        store: { ar: "أمازون", fr: "Amazon" }
    }
];

let currentCategory = "all";
let currentSearch = "";

// دالة لتطبيق الترجمة على الصفحة
function applyTranslations() {
    const lang = localStorage.getItem('selectedLang') || 'ar';
    const t = translations[lang];

    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.title = t.title;
    
    // تحديث الروابط
    const desktopLinks = document.querySelectorAll('nav .hidden.md\\:flex a');
    if(desktopLinks.length >= 3) {
        desktopLinks[0].textContent = t.nav_home;
        desktopLinks[1].textContent = t.nav_products;
        desktopLinks[2].textContent = t.nav_settings;
    }

    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach((link, i) => {
        if(i === 0) link.textContent = t.nav_home;
        if(i === 1) link.textContent = t.nav_products;
        if(i === 2) link.textContent = t.nav_settings;
        link.style.textAlign = lang === 'ar' ? 'right' : 'left';
    });

    const heroTitle = document.querySelector('section h1');
    if(heroTitle) heroTitle.textContent = t.hero_title;
    const heroSub = document.querySelector('section p');
    if(heroSub) heroSub.textContent = t.hero_subtitle;
    const heroBtn = document.querySelector('section a');
    if(heroBtn) heroBtn.textContent = t.hero_btn;

    const productsTitle = document.querySelector('main h2');
    if(productsTitle) productsTitle.textContent = t.latest_products;

    const searchInput = document.getElementById('product-search');
    if(searchInput) searchInput.placeholder = t.search_placeholder;

    renderCategories(lang);
    renderProducts(lang);
}

function renderCategories(lang) {
    const container = document.getElementById('categories-container');
    if (!container) return;

    const t = translations[lang];
    const categories = [
        { id: 'all', name: t.all_categories },
        { id: 'electronics', name: t.cat_electronics },
        { id: 'watches', name: t.cat_watches },
        { id: 'audio', name: t.cat_audio }
    ];

    container.innerHTML = categories.map(cat => `
        <button onclick="filterByCategory('${cat.id}')" 
                class="px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${currentCategory === cat.id ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-indigo-50 border border-gray-100'}">
            ${cat.name}
        </button>
    `).join('');
}

function filterByCategory(catId) {
    currentCategory = catId;
    const lang = localStorage.getItem('selectedLang') || 'ar';
    renderCategories(lang);
    renderProducts(lang, currentSearch);
}

function initSearch() {
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase().trim();
            const lang = localStorage.getItem('selectedLang') || 'ar';
            renderProducts(lang, currentSearch);
        });
    }
}

function createProductCard(product, lang) {
    const shopNowText = translations[lang].shop_now;
    const productTitle = product.titles[lang];
    return `
        <article class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group">
            <div class="relative pb-[100%] overflow-hidden">
                <img src="${product.image}" alt="${productTitle}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <span class="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    ${product.store[lang]}
                </span>
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">${productTitle}</h3>
                <p class="text-indigo-600 font-extrabold text-xl mb-4">${product.price}</p>
                <div class="mt-auto">
                    <a href="${product.link}" target="_blank" rel="noopener noreferrer" 
                       class="block w-full text-center bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-indigo-600 transition-all shadow-md hover:shadow-indigo-200">
                        ${shopNowText}
                    </a>
                </div>
            </div>
        </article>
    `;
}

function renderProducts(lang, searchTerm = "") {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;

    let filtered = products;
    
    // تصفية حسب التصنيف
    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    // تصفية حسب البحث
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.titles[lang].toLowerCase().includes(searchTerm) ||
            p.store[lang].toLowerCase().includes(searchTerm)
        );
    }

    if (filtered.length === 0) {
        productsContainer.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-gray-500 text-xl font-medium">${translations[lang].no_results}</p>
            </div>
        `;
        return;
    }

    productsContainer.innerHTML = filtered.map(p => createProductCard(p, lang)).join('');
}

function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            menuBtn.setAttribute('aria-expanded', !isHidden);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    initMobileMenu();
    initSearch();
});
