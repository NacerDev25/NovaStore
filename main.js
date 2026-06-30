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
        cat_women: "عالم المرأة",
        cat_men: "عالم الرجل",
        cat_tech: "قسم التقنية",
        theme_title: "مظهر الموقع (Theme)",
        theme_light: "الوضع الفاتح",
        theme_dark: "الوضع الليلي",
        menu_open: "فتح قائمة التنقل",
        menu_close: "إغلاق قائمة التنقل",
        nav_admin: "لوحة التحكم",
        nav_notifications: "الإشعارات",
        skip_to_content: "تخطي إلى المحتوى الأساسي",
        clear_search: "مسح البحث",
        search_results_found: "تم العثور على {count} من المنتجات.",
        search_results_none: "لا توجد نتائج مطابقة لبحثك."
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
        cat_women: "Monde des Femmes",
        cat_men: "Monde des Hommes",
        cat_tech: "Technologie",
        theme_title: "Thème du site",
        theme_light: "Mode Clair",
        theme_dark: "Mode Sombre",
        menu_open: "Ouvrir le menu",
        menu_close: "Fermer le menu",
        nav_admin: "Tableau de bord",
        nav_notifications: "Notifications",
        skip_to_content: "Passer au contenu principal",
        clear_search: "Effacer la recherche",
        search_results_found: "{count} produits trouvés.",
        search_results_none: "Aucun produit ne correspond à votre recherche."
    },
    en: {
        title: "NovaStore | Best Products",
        nav_home: "Home",
        nav_products: "Products",
        nav_settings: "Settings",
        search_placeholder: "Search products...",
        no_results: "No products match your search.",
        hero_title: "Shop the Best Selected Products",
        hero_subtitle: "We provide the best offers from Amazon, Jumia, and AliExpress in one place.",
        hero_btn: "Browse Products Now",
        latest_products: "Latest Products",
        shop_now: "Shop Now",
        footer_rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        all_categories: "All",
        cat_women: "Women's World",
        cat_men: "Men's World",
        cat_tech: "Tech Section",
        theme_title: "Site Theme",
        theme_light: "Light Mode",
        theme_dark: "Dark Mode",
        menu_open: "Open menu",
        menu_close: "Close menu",
        nav_admin: "Admin Panel",
        nav_notifications: "Notifications",
        skip_to_content: "Skip to main content",
        clear_search: "Clear search",
        search_results_found: "{count} products found.",
        search_results_none: "No products match your search."
    }
};

// بيانات المنتجات
const products = [
    {
        id: 1,
        titles: { ar: "ساعة رجالية فاخرة", fr: "Montre Luxe pour Homme", en: "Luxury Men's Watch" },
        category: "men",
        price: "15000 DA",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        link: "https://amazon.com/example-watch",
        store: { ar: "أمازون", fr: "Amazon", en: "Amazon" }
    },
    {
        id: 2,
        titles: { ar: "طقم إكسسوارات نسائي", fr: "Ensemble Bijoux Femme", en: "Women's Jewelry Set" },
        category: "women",
        price: "8500 DA",
        image: "https://images.unsplash.com/photo-1535633302704-b02923cf8c72?w=500",
        link: "https://aliexpress.com/example-jewelry",
        store: { ar: "علي إكسبريس", fr: "AliExpress", en: "AliExpress" }
    },
    {
        id: 3,
        titles: { ar: "لوحة مفاتيح ميكانيكية احترافية", fr: "Clavier Mécanique Pro", en: "Professional Mechanical Keyboard" },
        category: "tech",
        price: "12000 DA",
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
        link: "https://amazon.com/example-keyboard",
        store: { ar: "أمازون", fr: "Amazon", en: "Amazon" }
    },
    {
        id: 4,
        titles: { ar: "حقيبة يد نسائية أنيقة", fr: "Sac à Main Élégant", en: "Elegant Women's Handbag" },
        category: "women",
        price: "11000 DA",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
        link: "https://jumia.com.dz/example-bag",
        store: { ar: "جوميا", fr: "Jumia", en: "Jumia" }
    }
];

