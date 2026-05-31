const NAV_ITEMS = [
    { key: 'about', label: 'about', path: 'pages/about/index.html' },
    { key: 'pics', label: 'pics', path: 'pages/pics/index.html' },
]

function buildNav(currentPage, root) {
    root = root || '.';
    const grid = document.getElementById('nav-grid');
    const icon = root + '/assets/icons/folder-icon.png';

    NAV_ITEMS.forEach(item => {
        const a = document.createElement('a');
        a.className = 'nav-item' + (item.key === currentPage ? ' active' : '');
        a.href = root + '/' + item.path;
        a.innerHTML = `
            <div class="nav-icon"><img src="${icon}" alt=""></div>
            <span class="nav-label">${item.label}</span>`;
        grid.appendChild(a);
    });
}