/* =========================
   ローディング
========================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 700);

});


/* =========================
   スクロールアニメーション
========================= */

const targets = document.querySelectorAll(
    ".section-title, .about-container, .timeline-item, .skill-card, .work-card, .activity-container, .contact-content"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },

    {
        threshold: 0.15
    }

);


targets.forEach((target) => {
    observer.observe(target);
});


/* =========================
   スマホメニュー
========================= */

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("open");

});


/* =========================
   メニュークリックで閉じる
========================= */

document.querySelectorAll(".nav a").forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* =========================
   マウス移動による背景演出
========================= */

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (event) => {

    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;

    document.querySelector(".orb-1").style.transform =
        `translate(${x}px, ${y}px)`;

});


/* =========================
   現在位置によるナビゲーション
========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});