// بيانات الإشعارات
const notificationsData = [
    {
        id: 1,
        type: 'welcome',
        titles: { ar: 'مرحباً بك في NovaStore!', fr: 'Bienvenue chez NovaStore!', en: 'Welcome to NovaStore!' },
        messages: { ar: 'استمتع بتجربة تسوق فريدة مع أفضل العروض من أمازون، جوميا وعلي إكسبريس.', fr: 'Profitez d\'une expérience de shopping unique avec les meilleures offres d\'Amazon, Jumia et AliExpress.', en: 'Enjoy a unique shopping experience with the best deals from Amazon, Jumia and AliExpress.' },
        times: { ar: 'منذ دقيقتين', fr: 'Il y a 2 minutes', en: '2 minutes ago' },
        color: 'indigo',
        read: false
    },
    {
        id: 2,
        type: 'update',
        titles: { ar: 'تم تحديث شروط الخدمة', fr: 'Mise à jour des conditions', en: 'Terms of Service Updated' },
        messages: { ar: 'قمنا بتحديث سياسة الخصوصية وشروط الاستخدام لضمان حماية بياناتك.', fr: 'Nous avons mis à jour notre politique de confidentialité pour protéger vos données.', en: 'We have updated our privacy policy to ensure your data protection.' },
        times: { ar: 'منذ ساعة', fr: 'Il y a 1 heure', en: '1 hour ago' },
        color: 'green',
        read: false
    },
    {
        id: 3,
        type: 'offer',
        titles: { ar: 'عروض حصرية بانتظارك', fr: 'Offres exclusives vous attendent', en: 'Exclusive Offers Await' },
        messages: { ar: 'تخفيضات تصل إلى 30% في قسم التقنية لفترة محدودة.', fr: 'Réductions allant jusqu\'à 30% sur la technologie pour une durée limitée.', en: 'Discounts up to 30% on tech section for a limited time.' },
        times: { ar: 'منذ 5 ساعات', fr: 'Il y a 5 heures', en: '5 hours ago' },
        color: 'orange',
        read: false
    },
    {
        id: 4,
        type: 'order',
        titles: { ar: 'تتبع الطلب متاح الآن', fr: 'Suivi de commande disponible', en: 'Order Tracking Available' },
        messages: { ar: 'يمكنك الآن تتبع طلباتك مباشرة من لوحة التحكم.', fr: 'Vous pouvez maintenant suivre vos commandes depuis le tableau de bord.', en: 'You can now track your orders directly from the dashboard.' },
        times: { ar: 'منذ يوم', fr: 'Il y a 1 jour', en: '1 day ago' },
        color: 'blue',
        read: true
    },
    {
        id: 5,
        type: 'promo',
        titles: { ar: 'كود خصم خاص بك', fr: 'Code promo spécial', en: 'Special Promo Code' },
        messages: { ar: 'استخدم كود NOVA10 للحصول على خصم 10% على أول طلب.', fr: 'Utilisez le code NOVA10 pour 10% de réduction sur votre première commande.', en: 'Use code NOVA10 for 10% off your first order.' },
        times: { ar: 'منذ 3 أيام', fr: 'Il y a 3 jours', en: '3 days ago' },
        color: 'purple',
        read: true
    }
];

let currentCategory = "all";
let currentSearch = "";

