
function saveAndGo() {
    // 1. الإمساك بالقيم من المدخلات
    const user = document.getElementById('input-001').value;
    const pass = document.getElementById('input-002').value;

    // 2. التحقق من أن الحقول ليست فارغة
    if (user === "" || pass === "") {
        alert("لطفاً، املأ جميع الحقول أولاً");
        return;
    }

    // 3. حفظ البيانات في ذاكرة المتصفح (LocalStorage)
    localStorage.setItem('input-001', user);
    localStorage.setItem('input-002', pass);

    // 4. الانتقال إلى الصفحة الثانية
    window.location.href = "second-2.index.html";
}

// 1. كود الصفحة الأولى (Login)
function startLoading() {
    const user = document.getElementById('input-001').value;
    const pass = document.getElementById('input-002').value;

    if (user === "" || pass === "") {
        alert("اكتب البيانات أولاً يا بطل");
        return;
    }

    localStorage.setItem('userName', user);
    
    // إظهار الكرة
    document.getElementById('loader').style.display = 'flex';

    // الانتقال بعد 3 ثوانٍ إلى الصفحة الثانية
    setTimeout(function() {
        window.location.href = "second-2.index.html";
    }, 3000);
}

function gotonextpage() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'flex'; // إظهار الكرة البرتقالية
    }

    // ننتظر 3 ثواني قبل اتخاذ القرار
    setTimeout(function() {
        // الفحص: إذا كنا حالياً في الصفحة الثانية
        if (window.location.href.includes("second-2.index.html")) {
            window.location.href = "third-3.index.html"; 
        } 
        // الفحص: إذا كنا حالياً في الصفحة الثالثة
        else if (window.location.href.includes("third-3.index.html")) {
            window.location.href = "fouer-4.index.html"; 
        }
    }, 3000);
}




// 3. كود الترحيب (يعمل عند تحميل أي صفحة)
window.onload = function() {
    const savedName = localStorage.getItem('userName');
    const welcomeElement = document.getElementById('h1-001');
    if (savedName && welcomeElement) {
        welcomeElement.innerText = "أهلاً بك يا " + savedName;
    }
};