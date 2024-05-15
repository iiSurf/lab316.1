// Menu data structure
let aTag = document.querySelector('a');
let aParent = document.getElementById('header');
let mainEl = document.getElementsByTagName(`main`);
let topMenuEl = document.getElementById(`top-menu`);

var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

for (let link of menuLinks) {
    console.log(link.text);
}
topMenuEl.appendChild(aParent);
aTag.href = link.href;
aTag.innerText = link.text;
aParent.appendChild(aParent);
aParent.href =link.href;
aParent.innerText = link.text;

mainEl[0].style.backgroundColor = 'var(--main-bg)';
mainEl[0].innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl[0].classList.add(`flex-ctr`);

topMenuEl.style.height = `100%`;
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEl.classList.add(`flex-around`);