// دالة لتطبيق المظهر (Theme)
function applyTheme() {
    const theme = localStorage.getItem('selectedTheme') || 'light';
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// دالة لعزل أو استعادة محتوى الموقع (لإمكانية الوصول والجمالية البصرية)
function toggleSiteInert(active) {
    const bodyChildren = document.querySelectorAll('body > :not(#nav-drawer):not(#nav-overlay):not(#notifications-drawer):not(#notifications-overlay)');
    
    bodyChildren.forEach(el => {
        if (active) {
            el.setAttribute('inert', '');
            el.setAttribute('aria-hidden', 'true');
        } else {
            el.removeAttribute('inert');
            el.removeAttribute('aria-hidden');
        }
    });
}

// دالة لتطبيق الترجمة على الصفحة
function applyTranslations() {
    const lang = localStorage.getItem('selectedLang') || 'ar';
    const t = translations[lang];

    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.title = t.title;

    const skipLink = document.getElementById('skip-link');
    if (skipLink) {
        skipLink.textContent = t.skip_to_content;
    }
    
    const navDrawerLinks = document.querySelectorAll('#nav-drawer a');
    navDrawerLinks.forEach((link, i) => {
        const span = link.querySelector('span');
        if (i === 0 && span) span.textContent = t.nav_home;
        if (i === 1 && span) span.textContent = t.nav_settings;
        if (i === 2 && span) span.textContent = t.nav_admin;
        if (i === 3 && span) span.textContent = t.terms;
        if (i === 4 && span) span.textContent = t.privacy;
        link.style.textAlign = lang === 'ar' ? 'right' : 'left';
    });

    const settingsBtn = document.getElementById('settings-btn');
    if(settingsBtn) {
        settingsBtn.setAttribute('aria-label', t.nav_settings);
        const settingsText = settingsBtn.querySelector('span');
        if(settingsText) settingsText.textContent = t.nav_settings;
    }

    const notificationsBtn = document.getElementById('notifications-btn');
    if(notificationsBtn) {
        notificationsBtn.setAttribute('aria-label', t.nav_notifications);
        const notificationsText = notificationsBtn.querySelector('span');
        if(notificationsText) notificationsText.textContent = t.nav_notifications;
    }

    const drawerSettingsBtn = document.querySelector('#notifications-drawer a[href*="settings.html"]');
    if (drawerSettingsBtn) {
        drawerSettingsBtn.setAttribute('aria-label', t.nav_settings);
        const drawerSettingsText = drawerSettingsBtn.querySelector('span');
        if (drawerSettingsText) drawerSettingsText.textContent = t.nav_settings;
    }

    const adminBtn = document.getElementById('admin-btn');
    if(adminBtn) {
        adminBtn.setAttribute('aria-label', t.nav_admin);
        const adminText = adminBtn.querySelector('span');
        if(adminText) adminText.textContent = t.nav_admin;
    }

    const menuBtn = document.getElementById('menu-btn');
    const drawer = document.getElementById('nav-drawer');
    if(menuBtn && drawer) {
        const isOpen = !drawer.classList.contains('invisible') && !drawer.classList.contains('translate-x-full');
        menuBtn.setAttribute('aria-label', isOpen ? t.menu_close : t.menu_open);
    }

    const heroTitle = document.querySelector('section h1');
    if(heroTitle) heroTitle.textContent = t.hero_title;
    const heroSub = document.querySelector('section p');
    if(heroSub) heroSub.textContent = t.hero_subtitle;
    const heroBtn = document.querySelector('section a');
    if(heroBtn) {
        const span = heroBtn.querySelector('span');
        if(span) span.textContent = t.hero_btn;
        else heroBtn.textContent = t.hero_btn;
    }

    const productsTitle = document.querySelector('main h2');
    if(productsTitle) productsTitle.textContent = t.latest_products;

    const searchInput = document.getElementById('product-search');
    if(searchInput) {
        searchInput.placeholder = t.search_placeholder;
        searchInput.setAttribute('aria-label', t.search_placeholder);
    }

    const clearBtn = document.getElementById('clear-search');
    if(clearBtn) {
        clearBtn.setAttribute('aria-label', t.clear_search);
    }

    // روابط التذييل (Footer)
    const footerLinks = document.querySelectorAll('footer a');
    if (footerLinks.length >= 2) {
        footerLinks[0].innerHTML = `<svg class="w-4 h-4 me-1.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>${t.privacy}`;
        footerLinks[1].innerHTML = `<svg class="w-4 h-4 me-1.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M8 7v12a2 2 0 0 0 2 2h9"></path><path d="M21 17a2 2 0 0 1-2 2H9"></path><path d="M19 12v5"></path></svg>${t.terms}`;
        footerLinks.forEach(link => link.classList.add('flex', 'items-center', 'justify-center'));
    }

    renderCategories(lang);
    renderProducts(lang);
}

function renderCategories(lang) {
    const container = document.getElementById('categories-container');
    if (!container) return;

    const t = translations[lang];
    const categoryIcons = {
        all: `<svg class="w-5 h-5 me-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
        women: `<svg class="w-5 h-5 me-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
        men: `<svg class="w-5 h-5 me-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.62 1.96V10a2 2 0 0 0 2 2h2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8h2a2 2 0 0 0 2-2V5.42a2 2 0 0 0-1.62-1.96Z"></path><path d="M12 2v6"></path><path d="m12 11 2 2 2-2"></path></svg>`,
        tech: `<svg class="w-5 h-5 me-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>`
    };

    const categories = [
        { id: 'all', name: t.all_categories },
        { id: 'women', name: t.cat_women },
        { id: 'men', name: t.cat_men },
        { id: 'tech', name: t.cat_tech }
    ];

    container.innerHTML = categories.map(cat => `
        <button onclick="filterByCategory('${cat.id}')" 
                aria-pressed="${currentCategory === cat.id}"
                class="px-6 py-2.5 rounded-full font-bold transition-all flex items-center justify-center whitespace-nowrap ${currentCategory === cat.id ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 border border-gray-100 dark:border-gray-700'}">
            ${categoryIcons[cat.id]}
            ${cat.name}
        </button>
    `).join('');
}

function filterByCategory(catId) {
    currentCategory = catId;
    const lang = localStorage.getItem('selectedLang') || 'ar';
    renderCategories(lang);
    renderProducts(lang, currentSearch);

    const drawer = document.getElementById('nav-drawer');
    const drawerIsOpen = drawer && !drawer.classList.contains('invisible') && !drawer.classList.contains('translate-x-full');

    function focusHeading() {
        const productsHeading = document.getElementById('products-heading');
        if (productsHeading) productsHeading.focus();
    }

    if (drawerIsOpen) {
        closeNavDrawer(focusHeading);
    } else {
        focusHeading();
    }
}

function initSearch() {
    const searchInput = document.getElementById('product-search');
    const clearBtn = document.getElementById('clear-search');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase().trim();
            const lang = localStorage.getItem('selectedLang') || 'ar';
            
            // إظهار أو إخفاء زر المسح
            if (clearBtn) {
                clearBtn.classList.toggle('hidden', currentSearch === "");
            }
            
            renderProducts(lang, currentSearch);
        });
    }

    if (clearBtn && searchInput) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = "";
            currentSearch = "";
            clearBtn.classList.add('hidden');
            const lang = localStorage.getItem('selectedLang') || 'ar';
            renderProducts(lang, "");
            searchInput.focus();
        });
    }
}

function createProductCard(product, lang) {
    const shopNowText = translations[lang].shop_now;
    const productTitle = product.titles[lang];
    const cartIcon = `<svg class="w-5 h-5 me-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>`;
    const storeLabel = lang === 'ar' ? 'المتجر' : (lang === 'fr' ? 'Boutique' : 'Store');
    
    return `
        <li role="listitem" class="flex">
        <article class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col group w-full">
            <div class="relative pb-[100%] overflow-hidden">
                <img src="${product.image}" alt="${productTitle}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <span class="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg" aria-label="${storeLabel}: ${product.store[lang]}">
                    ${product.store[lang]}
                </span>
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">${productTitle}</h3>
                <p class="text-indigo-600 dark:text-indigo-400 font-extrabold text-xl mb-4">${product.price}</p>
                <div class="mt-auto">
                    <a href="${product.link}" target="_blank" rel="noopener noreferrer" 
                       aria-label="${shopNowText}: ${productTitle}"
                       class="flex items-center justify-center w-full text-center bg-gray-900 dark:bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all shadow-md">
                        ${cartIcon}
                        ${shopNowText}
                    </a>
                </div>
            </div>
        </article>
        </li>
    `;
}

function renderProducts(lang, searchTerm = "") {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;

    let filtered = products;
    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.titles[lang].toLowerCase().includes(searchTerm) ||
            p.store[lang].toLowerCase().includes(searchTerm)
        );
    }

    const searchStatus = document.getElementById('search-status');
    if (searchStatus) {
        if (filtered.length > 0) {
            const statusMsg = translations[lang].search_results_found.replace('{count}', filtered.length);
            searchStatus.textContent = statusMsg;
        } else {
            searchStatus.textContent = translations[lang].search_results_none;
        }
    }

    if (filtered.length === 0) {
        productsContainer.innerHTML = `
            <div class="col-span-full text-center py-16 flex flex-col items-center justify-center">
                <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-full mb-6">
                    <svg class="w-16 h-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                </div>
                <p class="text-gray-500 dark:text-gray-400 text-xl font-bold mb-2">${translations[lang].no_results}</p>
                <p class="text-gray-400 dark:text-gray-500">جرب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً</p>
            </div>
        `;
        return;
    }

    productsContainer.innerHTML = filtered.map(p => createProductCard(p, lang)).join('');
}

