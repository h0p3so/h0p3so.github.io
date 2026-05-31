function asciianim() {
    const loader = document.getElementById('loader');
    const shell = document.getElementById('shell');

    if (sessionStorage.getItem('loaderPlayed')) {
        loader.style.display = 'none';
        shell.style.transition = 'none';
        shell.classList.add('visible');
        return;
    }

    const FRAMES_MS = 120;
    const el = document.getElementById('ascii-frame');
    const dots = document.getElementById('dots');

    let frameidx = 0, loop = 0, dotstate = 0;

    const ANIMATIONS = {
        butterfly: [typeof ASCII_ANIM_BUTTERFLY !== 'undefined' ? ASCII_ANIM_BUTTERFLY : null, 3],
        horse: [typeof ASCII_ANIM_HORSE !== 'undefined' ? ASCII_ANIM_HORSE : null, 5],
        bird: [typeof ASCII_ANIM_BIRD !== 'undefined' ? ASCII_ANIM_BIRD : null, 1],
    };

    const validkeys = Object.keys(ANIMATIONS).filter(k => ANIMATIONS[k][0]);
    const pickedkey = validkeys[Math.floor(Math.random() * validkeys.length)];
    const FRAMES = ANIMATIONS[pickedkey][0];
    const LOOPS = ANIMATIONS[pickedkey][1];

    const dotInterval = setInterval(() => {
        dotstate = (dotstate + 1) % 4;
        dots.textContent = '.'.repeat(dotstate) || '   ';
    }, 400);

    function renderframes(frames) {
        el.textContent = frames[frameidx].join('\n');
        if (!el.classList.contains('visible')) {
            el.classList.add('visible');
        }

        frameidx++;
        if (frameidx >= frames.length) {
            frameidx = 0;
            if (++loop >= LOOPS) {
                clearInterval(dotInterval);
                loader.classList.add('done');
                shell.classList.add('visible');
                sessionStorage.setItem('loaderPlayed', '1');
                return;
            }
        }
        setTimeout(() => renderframes(frames), FRAMES_MS);
    }

    setTimeout(() => renderframes(FRAMES), 200);
}

asciianim();