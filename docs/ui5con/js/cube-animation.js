// Animated cube configuration
const cubes = [
	{ selector: '.pixel', dropDistance: 374, startDelay: 2000, duration: 10000, fadeSpeed: 6000 },
	{ selector: '.pixel2', dropDistance: 282, startDelay: 6000, duration: 9500, fadeSpeed: 5500 },
	{ selector: '.pixel3', dropDistance: 478, startDelay: 3000, duration: 9800, fadeSpeed: 5800 },
	{ selector: '.pixel4', dropDistance: 584, startDelay: 4500, duration: 10500, fadeSpeed: 6200 },
	{ selector: '.pixel5', dropDistance: 584, startDelay: 1500, duration: 9600, fadeSpeed: 5600 },
	{ selector: '.pixel6', dropDistance: 584, startDelay: 5500, duration: 10200, fadeSpeed: 6500 }
];

// Animate a single cube
function animateCube(config) {
	const element = document.querySelector(config.selector);
	if (!element) return;

	let startTime = null;
	const { dropDistance, duration, startDelay } = config;

	function animate(timestamp) {
		if (!startTime) startTime = timestamp;
		const elapsed = timestamp - startTime;

		// Wait for start delay
		if (elapsed < startDelay) {
			requestAnimationFrame(animate);
			return;
		}

		// Calculate progress within the cycle (0 to 1)
		const cycleTime = (elapsed - startDelay) % duration;
		const progress = cycleTime / duration;

		let yPos = 0;
		let opacity = 0;

		// Drop phase (0% - 35%)
		if (progress < 0.05) {
			opacity = progress / 0.05;
		} else if (progress < 0.25) {
			const dropProgress = (progress - 0.05) / 0.20;
			yPos = easeInOut(dropProgress) * dropDistance;
			opacity = 1;
		} else if (progress < 0.35) {
			// Bounce effect
			const bounceProgress = (progress - 0.25) / 0.10;
			yPos = dropDistance + bounce(bounceProgress) * dropDistance * -0.1;
			opacity = 1;
		}
		// Stay phase (35% - 50%)
		else if (progress < 0.50) {
			yPos = dropDistance;
			opacity = 1;
		}
		// Rise phase (50% - 70%)
		else if (progress < 0.70) {
			const riseProgress = (progress - 0.50) / 0.20;
			yPos = dropDistance * (1 - easeInOut(riseProgress));
			opacity = 1;
		}
		// Fade out and pause (70% - 100%)
		else if (progress < 0.75) {
			yPos = 0;
			opacity = 1 - ((progress - 0.70) / 0.05);
		} else {
			yPos = 0;
			opacity = 0;
		}

		element.style.transform = `translateY(${yPos}px)`;
		element.style.opacity = opacity;

		requestAnimationFrame(animate);
	}

	requestAnimationFrame(animate);
}

// Easing functions
function easeInOut(t) {
	return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function bounce(t) {
	if (t < 0.33) return Math.sin(t * 3 * Math.PI) * 0.5;
	if (t < 0.66) return Math.sin((t - 0.33) * 3 * Math.PI) * 0.3;
	return Math.sin((t - 0.66) * 3 * Math.PI) * 0.15;
}

// Start all animations when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => {
		cubes.forEach(animateCube);
	});
} else {
	cubes.forEach(animateCube);
}