function initNavDrawer() {
    const menuBtn = document.getElementById('menu-btn');
    const drawer = document.getElementById('nav-drawer');
    const closeBtn = document.getElementById('close-nav');
    const overlay = document.getElementById('nav-overlay');

    if (!menuBtn || !drawer || !closeBtn || !overlay) return;

    function openDrawer() {
        toggleSiteInert(true);
        drawer.classList.remove('invisible');
        drawer.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.replace('opacity-0', 'opacity-100'), 10);

        menuBtn.setAttribute('aria-expanded', 'true');
        drawer.setAttribute('aria-hidden', 'false');

        menuBtn.classList.add('is-open');

        document.body.style.overflow = 'hidden';

        const drawerTitle = document.getElementById('nav-drawer-title');
        if (drawerTitle) {
            drawerTitle.setAttribute('tabindex', '-1');
            drawerTitle.focus();
        }

        drawer.addEventListener('keydown', handleFocusTrap);
    }

    function closeDrawer(callback) {
        toggleSiteInert(false);
        drawer.classList.add('translate-x-full');
        overlay.classList.replace('opacity-100', 'opacity-0');

        menuBtn.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');

        menuBtn.classList.remove('is-open');

        document.body.style.overflow = '';

        drawer.removeEventListener('keydown', handleFocusTrap);

        setTimeout(() => {
            overlay.classList.add('hidden');
            drawer.classList.add('invisible');
            if (callback) {
                callback();
            } else {
                menuBtn.focus();
            }
        }, 300);
    }

    function handleFocusTrap(e) {
        if (e.key === 'Tab') {
            const focusableElements = drawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
        if (e.key === 'Escape') closeDrawer();
    }

    menuBtn.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    window.closeNavDrawer = closeDrawer;
}

// دالة لإغلاق القائمة الجانبية من روابط HTML
function closeNavDrawer(callback) {
    const drawer = document.getElementById('nav-drawer');
    const menuBtn = document.getElementById('menu-btn');
    const overlay = document.getElementById('nav-overlay');
    if (!drawer || drawer.classList.contains('invisible')) {
        if (callback) callback();
        return;
    }
    
    toggleSiteInert(false);
    drawer.classList.add('translate-x-full');
    if (overlay) {
        overlay.classList.replace('opacity-100', 'opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    }
    if (menuBtn) {
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.classList.remove('is-open');
    }
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
        drawer.classList.add('invisible');
        if (callback) {
            callback();
        } else if (menuBtn) {
            menuBtn.focus();
        }
    }, 300);
}

