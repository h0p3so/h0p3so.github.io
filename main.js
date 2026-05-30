const ANIMATIONS = {
  "butterfly": [ASCII_ANIM_BUTTERFLY, 3],
  "horse":     [ASCII_ANIM_HORSES,    5],
  "bird":      [ASCII_ANIM_BIRD,      1]
};

const ANIMATION_KEYS = Object.keys(ANIMATIONS);
const ANIMATION_NAME = ANIMATION_KEYS[Math.floor(Math.random() * ANIMATION_KEYS.length)];
const LOOPS = ANIMATIONS[ANIMATION_NAME][1];
const FRAME_MS = 120;
const el = document.getElementById('ascii-frame');
const dots = document.getElementById('dots');
const loader = document.getElementById('loader');
const page = document.getElementById('page');
let frameIdx = 0, loop = 0;
let dotsState = 0;

setInterval(() => {
	dotsState = (dotsState + 1) % 4;
	dots.textContent = '.'.repeat(dotsState) || '   ';
}, 400);

function renderFrame(frames) {
	el.textContent = frames[frameIdx].join('\n');
	if (!el.classList.contains('visible')) el.classList.add('visible');

	frameIdx++;
	if (frameIdx >= frames.length) {
		frameIdx = 0;
		loop++;
		if (loop >= LOOPS) {
			loader.classList.add('done');
			page.classList.add('visible');
			return;
		}
	}
	setTimeout(() => renderFrame(frames), FRAME_MS);
}

setTimeout(() => renderFrame(ANIMATIONS[ANIMATION_NAME][0]), 200);