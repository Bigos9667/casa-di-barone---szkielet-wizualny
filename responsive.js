/* Casa di Baron — menu mobilne (hamburger).
   Przycisk jest tworzony tutaj, więc w HTML nie trzeba nic dopisywać. */
(function () {
    var BREAKPOINT = 1100; // musi być zgodny z media query w responsive.css

    var nav = document.querySelector('nav');
    var links = nav ? nav.querySelector('.nav-links') : null;
    if (!nav || !links) return;

    if (!links.id) links.id = 'navLinks';

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nav-toggle';
    btn.setAttribute('aria-label', 'Menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', links.id);
    btn.innerHTML = '<span></span><span></span><span></span>';
    nav.appendChild(btn);

    function setOpen(open) {
        nav.classList.toggle('menu-open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        setOpen(!nav.classList.contains('menu-open'));
    });

    // kliknięcie w link zamyka menu
    links.addEventListener('click', function (e) {
        if (e.target.closest('a')) setOpen(false);
    });

    // kliknięcie poza nawigacją zamyka menu
    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target)) setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') setOpen(false);
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > BREAKPOINT) setOpen(false);
    });
})();