// تهيئة حاوية الإشعارات التفاعلية
function initNotificationsDrawer() {
    const notificationsBtn = document.getElementById('notifications-btn');
    const drawer = document.getElementById('notifications-drawer');
    const closeBtn = document.getElementById('close-notifications');
    const overlay = document.getElementById('notifications-overlay');

    if (!notificationsBtn || !drawer || !closeBtn || !overlay) return;

    function openDrawer() {
        toggleSiteInert(true);
        try { renderNotifications(); } catch(e) {}
        try { updateNotificationBadge(); } catch(e) {}
        drawer.classList.remove('invisible');
        drawer.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.replace('opacity-0', 'opacity-100'), 10);
        
        notificationsBtn.setAttribute('aria-expanded', 'true');
        drawer.setAttribute('aria-hidden', 'false');
        
        document.body.style.overflow = 'hidden';
        
        const drawerTitle = document.getElementById('drawer-title');
        if (drawerTitle) {
            drawerTitle.setAttribute('tabindex', '-1');
            drawerTitle.focus();
        }

        drawer.addEventListener('keydown', handleFocusTrap);
    }

    function closeDrawer() {
        toggleSiteInert(false); // استعادة تفاعل الموقع في الخلفية
        drawer.classList.add('-translate-x-full');
        overlay.classList.replace('opacity-100', 'opacity-0');
        setTimeout(() => {
            overlay.classList.add('hidden');
            drawer.classList.add('invisible');
        }, 300);
        
        notificationsBtn.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
        
        document.body.style.overflow = '';
        
        // استعادة التركيز للزر
        notificationsBtn.focus();
        drawer.removeEventListener('keydown', handleFocusTrap);
    }

    function handleFocusTrap(e) {
        if (e.key === 'Tab') {
            const focusableElements = drawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
        if (e.key === 'Escape') closeDrawer();
    }

    notificationsBtn.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
}

// تحديث عداد الإشعارات على الأيقونة
function updateNotificationBadge() {
    const btn = document.getElementById('notifications-btn');
    if (!btn) return;
    const unreadCount = notificationsData.filter(n => !n.read).length;
    let badge = btn.querySelector('.notif-badge');
    if (unreadCount > 0) {
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'notif-badge absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full shadow-lg leading-none';
            badge.setAttribute('aria-live', 'polite');
            const iconContainer = btn.querySelector('svg');
            if (iconContainer && iconContainer.parentElement) {
                iconContainer.parentElement.style.position = 'relative';
                iconContainer.parentElement.appendChild(badge);
            }
        }
        badge.textContent = unreadCount > 99 ? '99+' : unreadCount;
        badge.classList.remove('hidden');
    } else if (badge) {
        badge.classList.add('hidden');
    }
}

