pNumberconstconst menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");

menuBtn.addEventListener("click",()=>nav.classList.toggle("active"));
document.querySelectorAll(".nav a").forEach(link=>link.addEventListener("click",()=>nav.classList.remove("active")));

document.querySelectorAll(".faq-question").forEach(question=>{
  question.addEventListener("click",()=>{
    const current=question.parentElement;
    document.querySelectorAll(".faq-item").forEach(item=>{
      if(item!==current)item.classList.remove("active");
    });
    current.classList.toggle("active");
  });
});

const consultationForm = document.getElementById("consultationForm");

consultationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const format = document.getElementById("format").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "994708601201";

    const text =
        "Salam. Sayt vasitəsilə konsultasiya üçün müraciət edirəm.%0A%0A" +
        "Ad və soyad: " + name + "%0A" +
        "Telefon: " + phone + "%0A" +
        "Yaş: " + age + "%0A" +
        "Seans formatı: " + format + "%0A%0A" +
        "Müraciət səbəbi: " + message;

    const whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(text);

window.location.href = whatsappURL;
});

  // REAL WHATSAPP NOMRESINI BURADA DEYIS:
  const whatsappNumber="994708601201";

  const text=`Salam. Sayt vasitəsilə konsultasiya üçün müraciət edirəm.

Ad və soyad: ${name}
Telefon: ${phone}
Yaş: ${age}
Seans formatı: ${format}

Müraciət səbəbi:
${message}`;

  window.open("https://wa.me/994708601201"+whatsappNumber+"?text="+encodeURIComponent(text),"_blank");
});

const articles={
  anxiety:{
    title:"Anksiyete nədir və nə zaman problemə çevrilir?",
    text:`<p>Anksiyete insanın təhlükə və ya qeyri-müəyyənlik qarşısında yaşadığı narahatlıq və gərginlik hissidir.</p><p>Müəyyən səviyyədə narahatlıq normaldır və insanı təhlükələrə qarşı hazırlaya bilər.</p><p>Lakin narahatlıq uzun müddət davam etdikdə və gündəlik həyatımıza, münasibətlərimizə və fəaliyyətimizə mane olduqda psixoloji dəstəyə ehtiyac yarana bilər.</p>`
  },
  thinking:{
    title:"Həddindən artıq düşünməyi necə anlamaq olar?",
    text:`<p>Bəzən zehnimizdə eyni hadisələri, sualları və mümkün ssenariləri dəfələrlə düşünürük.</p><p>Bu vəziyyət zamanla emosional yorğunluğa, narahatlığa və diqqətin dağılmasına səbəb ola bilər.</p><p>Düşüncələri zorla dayandırmaq əvəzinə, onları müşahidə etmək və düşüncə ilə fakt arasındakı fərqi görmək daha faydalı ola bilər.</p>`
  },
  confidence:{
    title:"Sağlam özünəinam necə formalaşır?",
    text:`<p>Özünəinam insanın öz bacarıqlarına, qərarlarına və öz dəyərinə münasibəti ilə əlaqəlidir.</p><p>Sağlam özünəinam yalnız uğur əldə etdikdə yaranmır. İnsan səhv etmək, öyrənmək və çətinliklərlə qarşılaşmaq prosesində də özünə qarşı daha dəstəkləyici münasibət formalaşdıra bilər.</p>`
  }
};

const articleModal=document.getElementById("articleModal");
const modalContent=document.getElementById("modalContent");
const modalClose=document.getElementById("modalClose");

document.querySelectorAll(".article-btn").forEach(button=>{
  button.addEventListener("click",()=>{
    const article=articles[button.dataset.article];
    modalContent.innerHTML=`<div class="eyebrow">FAYDALI MƏLUMAT</div><h2>${article.title}</h2>${article.text}`;
    articleModal.classList.add("active");
    document.body.style.overflow="hidden";
  });
});

function closeModal(){
  articleModal.classList.remove("active");
  document.body.style.overflow="";
}
modalClose.addEventListener("click",closeModal);
articleModal.addEventListener("click",e=>{if(e.target===articleModal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
