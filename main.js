// بيانات المنتجات التجريبية (Affiliate Products)
const products = [
    {
        id: 1,
        title: "ساعة ذكية متطورة",
        price: "15000 د.ج",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        link: "https://amazon.com/example-watch",
        store: "أمازون"
    },
    {
        id: 2,
        title: "سماعات لاسلكية عازلة للضوضاء",
        price: "8500 د.ج",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        link: "https://aliexpress.com/example-headphones",
        store: "علي إكسبريس"
    },
    {
        id: 3,
        title: "حقيبة ظهر للكمبيوتر المحمول",
        price: "4200 د.ج",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        link: "https://jumia.com/example-bag",
        store: "جوميا"
    },
    {
        id: 4,
        title: "هاتف ذكي بذاكرة 256 جيجا",
        price: "45000 د.ج",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        link: "https://amazon.com/example-phone",
        store: "أمازون"
    }
];

// دالة لإنشاء بطاقة المنتج (Product Card)
function createProductCard(product) {
    return `
        <article class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
            <div class="relative pb-[100%]">
                <img src="${product.image}" alt="${product.title}" class="absolute inset-0 w-full h-full object-cover">
                <span class="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
                    ${product.store}
                </span>
            </div>
            
            <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-lg font-bold text-gray-800 mb-2 line-clamp-2">${product.title}</h3>
                <p class="text-blue-600 font-extrabold text-xl mb-4">${product.price}</p>
                
                <div class="mt-auto">
                    <a href="${product.link}" target="_blank" rel="noopener noreferrer" 
                       class="block w-full text-center bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors">
                        تسوق الآن
                    </a>
                </div>
            </div>
        </article>
    `;
}

// عرض المنتجات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    
    if (productsContainer) {
        // تفريغ المحتوى التجريبي (Skeleton)
        productsContainer.innerHTML = '';
        
        // إضافة المنتجات
        products.forEach(product => {
            productsContainer.innerHTML += createProductCard(product);
        });
    }
});