// عرض الإشعارات في القائمة الجانبية
function renderNotifications() {
    const container = document.getElementById('notifications-list');
    if (!container) return;
    const lang = localStorage.getItem('selectedLang') || 'ar';

    if (notificationsData.length === 0) {
        container.innerHTML = `
            <li class="flex flex-col items-center justify-center py-16 text-center" role="listitem">
                <div class="bg-gray-100 dark:bg-gray-800 p-5 rounded-full mb-4">
                    <svg class="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                    </svg>
                </div>
                <p class="text-gray-500 dark:text-gray-400 font-bold text-lg">${lang === 'ar' ? 'لا توجد إشعارات' : lang === 'fr' ? 'Aucune notification' : 'No notifications'}</p>
                <p class="text-gray-400 dark:text-gray-500 text-sm mt-1">${lang === 'ar' ? 'ستظهر الإشعارات هنا عند توفرها' : lang === 'fr' ? 'Les notifications apparaîtront ici' : 'Notifications will appear here'}</p>
            </li>`;
        return;
    }

    const colorMap = {
        indigo: { bg: 'bg-indigo-100 dark:bg-indigo-900/30', border: 'border-indigo-500 dark:border-indigo-400', icon: 'text-indigo-600 dark:text-indigo-400', dot: 'bg-indigo-500' },
        green: { bg: 'bg-green-100 dark:bg-green-900/30', border: 'border-green-500 dark:border-green-400', icon: 'text-green-600 dark:text-green-400', dot: 'bg-green-500' },
        orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', border: 'border-orange-500 dark:border-orange-400', icon: 'text-orange-600 dark:text-orange-400', dot: 'bg-orange-500' },
        blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', border: 'border-blue-500 dark:border-blue-400', icon: 'text-blue-600 dark:text-blue-400', dot: 'bg-blue-500' },
        purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', border: 'border-purple-500 dark:border-purple-400', icon: 'text-purple-600 dark:text-purple-400', dot: 'bg-purple-500' }
    };

    const typeIcons = {
        welcome: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
        update: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
        offer: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
        order: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
        promo: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`
    };

    container.innerHTML = notificationsData.map(n => {
        const c = colorMap[n.color] || colorMap.indigo;
        const iconSvg = typeIcons[n.type] || typeIcons.welcome;
        return `
            <li class="relative ${n.read ? 'opacity-70' : ''} transition-opacity" role="listitem">
                <button onclick="markNotificationRead(${n.id})" class="w-full text-right group">
                    <div class="relative bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border-r-4 ${n.border} hover:shadow-md transition-all">
                        ${!n.read ? `<span class="absolute -top-1 -right-1 w-3 h-3 ${c.dot} rounded-full shadow-sm" aria-label="${lang === 'ar' ? 'غير مقروء' : lang === 'fr' ? 'Non lu' : 'Unread'}"></span>` : ''}
                        <div class="flex gap-3">
                            <div class="flex-shrink-0 w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center ${c.icon}">
                                ${iconSvg}
                            </div>
                            <div class="flex-1 min-w-0">
                                <h3 class="font-bold text-sm text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">${n.titles[lang]}</h3>
                                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">${n.messages[lang]}</p>
                                <span class="text-xs text-gray-400 dark:text-gray-500 mt-2 inline-flex items-center gap-1">
                                    <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                    ${n.times[lang]}
                                </span>
                            </div>
                        </div>
                    </div>
                </button>
            </li>`;
    }).join('');

    const clearBtn = document.getElementById('clear-all-notif');
    if (clearBtn) {
        clearBtn.classList.toggle('hidden', notificationsData.length === 0);
        clearBtn.querySelector('span').textContent = lang === 'ar' ? 'مسح الكل' : lang === 'fr' ? 'Tout effacer' : 'Clear all';
    }
}

// تحديد إشعار كمقروء
function markNotificationRead(id) {
    const notif = notificationsData.find(n => n.id === id);
    if (!notif) return;
    if (!notif.read) {
        notif.read = true;
        renderNotifications();
        updateNotificationBadge();
    }
}

// مسح جميع الإشعارات
function clearAllNotifications() {
    const lang = localStorage.getItem('selectedLang') || 'ar';
    notificationsData.length = 0;
    renderNotifications();
    updateNotificationBadge();
}

// دالة لاستعادة التركيز عند العودة من صفحة الإعدادات أو لوحة التحكم
function restoreFocus() {
    const hash = window.location.hash;
    if (hash === '#settings-btn') {
        const settingsBtn = document.getElementById('settings-btn');
        if (settingsBtn) settingsBtn.focus();
        history.replaceState(null, null, ' ');
    } else if (hash === '#admin-btn') {
        const adminBtn = document.getElementById('admin-btn');
        if (adminBtn) adminBtn.focus();
        history.replaceState(null, null, ' ');
    } else if (hash === '#terms-link') {
        const termsLink = document.getElementById('terms-link');
        if (termsLink) termsLink.focus();
        history.replaceState(null, null, ' ');
    } else if (hash === '#notifications-btn') {
        const notificationsBtn = document.getElementById('notifications-btn');
        if (notificationsBtn) notificationsBtn.focus();
        history.replaceState(null, null, ' ');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    applyTranslations();
    initNavDrawer();
    initNotificationsDrawer();
    initSearch();
    restoreFocus();
    updateNotificationBadge();
});