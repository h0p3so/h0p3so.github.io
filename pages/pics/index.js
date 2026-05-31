const PHOTOS = [
    { src: '../../assets/imgs/pics/0001.jpg', caption: 'hiiii, this is me from 2025 (i think ?)' },
];

const masonry = document.getElementById('masonry');
const lb      = document.getElementById('lb');
const lbImg   = document.getElementById('lb-img');
const lbCap   = document.getElementById('lb-caption');

PHOTOS.reverse().forEach(p => {
    const div = document.createElement('div');
    div.className = 'm-item';
    const img = document.createElement('img');
    img.src = p.src;
    img.loading = 'lazy';
    div.appendChild(img);
    div.addEventListener('click', () => {
        lbImg.src = p.src;
        lbCap.textContent = p.caption;
        lb.classList.add('open');
    });
    masonry.appendChild(div);
});

document.getElementById('lb-close').addEventListener('click', () => lb.classList.remove('open'));
document.getElementById('lb-blur').addEventListener('click',  () => lb.classList.remove('open'));
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });