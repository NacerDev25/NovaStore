// قاموس الترجمات
const translations = {
    ar: {
        title: "متجر العمولة | أفضل المنتجات",
        nav_home: "الرئيسية",
        nav_products: "المنتجات",
        nav_settings: "الإعدادات",
        hero_title: "تسوق أفضل المنتجات المختارة بعناية",
        hero_subtitle: "نوفر لك أفضل العروض من أمازون، جوميا، وعلي إكسبريس في مكان واحد.",
        hero_btn: "تصفح المنتجات الآن",
        latest_products: "أحدث المنتجات",
        shop_now: "تسوق الآن",
        footer_rights: "جميع الحقوق محفوظة.",
        privacy: "سياسة الخصوصية",
        terms: "شروط الاستخدام"
    },
    fr: {
        title: "Affiliate Store | Meilleurs Produits",
        nav_home: "Accueil",
        nav_products: "Produits",
        nav_settings: "Paramètres",
        hero_title: "Découvrez les meilleurs produits sélectionnés",
        hero_subtitle: "Nous vous offrons les meilleures offres d'Amazon, Jumia et AliExpress au même endroit.",
        hero_btn: "Voir les produits",
        latest_products: "Derniers Produits",
        shop_now: "Acheter maintenant",
        footer_rights: "Tous droits réservés.",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation"
    }
};

// بيانات المنتجات (مترجمة)
const products = [
    {
        id: 1,
        titles: { ar: "ساعة ذكية متطورة", fr: "Montre Connectée Avancée" },
        price: "15000 DA",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        link: "https://amazon.com/example-watch",
        store: { ar: "أمازون", fr: "Amazon" }
    },
    {
        id: 2,
        titles: { ar: "سماعات لاسلكية", fr: "Écouteurs Sans Fil" },
        price: "8500 DA",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        link: "https://aliexpress.com/example-headphones",
        store: { ar: "علي إكسبريس", fr: "AliExpress" }
    }
];

// دالة لتطبيق الترجمة على الصفحة
function applyTranslations() {
    const lang = localStorage.getItem('selectedLang') || 'ar';
    const t = translations[lang];

    // تحديث اتجاه الصفحة واللغة
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // تحديث النصوص في الهيدر والبطول
    document.title = t.title;
    
    // روابط الكمبيوتر
    const desktopLinks = document.querySelectorAll('nav div a');
    if(desktopLinks.length >= 3) {
        desktopLinks[0].textContent = t.nav_home;
        desktopLinks[1].textContent = t.nav_products;
        desktopLinks[2].textContent = t.nav_settings;
    }

    // روابط الجوال
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    if(mobileLinks.length >= 3) {
        mobileLinks[0].textContent = t.nav_home;
        mobileLinks[1].textContent = t.nav_products;
        mobileLinks[2].textContent = t.nav_settings;
        mobileLinks.forEach(link => link.style.textAlign = lang === 'ar' ? 'right' : 'left');
    }

    // تحديث Hero Section
    const heroTitle = document.querySelector('section h1');
    if(heroTitle) heroTitle.textContent = t.hero_title;
    
    const heroSub = document.querySelector('section p');
    if(heroSub) heroSub.textContent = t.hero_subtitle;
    
    const heroBtn = document.querySelector('section a');
    if(heroBtn) heroBtn.textContent = t.hero_btn;

    // تحديث عنوان المنتجات
    const productsTitle = document.querySelector('main h2');
    if(productsTitle) productsTitle.textContent = t.latest_products;

    // إعادة عرض المنتجات باللغة الجديدة
    renderProducts(lang);
}

// دالة لإنشاء بطاقة المنتج
function createProductCard(product, lang) {
    const shopNowText = translations[lang].shop_now;
    return `
        <article class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
            <div class="relative pb-[100%]">
                <img src="${product.image}" alt="${product.titles[lang]}" class="absolute inset-0 w-full h-full object-cover">
                <span class="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
                    ${product.store[lang]}
                </span>
            </div>
            
            <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-lg font-bold text-gray-800 mb-2 line-clamp-2">${product.titles[lang]}</h3>
                <p class="text-blue-600 font-extrabold text-xl mb-4">${product.price}</p>
                
                <div class="mt-auto">
                    <a href="${product.link}" target="_blank" rel="noopener noreferrer" 
                       class="block w-full text-center bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors">
                        ${shopNowText}
                    </a>
                </div>
            </div>
        </article>
    `;
}

function renderProducts(lang) {
    const productsContainer = document.getElementById('products-container');
    if (productsContainer) {
        productsContainer.innerHTML = products.map(p => createProductCard(p, lang)).join('');
    }
}

// التحكم في قائمة الجوال
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // إغلاق القائمة عند الضغط على أي رابط
        const links = mobileMenu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// تشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    initMobileMenu();
});
